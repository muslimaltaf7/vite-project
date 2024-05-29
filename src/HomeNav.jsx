import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const HomeNav = ({
  dropdowns,
  toggleDropdown,
  closeDropdowns,
  toggleMobileMenu,
  isMobileMenuOpen,
}) => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMouseEnter = (dropdown) => {
    toggleDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    closeDropdowns();
  };

  return (
    <div>
      <nav
        className={`p-4 z-20 w-full ${
          isNavVisible ? "" : "hidden"
        } lg:block absolute top-0 bg-transparent text-white`}
      >
        <div className="sm:px-12 mx-auto flex justify-between gap-4 items-center">
          <div className="text-white text-2xl flex-1">
            <a href="/">
              <img
                src="https://demandscience.com/wp-content/uploads/2023/02/demand-science-logo-2.svg"
                alt="Demand Science Logo"
              />
            </a>
          </div>
          <div className="lg:flex hidden justify-center flex-grow gap-6">
            <div
              className="relative ml-4"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-lg focus:outline-none flex items-center gap-1 font-medium"
              >
                Products <MdKeyboardArrowDown />
              </button>
              {dropdowns.products && (
                <div
                  className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                  onMouseEnter={() => handleMouseEnter("products")}
                  onMouseLeave={handleMouseLeave}
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
                    PurePush
                  </a>
                  <a
                    href="/abmdisplay"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    ABM Display
                  </a>
                  <a
                    href="/accountintelligence"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Product 4
                  </a>
                </div>
              )}
            </div>

            <div
              className="relative ml-4"
              onMouseEnter={() => handleMouseEnter("ourData")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-lg focus:outline-none flex items-center gap-1 font-medium"
              >
                Our Data <MdKeyboardArrowDown />
              </button>
              {dropdowns.ourData && (
                <div
                  className="absolute bg-white mt-2 py-2 w-48 rounded-lg shadow-lg"
                  onMouseEnter={() => handleMouseEnter("ourData")}
                  onMouseLeave={handleMouseLeave}
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
            <div>
              <button className="text-lg focus:outline-none flex items-center font-medium">
                About Us
              </button>
            </div>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white hidden lg:block hover:bg-[#CC0047] hover:text-white text-[#CC0047] text-lg py-[4px] px-6 rounded-full focus:outline-none mr-4 border border-[#CC0047]"
          >
            <a href="/contact"> Let's Talk </a>
          </button>
          <FaBars
            className="block cursor-pointer lg:hidden text-2xl"
            onClick={toggleMobileMenu}
          />
        </div>
      </nav>
    </div>
  );
};

export default HomeNav;
