import React, { useContext,useEffect,useState } from 'react'
import './Basket.css'
import { IoBagAddSharp, IoBagRemoveSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { AuthContext } from "../../context/AuthContext";
import {
  addDoc,
  updateDoc,
  doc,
  collection,
  deleteDoc,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";



function Basket() {
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const ref = collection(db, "cart");
    if (currentUser) {
      const q = query(ref, where("user", "==", currentUser?.email));
      const unsub = onSnapshot(q, (snap) => {
        setCartItems(
          snap.docs.map((doc) => ({
            ...doc.data(),
            product: doc.data().product,
            id: doc.id,
          }))
        );
      });
      return unsub;
    }
  }, [currentUser]);
  const increaseOrDecreaseQuantity = (item1, increaseOrDecrease) => {
    const ref = collection(db, "cart");
    const findProduct = cartItems.find((elem) => elem.item.id ===item1);
    if (findProduct) {
      const refe = doc(db, "cart", findProduct.id);
        const newQuantity = {
          item: {
            ...findProduct.item,
          quantity: (findProduct.item.quantity += increaseOrDecrease),
        },
      };
      updateDoc(refe, newQuantity);
    } else {
      addDoc(ref, {
        findProduct: { ...findProduct.product, quantity: 1 },
        user: currentUser.email,
      });
    }
  };
  function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               var total =  0;
               for(var i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
  console.log(currentUser)
  return (
    <div className='basketpage'>
      {currentUser ? (
        <>
          <div className='products'>
            {cartItems.map((i, index) => {
              return (
                <div className='product-basket' key={index}>
                  <div className='product-img'>
                    <img src={i.item.img} alt={i.item.name} />
                  </div>
                  <div className='product-name'>
                    <h4>{i.item.name} </h4>
                    <div className='product-price'>
                      <div className='buttonGroup'>
                        <IoBagAddSharp className='button' onClick={() =>
                        increaseOrDecreaseQuantity(i.item?.id, 1)
                      } />
                        <span className='count'>{i.item.quantity}</span>
                        <IoBagRemoveSharp className='button'onClick={() =>
                        increaseOrDecreaseQuantity(i.item?.id, i.item.quantity>1 ?-1 :0)
                      }/>
                      </div>
                      <h2>{`${(i.item.quantity) * (i.item.price)} ₺`}</h2>

                    </div>
                  </div>
                  <MdDeleteForever className='removebasket' onClick={() => deleteDoc(doc(db, "cart", i?.id))} />
                </div>
              )
            })}
          </div>
          <div className='product-total-price'>
            <div className='product-total-detail'>
              <h3>Sipariş Detayı</h3>
              <p>{`Sipariş tutarı : ${sum(cartItems.map((i)=>{return(i.item.price)*(i.item.quantity)}))} ₺`}</p>
              <p>{`Kargo : Merhabalar ${currentUser.displayName} size özel kargomuz ücretsizdir.`}</p>
            </div>
            <h3>{`TOPLAM TUTAR :  ${sum(cartItems.map((i)=>{return(i.item.price)*(i.item.quantity)}))} ₺`}</h3>
          </div>
        </>
      ) : (
        <div className='giriş'>
          Sepete erişim için lütfen giriş yapınız...
        </div>
      )}
    </div>
  )
}

export default Basket