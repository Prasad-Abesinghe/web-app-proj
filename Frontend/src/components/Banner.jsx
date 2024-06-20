import React from "react";
import BannarCard from "../home/BannarCard";
const Banner = () => {
  return (
    <div className=" px-4 lg:px-24 w-full flex-col justify-between md:flex-row bg-slate-300 flex items-center py-40">
        <div className="  md:w-1/2 space-y-8 h-full">
          <h2 className=" text-5xl font-bold leading-snug text-black">
            Buy a <br />{" "}
            <span className=" text-accent">Good Mobile Phone </span> <br />
            For the <br />
            <span className=" text-accent"> Best Prices</span>
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
            <button className="btn-accent py-2 px-4 rounded-r-lg">
              Search
            </button>
          </div>
        </div>
        <div className=" py-6 px-4 flex justify-center items-center">
          <BannarCard/>
        </div>
    </div>
  );
};

export default Banner;
