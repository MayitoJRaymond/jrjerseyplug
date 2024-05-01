// import React from 'react'
'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const SliderImage = () => {
   
  return (
    <>
      <Swiper
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper m-10  h-96 w-4/5"
      >
       <SwiperSlide className='h-30'> <Image src={'/SHOE.jpg'} alt="" width={1100} height={400} /> </SwiperSlide>
        <SwiperSlide>  <Image src={'/Shoe Faint.jpg'} alt=""  width={1100} height={400} /> </SwiperSlide>
        <SwiperSlide>
          <Image src={'/shoeorange.jpg'} alt="" width={1100} height={400} />
        </SwiperSlide> 
        <SwiperSlide className='h-30'> <Image src={'/predator.jpeg'} alt="" width={1100} height={400} /> </SwiperSlide>
      </Swiper>
    </>
  )
}

export default SliderImage