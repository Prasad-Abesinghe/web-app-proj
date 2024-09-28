import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useCartItemListContext } from "../hooks/useCartItemListContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";

import { FaCartShopping } from "react-icons/fa6";
import { CgEye } from "react-icons/cg";

const PhoneCards = ({ headline, phones,headline1 }) => {
  const { dispatch } = useCartItemListContext();
  const addToCart = (phone) => {

    dispatch({
      type: "ADD",
      payload: {
        _id: phone._id,
        mobileName: phone.mobileName,
        imageUrl: phone.imageUrl,
        brand: phone.brand,
        quantity: 1,
        price: phone.price,
      },
    });
  };
  return (
    <div className=" my-20 px-4 lg:px-24 z-0">
      <h2 className=" text-5xl text-center font-bold ">
        {headline} <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{headline1}</span>
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
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper my-20"
        >
          {phones.map((phone) => (
            <SwiperSlide
              key={phone._id}
              className=" mb-10 border-orange-800 border p-2 text-transparent text-white text-center"
            >
              <div>
                <img src={phone.imageUrl} alt="" className=" w-full" />
                <Link to={`/phone/${phone._id}`}>
                  <div className=" absolute top-3 right-5 bg-primary hover:bg-black p-2 rounded">
                    <CgEye
                      className="w-4 h-4 text-white font-bold
                    "
                    />
                  </div>
                </Link>
                <div className=" absolute top-3 left-5 bg-accent hover:bg-black p-2 rounded">
                  <FaCartShopping
                    className="w-4 h-4 text-white font-bold
                    "
                    onClick={()=>{addToCart(phone)}}
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhoneCards;
