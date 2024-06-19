import React from "react";
import Banner from "../components/Banner";
import PopularPhone from "./PopularPhone";
import FavMobiles from "./FavMobiles";
import OtherPhones from "./OtherPhones";
import Review from "./Review";

const Home = () => {
  return (
    <div className="  bg-slate-300">
      <Banner/>
      <PopularPhone/>
      <FavMobiles/>
      <OtherPhones/>
      <Review/>
    </div>
  );
};

export default Home;
