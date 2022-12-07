import React, { useContext, useEffect } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import {ProductBasketContext} from '../../context/ProductBasketContext'

function Card({item}) {
    const {addToCart,basketdata} =useContext(ProductBasketContext)
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