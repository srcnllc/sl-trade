import React, { useContext, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Kargo from '../../components/Kargo/Kargo';
import productdata from '../../json/data.json'
import './ProductDetail.css'
import { db } from "../../firebase/firebase";
import { AuthContext } from "../../context/AuthContext";
import {
    addDoc,
    updateDoc,
    doc,
    collection,
    query,
    where,
    onSnapshot,
  } from "firebase/firestore";


function ProductDetail() {
    let { name } = useParams();
    const [detailData, setDetailData] = useState([])
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
      const addToCart = () => {
        const ref = collection(db, "cart");
        const findProduct = cartItems.find((elem) => elem.item.id === detailData[0].id);
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
              item: { ...detailData[0], quantity: 1 },
              user: currentUser.email,
            });
          }
        }
      };
    
    useEffect(() => {
        setDetailData(productdata.filter(item => item.name === `${name}`))
    }, [name])
    return (
        <>
            <div className='detailpage'>
                <div className='leftPage'>
                    {detailData.map((item, index) => {
                        return (
                            <img src={item.img} alt={item.name} key={index} />
                        )
                    })}
                </div>
                <div className='rightPage'>
                    {detailData.map((item, index) => {
                        return (
                            <div key={index} className={'rightdesc'}>
                                <h1 className='righttitle'>{item.name}</h1>
                                <p>{item.desc}</p>
                                <div className='priceButton'>
                                    <h1>{`${item.price} ₺`}</h1>
                                    <button onClick={()=>addToCart(item)}>SEPETE EKLE</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Kargo />
        </>)
}

export default ProductDetail