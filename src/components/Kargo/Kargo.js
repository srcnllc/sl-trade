import React from 'react'
import './Kargo.css'
import { FaUserAlt } from "react-icons/fa";
import { BiTimer } from "react-icons/bi";
import { FiBox } from "react-icons/fi";
import { BsBoxArrowInLeft } from "react-icons/bs";




function Kargo() {
  return (
    <main className='kargoMain' >
    <p> Sl-Trade ile güvenli alışverişin keyfine varın...</p>
     <div className='kargoBox'>   
    <div className='kargoCard'>
        <FaUserAlt className='karticon' />
        <p><span>Memnuniyet Değişim Uygulaması</span>Satın aldığınız ürününüzü 30 gün içinde değiştirebilirsiniz.</p>
    </div>
    <div className='kargoCard'>
        <BiTimer className='karticon' />
        <p><span>Hızlı Teslimat</span>Gün içinde 20:00'ye kadar İstanbul,Kocaeli,Bursa,İzmir ve Ankara'dan vereceğiniz siparişler ertesi gün kapınızda...</p>
    </div>
    <div className='kargoCard'>
        <FiBox className='karticon' />
        <p><span>Ücretsiz Kargo</span>Satın aldığınız ürünlerinizde ücretsiz kargo fırsatlarından yararlanabilirsiniz.</p>
    </div>
    <div className='kargoCard'>
        <BsBoxArrowInLeft className='karticon' />
        <p><span>Kolay İade</span>Ürünlerinizi teslim aldıktan aldığınız veya siparişi verdiğiniz tarihten itibaren 14 gün içinde iade edebilirsiniz. </p>
    </div>
    </div>
    </main>

  )
}

export default Kargo