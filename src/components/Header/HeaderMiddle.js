import React from 'react'
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'
import { FaUserAlt,FaShoppingCart, FaHome } from "react-icons/fa";


function HeaderMiddle() {
  return (
    <div className='HeaderMiddle'>
      <img src={logo} alt="logo" />
      <Link className='anasayfa' to={`/sl-trade/`}>
        <p>SL-TRADE</p>
      </Link>
      <div className='user'>
        <Link className='accountbasket' to={`/sl-trade/`}>
          <FaHome className='icons' />
          <p>Ana Sayfa</p>
        </Link>
        <Link className='accountbasket' to={`/sepet`}>
          <FaShoppingCart className='icons' />
          <p>sepet</p>
        </Link>
        <div className='accountbasket'>
          <FaUserAlt className='icons' />
          <p>Giriş Yap</p>
        </div>
      </div>

    </div>
  )
}

export default HeaderMiddle