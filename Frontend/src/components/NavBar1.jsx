import { FaMobileAlt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const NavBar1 = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  const navItems = [
    { link: "Shop", path: "/shop" },
    { link: "DashBoard", path: "/admin/dashboard" },
  ];
  return (
    <nav className="sticky top-0 z-50 py-3 border-b">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link to="/" className=" text-2xl font-bold flex items-center gap-2">
            <FaMobileAlt className="inline-block" />
            <h1>
              <span className=" text-accent">M</span>OBILES
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
          <ul className=" hidden lg:flex ml-14 space-x-12">
            {navItems.map(({ link, path }) => (
              <Link key={path} to={path} className="nav-link">
                {link}
              </Link>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <div className=" relative cursor-pointer">
              <button>
                <FaCartShopping className="text-[26px]" />
              </button>

              <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                0
              </div>
            </div>
            <a
              href="#"
              className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an Account
            </a>
          </div>
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
              <div className=" relative cursor-pointer">
                <button>
                  <FaCartShopping className="text-[26px]" />
                </button>

                <div className="bg-accent w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                  0
                </div>
              </div>
              <a
                href="#"
                className=" bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              >
                Create an Account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar1;
