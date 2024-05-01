'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




const shop = () => {
return (
    <>
    <div className=''>
    <h2 className='text-center text-black text-2xl font-bold mt-8 mb-2'>JRJerseyPlug Shop</h2>
    <Swiper
    slidesPerView={5}
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
    loop={true}
    className="mySwiper m-10 overflow-hidden w-4/5 h-56"
    >
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
        <SwiperSlide> <Image src={'/SHOE.jpg'} alt="" width={200} height={200}/></SwiperSlide>
    </Swiper>
    </div>
 
</>
)
}

export default shop