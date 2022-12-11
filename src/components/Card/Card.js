import React, { useContext, useEffect, useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext";
import { db } from "../../firebase/firebase";
import {
    addDoc,
    updateDoc,
    doc,
    collection,
    query,
    where,
    onSnapshot,
  } from "firebase/firestore";

function Card({item}) {
    const { currentUser } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

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
    console.log("itemss",item)
      const addToCart = (idm) => {
        const ref = collection(db, "cart");
        const findProduct = cartItems.find((elem) => elem.item.id ===idm.id);
        if (currentUser) {
            if (findProduct) {
                const refe = doc(db, "cart", findProduct.id);
                  const newQuantity = {
                    item: {
                      ...findProduct.item,
                    quantity: (findProduct.item.quantity += 1),
                  },
                };
                updateDoc(refe, newQuantity);
          } else {
            addDoc(ref, {
                item: { ...item, quantity: 1},
              user: currentUser.email,
            });
          }
        }
      };
    
    
    return (
        <div className='Card_item'  >
            <Link className='link' to={`/sl-trade/${item.topCategory}/${item.category}/${item.name}`}>
                <img src={item.img} alt="img" />
                <h2 >{item.name.toUpperCase()}</h2>
                <p className='price'>{`${item.price} ₺`}</p>
            </Link>
            <button className='buton' onClick={()=>addToCart(item)}>SEPETE EKLE</button>
        </div>
    )
}

export default Card