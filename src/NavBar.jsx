import React, { useState } from "react";
import dropdownIcon from "./assets/icons8-dropdown-50.png";
import searchIcon from "./assets/icons8-search-32.png";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [dropdowns, setDropdowns] = useState({
    products: false,
    ourData: false,
    resources: false,
    aboutUs: false,
  });

  let closeTimeout;

  const closeDropdowns = () => {
    closeTimeout = setTimeout(() => {
      setDropdowns({
        products: false,
        ourData: false,
        resources: false,
        aboutUs: false,
      });
    }, 200); // Adjust the delay here (in milliseconds)
  };

  const toggleDropdown = (dropdown) => {
    clearTimeout(closeTimeout);
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav className="p-4  mt-3">
      <div className="container px-12 mx-auto flex justify-around gap-4 items-center">
        <div className="text-white text-2xl flex-1">
          <a href="/">
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/demand-science-logo-2.svg"
              alt=""
            />
          </a>
        </div>
        <div className="lg:flex hidden justify-center flex-grow gap-6">
          <div
            onMouseEnter={() => clearTimeout(closeTimeout)}
            onMouseLeave={() => closeDropdowns()}
            className="relative ml-4"
          >
            <a
              href="/"
              className="text-lg focus:outline-none flex items-center font-medium"
            >
              Home
            </a>
          </div>
          <div
            onMouseEnter={() => clearTimeout(closeTimeout)}
            onMouseLeave={() => closeDropdowns()}
            className="relative ml-4"
          >
            <button
              onClick={() => toggleDropdown("products")}
              className="text-lg focus:outline-none flex items-center font-medium"
            >
              Products{" "}
              <img
                src={dropdownIcon}
                alt="dropdown icon"
                className="ml-1 h-4 w-4"
              />
            </button>
            {dropdowns.products && (
              <div
                className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                onMouseEnter={() => clearTimeout(closeTimeout)}
                onMouseLeave={() => closeDropdowns()}
              >
                <a
                  href="/contentsyndication"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Content Syndication
                </a>
                <a
                  href="/purepush"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Pure Push
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  ABM Display
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Product 4
                </a>
              </div>
            )}
          </div>
          {/* Repeat the above block for other dropdowns */}
          <div className="relative ml-4">
            <button
              onClick={() => toggleDropdown("ourData")}
              className="text-lg focus:outline-none flex items-center font-medium"
            >
              Our Data{" "}
              <img
                src={dropdownIcon}
                alt="dropdown icon"
                className="ml-1 h-4 w-4"
              />
            </button>
            {dropdowns.ourData && (
              <div
                className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                onMouseEnter={() => clearTimeout(closeTimeout)}
                onMouseLeave={() => closeDropdowns()}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Data 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Data 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Data 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Data 4
                </a>
              </div>
            )}
          </div>

          <div className="relative ml-4">
            <button className="text-lg focus:outline-none flex items-center font-medium">
              About Us{" "}
            </button>
          </div>
        </div>
        {/* Let's Talk Button */}
        <button className="bg-white hidden lg:block hover:bg-[#CC0047] hover:text-white text-[#CC0047] text-lg  py-[4px] px-6 rounded-full focus:outline-none mr-4 border border-[#CC0047]">
          Let&apos;s Talk
        </button>
        {/* Search Icon */}

        <FaBars className="block lg:hidden text-2xl " />
      </div>
    </nav>
  );
};

export default NavBar;
