import React, { useEffect, useState } from 'react'
import './HomePage.css'
import productdata from '../../json/data.json'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper";

function HomePage() {
  const [erkek, setErkek] = useState([])
  const [bayan,setBayan]=useState([])
  useEffect(() => {
    setErkek(productdata.filter(item => item.category === "erkekgiyim&aksesuar"))
    setBayan(productdata.filter(item => item.category === "kadingiyim&aksesuar"))
  }, [])
  
  return (
    <main>
      <section className='title'>
        <p>Bayanlar için ...</p>
        <div className='Card'>
          <Swiper
            slidesPerView={4}
            spaceBetween={erkek.length}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1},
              480: { slidesPerView: 2},
              768: { slidesPerView: 3},
              1024:{ slidesPerView: 4},
            }}
          >
            {bayan.map((item, index) => {
              return (
                <SwiperSlide className="mySwiper" key={index}>
                  <div className='Card_item'  >
                    <Link className='link' to={`/sl-trade/${item.topCategory}`}>
                      <img src={item.img} alt="img" />
                      <h2 >{item.name.toUpperCase()}</h2>
                      <p className='price'>{`${item.price} ₺`}</p>
                    </Link>
                    <button className='buton' onClick={()=>{alert('tıkladnı')}}>SEPETE EKLE</button>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <section className='title'>
      <p>Erkekler için ...</p>
        <div className='Card'>
          <Swiper
            slidesPerView={4}
            spaceBetween={erkek.length}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              320: { slidesPerView: 1},
              480: { slidesPerView: 2},
              768: { slidesPerView: 3},
              1024:{ slidesPerView: 4},
            }}
          >
            {erkek.map((item, index) => {
              return (
                <SwiperSlide className="mySwiper" key={index}>
                  <div className='Card_item'  >
                    <Link className='link' to={`/sl-trade/${item.topCategory}`}>
                      <img src={item.img} alt="img" />
                      <h2 >{item.name.toUpperCase()}</h2>
                      <p className='price'>{`${item.price} ₺`}</p>
                    </Link>
                    <button className='buton' onClick={()=>{alert('tıkladnı')}}>SEPETE EKLE</button>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </section>
      <section>
        home page
      </section>
    </main>
  )
}

export default HomePage