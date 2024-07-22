import React from "react";
import PopularPhone from "./PopularPhone";
import FavMobiles from "./FavMobiles";
import OtherPhones from "./OtherPhones";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
      </div>
      <PopularPhone />
      <FavMobiles />
      <OtherPhones />
    </>
  );
};

export default Home;
