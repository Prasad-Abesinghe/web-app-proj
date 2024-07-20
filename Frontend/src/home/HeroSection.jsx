import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl font-bold lg:text-7xl text-center tracking-wide">
        Buy a Good Mobile Phone
        <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          For the Best Prices
        </span>
      </h1>
      <p className=" mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        tempore hic placeat cupiditate nulla, corrupti facilis dicta dolore,
        sapiente commodi ullam atque amet blanditiis libero dolorum, perferendis
        aut voluptates repellat.
      </p>
      <div className="flex justify-center my-10">
        <a
          href="/shop"
          className=" bg-gradient-to-r btn-accent py-3 px-4 mx-3 rounded-md"
        >
          Shop Now
        </a>
        <a href="#" className=" py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
