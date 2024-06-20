import React from "react";
import Banner from "../components/Banner";
import PopularPhone from "./PopularPhone";
import FavMobiles from "./FavMobiles";
import OtherPhones from "./OtherPhones";

const Home = () => {
  return (
    <div className="  bg-slate-300">
      <Banner/>
      <PopularPhone/>
      <FavMobiles/>
      <OtherPhones/>
    </div>
  );
};

export default Home;
