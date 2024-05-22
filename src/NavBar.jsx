import React, { useState } from "react";
import dropdownIcon from "./assets/icons8-dropdown-50.png";
import searchIcon from "./assets/icons8-search-32.png";

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
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">
          <a href="/">
            <img
              src="https://demandscience.com/wp-content/uploads/2023/02/demand-science-logo-2.svg"
              alt=""
            />
          </a>
        </div>
        <div className="sm:flex hidden justify-center flex-grow gap-6">
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
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Product 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Product 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Product 3
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
            <button
              onClick={() => toggleDropdown("resources")}
              className="text-lg focus:outline-none flex items-center font-medium"
            >
              Resources{" "}
              <img
                src={dropdownIcon}
                alt="dropdown icon"
                className="ml-1 h-4 w-4"
              />
            </button>
            {dropdowns.resources && (
              <div
                className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                onMouseEnter={() => clearTimeout(closeTimeout)}
                onMouseLeave={() => closeDropdowns()}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Resource 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Resource 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Resource 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Resource 4
                </a>
              </div>
            )}
          </div>
          <div className="relative ml-4">
            <button
              onClick={() => toggleDropdown("aboutUs")}
              className="text-lg focus:outline-none flex items-center font-medium"
            >
              About Us{" "}
              <img
                src={dropdownIcon}
                alt="dropdown icon"
                className="ml-1 h-4 w-4"
              />
            </button>
            {dropdowns.aboutUs && (
              <div
                className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                onMouseEnter={() => clearTimeout(closeTimeout)}
                onMouseLeave={() => closeDropdowns()}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  About Us 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  About Us 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  About Us 3
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  About Us 4
                </a>
              </div>
            )}
          </div>
        </div>
        {/* Let's Talk Button */}
        <button className="bg-white hover:bg-[#CC0047] hover:text-white text-[#CC0047] text-lg  py-[4px] px-6 rounded-full focus:outline-none mr-4 border border-[#CC0047]">
          Let&apos;s Talk
        </button>
        {/* Search Icon */}
        <img src={searchIcon} alt="search icon" className="h-7 w-7" />
      </div>
    </nav>
  );
};

export default NavBar;
