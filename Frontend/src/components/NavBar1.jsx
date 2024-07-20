import { FaMobileAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import React, { useContext, useEffect, useState } from "react";

import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../context/AuthProvider";
import "../index.css";
import { Button } from "flowbite-react";

//for side bar
("use client");
import { Drawer } from "flowbite-react";
import { ShoppingCart } from "./ShoppingCart";
import { useCartItemListContext } from "../hooks/useCartItemListContext";

const NavBar1 = () => {
  //for sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const { cartItemsList, TotalQuantity } = useCartItemListContext();
  const [isSticky, setSticky] = useState(false);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navItems = [
    { link: "Shop", path: "/shop" },
    { link: "DashBoard", path: "/admin/dashboard" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-neutral-700/80 border-b">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className=" text-2xl font-bold flex items-center gap-2">
            <FaMobileAlt className="inline-block" />
            <h1>
              <span className="font-bold bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
                M
              </span>
              OBILES
            </h1>
          </Link>
          <div className="hidden md:flex">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search a phone"
              className=" py-2 px-8 lg:rounded-l-lg border-none outline-none"
            />
            <button className="btn-accent py-2 px-4 rounded-r-lg">
              Search
            </button>
          </div>
          <ul className=" hidden lg:flex justify-center items-center ml-14 space-x-12">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="nav-link">
                {link}
              </Link>
            ))}
            <div>
              <div className=" relative cursor-pointer">
                <button onClick={() => setIsOpen(true)}>
                  <FaCartShopping className="text-[26px]" />
                </button>

                <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                  {TotalQuantity}
                </div>
              </div>
              <div>
                <Drawer
                  className="w-2/5"
                  open={isOpen}
                  onClose={handleClose}
                  position="right"
                >
                  <Drawer.Header title="My Shopping Cart" />
                  <Drawer.Items>
                    <ShoppingCart />
                  </Drawer.Items>
                </Drawer>
              </div>
            </div>
            {user ? (
              <Link>
                <div className="">
                  <img
                    src={user?.photoURL}
                    // alt={<CgProfile />}
                    defaultValue={<CgProfile />}
                    className="rounded-full"
                    width="30px"
                  />
                </div>

                {/* <  CgProfile className="text-[26px]" /> */}
              </Link>
            ) : (
              <Link to="sign-up">
                {" "}
                <Button
                  className={` btn-primary border-none ${
                    isSticky
                      ? "sticky btn-accent bg-[#D82349] hover:bg-[#B32241] border-none"
                      : ""
                  }`}
                >
                  Sign In
                </Button>
              </Link>
            )}
          </ul>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? (
                <RxCross1 className="text-[26px]" />
              ) : (
                <MdMenu className="text-[26px]" />
              )}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed bg-white right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <div className=" md:hidden lg:hidden flex">
              <input
                type="search"
                name="search"
                id="search"
                placeholder="search a phone"
                className=" py-2 px-8 lg:rounded-l-lg border-none outline-none"
              />
              <button className="btn-accent py-2 px-4 rounded-r-lg">
                Search
              </button>
            </div>
            <ul className=" flex flex-col">
              {navItems.map(({ link, path }) => (
                <Link key={path} to={path} className=" py-4">
                  {link}
                </Link>
              ))}
            </ul>
            <div className="flex space-x-12">
              <div>
                <div className=" relative cursor-pointer">
                  <button onClick={() => setIsOpen(true)}>
                    <FaCartShopping className="text-[26px]" />
                  </button>

                  <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                    {TotalQuantity}
                  </div>
                </div>
                <div>
                  <Drawer
                    className="w-2/5"
                    open={isOpen}
                    onClose={handleClose}
                    position="right"
                  >
                    <Drawer.Header title="My Shopping Cart" />
                    <Drawer.Items>
                      <ShoppingCart />
                    </Drawer.Items>
                  </Drawer>
                </div>
              </div>
              {user ? (
                <Link>
                  <div className="">
                    <img
                      src={user?.photoURL}
                      // alt={<CgProfile />}
                      defaultValue={<CgProfile />}
                      className="rounded-full"
                      width="30px"
                    />
                  </div>

                  {/* <  CgProfile className="text-[26px]" /> */}
                </Link>
              ) : (
                <Link to="sign-up">
                  {" "}
                  <Button
                    className={` btn-primary border-none ${
                      isSticky
                        ? "sticky btn-accent bg-[#D82349] hover:bg-[#B32241] border-none"
                        : ""
                    }`}
                  >
                    Sign In
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar1;
