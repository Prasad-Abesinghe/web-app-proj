import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import {Autoplay, EffectFlip, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div >
      <Swiper
        effect={"flip"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[Autoplay,EffectFlip, Pagination, Navigation]}
        className="mySwiper w-[350px] h-[450px] "
      >
        <SwiperSlide className="">
          <div className=" bg-white rounded-2xl">
            <img
              className=" rounded-t-2xl w-full"
              src="https://d16lwq5o0fvd7.cloudfront.net/images/presets/product_page_normal/catalogue/products/mu7f3zda/mu7f3zda_1.jpg"
            />
            <div className=" flex flex-col rounded-b-2xl py-5 bg-primary text-white justify-center items-center pt-3">
              <h2 className=" font-semibold" >
                Iphone 15 Pro
              </h2>
              <h3 className=" text-accent">
                Apple
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-2xl">
            <img
              className=" rounded-t-2xl w-full"
              src="https://idealz.lk/wp-content/uploads/2024/02/S24-Ultra-Grey.jpg"
            />
            <div className=" flex flex-col rounded-b-2xl py-5 bg-primary text-white justify-center items-center pt-3">
              <h2 className=" font-semibold" >
                Galaxy S22 Ultra
              </h2>
              <h3 className=" text-accent">
                Samsung
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-2xl">
            <img
              className=" rounded-t-2xl w-full"
              src="https://i5.walmartimages.com/seo/Sony-XPERIA-1-IV-5G-smartphone-dual-SIM-RAM-12-GB-Internal-Memory-512-microSD-slot-OLED-display-6-5-3840-x-1644-pixels-120-Hz-3x-rear-cameras-MP-MP-f_4eec95ff-5e5e-43dd-b273-29a6a5cbc7ca.0eebd9250e30a868932dac66b9f6216f.jpeg"
            />
            <div className=" flex flex-col rounded-b-2xl py-5 bg-primary text-white justify-center items-center pt-3">
              <h2 className=" font-semibold" >
                Xperia I Mark IV
              </h2>
              <h3 className=" text-accent">
                Sony
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-2xl">
            <img
              className=" rounded-t-2xl w-full"
              src="https://i.ebayimg.com/images/g/FfEAAOSwTEZhFf8I/s-l1600.jpg"
            />
                       <div className=" flex flex-col rounded-b-2xl py-5 bg-primary text-white justify-center items-center pt-3">
              <h2 className=" font-semibold" >
                P50 Pro
              </h2>
              <h3 className=" text-accent">
                Huawei
              </h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-white rounded-2xl">
            <img
              className=" rounded-t-2xl w-full"
              src="https://dialcom.lk/wp-content/uploads/Xiaomi-Redmi-Note-13-Pro-5G-8GB-RAM-256GB-1.jpg"
            />
            <div className=" flex flex-col rounded-b-2xl py-5 bg-primary text-white justify-center items-center pt-3">
              <h2 className=" font-semibold" >
                Note 13 Pro
              </h2>
              <h3 className=" text-accent">
                Xiaomi
              </h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
