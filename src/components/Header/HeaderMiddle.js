import React, { useContext } from 'react'
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'
import { FaUserAlt,FaShoppingCart, FaHome } from "react-icons/fa";
import { auth, provider } from "../../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";


function HeaderMiddle() {
  const {currentUser} = useContext(AuthContext);
  const loginGoogle = () => {
    signInWithPopup(auth, provider);
  };
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
        <Link className='accountbasket' to={`/sl-trade/sepet`}>
          <FaShoppingCart className='icons' />
          <p>sepet</p>
        </Link>
        {!currentUser ? (
        <div className='accountbasket' onClick={loginGoogle}>
          <FaUserAlt className='icons' />
          <p>Giriş Yap</p>
        </div>
        ):(
          <div className='accountbasket' onClick={() =>auth.signOut()}>
          <FaUserAlt className='icons' />
          <p>Çıkış Yap</p>
        </div>
        )}
      </div>

    </div>
  );
}

export default HeaderMiddle