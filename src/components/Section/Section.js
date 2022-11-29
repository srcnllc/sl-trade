import React from 'react'
import './Section.css'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper";

function Section({productcatagory}) {
  return (
      <div className='Card'>
        <Swiper
          slidesPerView={4}
          spaceBetween={productcatagory.length}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {productcatagory.map((item, index) => {
            return (
              <SwiperSlide className="mySwiper" key={index}>
                <div className='Card_item'  >
                  <Link className='link' to={`/sl-trade/${item.topCategory}`}>
                    <img src={item.img} alt="img" />
                    <h2 >{item.name.toUpperCase()}</h2>
                    <p className='price'>{`${item.price} ₺`}</p>
                  </Link>
                  <button className='buton' onClick={() => { alert('tıkladnı') }}>SEPETE EKLE</button>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
  )
}

export default Section