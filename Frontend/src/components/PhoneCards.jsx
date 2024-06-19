import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import {Autoplay, Pagination,Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";

const PhoneCards = ({ headline, phones }) => {
  return (
    <div className=" my-20 px-4 lg:px-24">
      <h2 className=" text-5xl text-center font-bold text-black ">
        {headline}
      </h2>
      {/*card */}
      <div>
        <Swiper
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={true}
          slidesPerView={2}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination,Autoplay,Navigation]}
          className="mySwiper my-20"
        >
          {phones.map((phone) => (
            <SwiperSlide
              key={phone._id}
              className=" mb-10 bg-primary text-white text-center border-black border-4"
            >
              <Link to={`/phone/${phone._id}`}>
                <div>
                  <img src={phone.imageUrl} alt="" className=" w-full" />
                  <div className=" absolute top-3 right-5 bg-accent hover:bg-black p-2 rounded">
                    <FaCartShopping
                      className="w-4 h-4 textwhi
                    "
                    />
                  </div>
                </div>
                <div>
                  <h3>{phone.mobileName}</h3>
                  <p>{phone.brand}</p>
                  <div>
                    <p>${phone.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhoneCards;