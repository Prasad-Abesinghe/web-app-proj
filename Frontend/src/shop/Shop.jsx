import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { useCartItemListContext } from "../hooks/useCartItemListContext";

const Shop = () => {
  const [phones, setPhones] = useState([]);
  const { dispatch } = useCartItemListContext();
  const addToCart = (phone) => {
    console.log("ran addToCart");
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
  useEffect(() => {
    fetch("http://localhost:5000/all-phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    
    <div className=" ml-60 mt-18 py-20 mx-0 lg:px-10 md:px-6">
      <h2 className=" text-5xl font-bold text-center">All Phones <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">are here</span> </h2>
      <div className=" grid gap-8 my-12 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        {phones.map((phone) => (
          <Card className="max-w-md items-center border-none hover:scale-110 ">
            <div className=" w-full bg-gradient-to-b from-gray-600 via-black to-gray-700 p-4 rounded-md">
              <div className=" flex flex-col gap-2 justify-center items-center">
                <img src={phone.imageUrl} alt="" className=" w-full rounded-md" />

                <h2>{phone.mobileName}</h2>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight dark:text-white">
                    {phone.brand}
                  </h5>
                </a>
                <span className="text-3xl font-bold dark:text-white">
                  ${phone.price}
                </span>
              </div>
              <button className=" w-full mb-2 rounded-md btn-accent px-4.5 py-2 text-center text-sm font-medium text-white" onClick={()=>{addToCart(phone)}}>
                Add to cart
              </button>
              <Link to={`/phone/${phone._id}`}>
                <button className="  btn-primary rounded-md w-full px-5  py-2 text-center text-sm font-medium text-white ">
                  More About
                </button>
              </Link>


            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
