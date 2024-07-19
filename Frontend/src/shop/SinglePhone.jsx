import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import {
  PackageCheck,
  RefreshCw,
  ChevronLeft,
  PhoneIcon,
  Phone,
  Clock,
} from "lucide-react";
import { Button } from "flowbite-react";
import { useCartItemListContext } from "../hooks/useCartItemListContext"; //////

const SinglePhone = () => {
  const { _id, mobileName, imageUrl, brand, mobileDescription, price } =
    useLoaderData();
  const { dispatch } = useCartItemListContext(); //////
  const addToCart = () => {
    //////
    console.log("ran addToCart");
    dispatch({
      type: "ADD",
      payload: {
        _id,
        mobileName,
        imageUrl,
        brand,
        quantity: 1,
        price,
      },
    });
  };
  return (
    <section className=" md:pt-40 pt-35 pb-32">
      <div className=" container mx-auto">
        <div className=" flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] xl:w-[700px] xl:h-[540px] flex justify-center items-center ">
            <img img src={imageUrl} alt="" className=" w-full" />
          </div>
          <div className=" flex-1 flex flex-col justify-center items-start gap-10">
            <Link to={"/"} className=" flex items-center gap-2 font-semibold">
              <BiChevronLeft size={20} />
              Back to Home
            </Link>
            <div className=" flex flex-col gap-6 items-start">
              <div>
                <h2 className="font-bold">{mobileName}</h2>
                <h3 className=" ">{brand}</h3>
                <p className=" text-lg font-semibold">${price}</p>
              </div>
              <p>{mobileDescription}</p>
              <Button className=" btn-accent p-2 font-bold" onClick={addToCart}>
                Add to Cart
              </Button>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" flex gap-2">
                <PackageCheck size={20} className=" text-accent" />
                <p>Free shipping on orders over $130</p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className=" text-accent" />
                <p>Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Phone size={20} className=" text-accent" />
                <p>
                  The phones are partially assembled and benifit from transpotr
                  insuarance
                </p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className=" text-accent" />
                <p>Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePhone;
