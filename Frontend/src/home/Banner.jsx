import React from "react";
import BannarCard from "./BannarCard";
const Banner = () => {
  return (
    <div className=" px-4 lg:px-24 w-full flex-col justify-between md:flex-row flex items-center py-40">
      <div className=" py-6 px-4 flex justify-center items-center">
        <BannarCard />
      </div>
      <div className="  md:w-1/2 space-y-8 h-full">
        <h2 className=" text-5xl font-bold leading-snug text-slate-300">
          Buy a <br />{" "}
          <span className=" font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            Good Mobile Phone{" "}
          </span>{" "}
          <br />
          For the <br />
          <span className=" font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
            {" "}
            Best Prices
          </span>
        </h2>
        <p className=" md:w-4/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          voluptate sit ipsa aperiam earum itaque sapiente, totam suscipit vel
          cupiditate harum neque? Cumque dolor, eveniet corporis nihil
          blanditiis eius ipsam?
        </p>
        <div>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search a phone"
            className=" py-2 px-8 rounded-l-lg border-none outline-none"
          />
          <button className="btn-accent py-2 px-4 rounded-r-lg">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
