import React from "react";
import FavMobile from "../home/favmobiles.png";
import { Link } from "react-router-dom";

const FavMobiles = () => {
  return (
    <div className="  lg:flex-row my-20 flex md:justify-center md:flex-row flex-col justify-between items-center gap-10">
      <div className=" px-4 md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find your favourite{" "}
          <span className="  bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Mobile here!
          </span>
        </h2>
        <p className=" mb-10 text-neutral-500 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          provident sint exercitationem quasi pariatur architecto minima
          cupiditate magni molestiae maxime dolores laboriosam adipisci
          recusandae vero autem nulla eligendi consequuntur tempora!
        </p>
        <div className=" flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className=" text-3xl font-bold">800+</h3>
            <p className=" text-base  bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Phone listening</p>
          </div>
          <div>
            <h3 className=" text-3xl font-bold">200+</h3>
            <p className=" text-base  bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Registered users</p>
          </div>
          <div>
            <h3 className=" text-3xl font-bold">700+</h3>
            <p className=" text-base  bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">Phone listening</p>
          </div>
        </div>
        <Link to="/shop">
          <button
            className=" btn-primary text-white font-semibold py-3.5 px-5
         rounded transition-all duration-300 mt-4 ml-0"
          >
            Expolre More
          </button>
        </Link>
      </div>{" "}
      <div className=" md:w-1/2">
        <img src={FavMobile} alt="" className="" />
      </div>
    </div>
  );
};

export default FavMobiles;
