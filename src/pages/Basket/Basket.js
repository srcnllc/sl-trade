import React, { useContext } from 'react'
import './Basket.css'
import { IoBagAddSharp, IoBagRemoveSharp } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { ProductBasketContext } from '../../context/ProductBasketContext'
import { AuthContext } from "../../context/AuthContext";


function Basket() {
  const { basketdata,removeFromCart} = useContext(ProductBasketContext)
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='basketpage'>
      {/* {currentUser ? ( */}
      {currentUser ? (
        <>
          <div className='products'>
            {basketdata.cart.map((item, index) => {
              return (
                <div className='product-basket' key={index}>
                  <div className='product-img'>
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className='product-name'>
                    <h4>{item.name} </h4>
                    <div className='product-price'>
                      <div className='buttonGroup'>
                        <IoBagAddSharp className='button' onClick={() => alert("artırıldı")} />
                        <span className='count'>{item.count}</span>
                        <IoBagRemoveSharp className='button' onClick={() => alert("artırıldı")} />
                      </div>
                      <h2>{`${(item.count) * (item.price)} ₺`}</h2>

                    </div>
                  </div>
                  <MdDeleteForever className='removebasket' onClick={() => removeFromCart()} />
                </div>
              )
            })}
          </div>
          <div className='product-total-price'>
            <div className='product-total-detail'>
              <h3>Sipariş Detayı</h3>
              <p>Sipariş tutarı:</p>
              <p>Kargo : ÜCRETSİZ</p>
            </div>
            <h3>TOPLAM TUTAR:</h3>
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