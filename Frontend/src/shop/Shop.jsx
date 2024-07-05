import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-phones")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    
    <div className=" ml-60 mt-18 py-20 mx-0 lg:px-10 md:px-6 bg-slate-300">
      <h2 className=" text-5xl font-bold text-center">All Phones are here</h2>
      <div className=" grid gap-8 my-12 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 ">
        {phones.map((phone) => (
          <Card className="max-w-md items-center hover:scale-110 ">
            <div className="bg-slate-600 w-full rounded-md">
              <div className=" flex flex-col gap-2 justify-center items-center">
                <img src={phone.imageUrl} alt="" className=" w-full" />

                <h2>{phone.mobileName}</h2>
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {phone.brand}
                  </h5>
                </a>
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${phone.price}
                </span>
              </div>
              <button className=" w-full mb-2 btn-primary px-4.5 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                Add to cart
              </button>
              <Link to={`/phone/${phone._id}`}>
                <button className=" btn-accent w-full px-5 py-2 border-none text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
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
