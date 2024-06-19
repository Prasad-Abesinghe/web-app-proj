import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePhone = () => {
  const { _id, mobileName, imageUrl, brand, mobileDescription, price } =
    useLoaderData();
  return <div className=" mt-28 px-4 lg:px-24">SinglePhone {mobileName} </div>;
};

export default SinglePhone;
