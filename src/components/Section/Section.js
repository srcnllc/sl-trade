import React from 'react'
import './Section.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper";
import Card from '../Card/Card';

function Section({productcatagory}) {
  return (
      <div className='sectionCard'>
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
                <Card item={item}/>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
  )
}

export default Section