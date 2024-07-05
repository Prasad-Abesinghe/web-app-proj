import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { FaBarsStaggered, FaCartShopping, FaXmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../contects/AuthProvider";
import "../index.css";
import { Button } from "flowbite-react";
//for side bar
("use client");
import { Drawer } from "flowbite-react";

const NavBar = () => {
  //for sidebar
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

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

  //navItems
  const navItems = [
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "DashBoard", path: "/admin/dashboard" },
  ];

  return (
    <header className=" bg-white w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={` py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-primary text-white" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className=" text-2xl font-bold flex items-center gap-2">
            <FaMobileAlt className="inline-block" />
            <h1>
              <span className=" text-accent">M</span>OBILES
            </h1>
          </Link>
          <div className="flex justify-between">
            <ul className=" md:flex items-center space-x-12 hidden">
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
                    0
                  </div>
                </div>
                <div>
                  <Drawer open={isOpen} onClose={handleClose} position="right">
                    <Drawer.Header
                      title="My Shopping Cart"
                    />
                    <Drawer.Items></Drawer.Items>
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
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
