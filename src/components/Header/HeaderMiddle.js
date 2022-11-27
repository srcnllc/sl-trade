import React from 'react'
import logo from "../../img/logo.png"
import { FaUserAlt} from "react-icons/fa";
import { FaShoppingCart ,FaHome} from "react-icons/fa";


function HeaderMiddle() {
  return (
    <div className='HeaderMiddle'>
        <img src={logo} alt="logo"/>
        <p>SL-TRADE</p>
        <div className='user'> 
            <div className='accountbasket'>
              <FaHome className='icons'/>
              <p>Ana Sayfa</p>
            </div>
            <div className='accountbasket'>
                <FaShoppingCart className='icons'/>
                <p>sepet</p>
            </div>
            <div className='accountbasket'>
                <FaUserAlt className='icons'/>
                <p>Giriş Yap</p>
            </div>
        </div>

    </div>
  )
}

export default HeaderMiddle