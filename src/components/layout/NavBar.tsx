import logomobile from "../../assets/images/logo-d.png";
import logo from "../../assets/images/logo-d2.png";
import { Link } from "react-router-dom";
import { FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { ROUTES } from "../../constants/router";
import { FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  //    تثبت القائمة عند التمرير للأسفل فتح قاىمه
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  return (
    <nav className="md:bg-[#0a263f] bg-white text-white  left-0 right-0 z-20   transition-all duration-300 --font-sans: var(--font-inter, sans-serif)">
      <div className=" px-4  sm:px-6 lg:px-8 text-[#0a263f]">
        <div className="flex justify-between items-center py-4">
          {/* الشعار */}
          <div className="flex items-center px-3 ">
            <Link to="/" className=" items-center hidden md:block ">
              <img className="w-auto max-h-12.75 mt-2  " src={logo} alt="Logo desktop" />
            </Link>

            <Link
              to="/"
              className=" items-center block  md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <img
                className="w-40 h-10 mt-2 "
                src={logomobile}
                alt="Logo mobile"
              />
            </Link>
          </div>

          {/* زر الهامبرغر للموبايل */}
          <div className="md:hidden flex items-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-lg hover:bg-gray-800 transform transition-transform duration-300 ease-in-out"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBarsStaggered className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* قائمة التنقل للشاشات الكبيرة */}
          <div className="hidden lg:flex items-center justify-center rounded-2xl  space-x-8 bg-white/10  h-20 w-250 p-5">
            <ul className="flex items-center space-x-8 text-white text-lg font-sans ">
              <li className="group cursor-pointer relative">
                <Link
                  to={ROUTES.HOME}
                  className="hover:text-yellow-400 transition space-x-1 flex  items-center   "
                >
                  Home{" "}
                  <FaChevronDown className="mt-2 ml-2 w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform" />
                </Link>
                <ul
                  className="absolute left-0 mt-2 z-50 w-90 bg-white/10 rounded-b-xl shadow-md 
                         opacity-0 scale-95 invisible 
                         group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                         transition-all duration-300"
                >
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/home">Home</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/dectors">Doctors</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/appointment">Make Appointment</Link>
                  </li>
                </ul>
              </li>

              <li className="group cursor-pointer relative">
                <Link
                  to={ROUTES.PAGES}
                  className="hover:text-yellow-400 transition space-x-1 flex  items-center   "
                >
                  Pages{" "}
                  <FaChevronDown className="mt-2 ml-2 w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform" />
                </Link>
                <ul
                  className="absolute left-0 mt-2 z-50 w-90 bg-white/10 rounded-b-xl shadow-md 
                         opacity-0 scale-95 invisible 
                         group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                         transition-all duration-300"
                >
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/home">Home</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/dectors">Doctors</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/appointment">Make Appointment</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/about">About</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/contact">Contact</Link>
                  </li>
                </ul>
              </li>
              <li className="group cursor-pointer relative">
                <Link
                  to={ROUTES.SERVICES}
                  className="hover:text-yellow-400 transition space-x-1 flex  items-center   "
                >
                  Services{" "}
                  <FaChevronDown className="mt-2 ml-2 w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform" />
                </Link>
                <ul
                  className="absolute left-0 mt-2  z-50 w-90 bg-white/10 rounded-b-xl shadow-md 
                         opacity-0 scale-95 invisible 
                         group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                         transition-all duration-300"
                >
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/our services">Our Services</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/services detail">Services Detail</Link>
                  </li>
                </ul>
              </li>
              <li className="group cursor-pointer relative">
                <Link
                  to={ROUTES.CASE_STUDIES}
                  className="hover:text-yellow-400 transition space-x-1 flex  items-center   "
                >
                  Case Studies{" "}
                  <FaChevronDown className="mt-2 ml-2 w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform" />
                </Link>
                <ul
                  className="absolute left-0 mt-2 z-50 w-90 bg-white/10 rounded-b-xl shadow-md 
                         opacity-100 scale-95 invisible 
                         group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                         transition-all duration-300"
                >
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/Case Studies1">Case Studies1</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/Case Studies2">Case Studies2</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/Case Studies3">Case Studies3</Link>
                  </li>
                </ul>
              </li>
              <li className="group cursor-pointer relative">
                <Link
                  to={ROUTES.BLOG}
                  className="hover:text-yellow-400 transition space-x-1 flex  items-center   "
                >
                  Blog{" "}
                  <FaChevronDown className="mt-2 ml-2 w-4 h-4 text-gray-300 group-hover:rotate-180 transition-transform" />
                </Link>
                <ul
                  className="absolute left-0 mt-2 z-50 w-90  bg-white/10 rounded-b-xl shadow-md 
                         opacity-100 scale-95 invisible 
                         group-hover:opacity-100 group-hover:scale-100 group-hover:visible
                         transition-all duration-300"
                >
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/Blog ">Blog Standard</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    {" "}
                    <Link to="/pages/Blog ">Blog Full Width</Link>
                  </li>
                  <li className="p-2 hover:text-gray-200">
                    <Link to="/pages/Blog ">Blog Single</Link>
                  </li>
                </ul>
              </li>
              <li className="group cursor-pointer relative">
                <Link
                  to={ROUTES.CONTACT}
                  className="hover:text-yellow-400 transition space-x-1 flex  items-center   "
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            {/* أيقونة البحث */}
            <button className="p-2 rounded-lg transition-colors  ">
              <FaSearch className="w-5 h-5 text-gray-300 hover:text-white ml-5" />
            </button>
          </div>

          {/* زر الحجز */}
          <div className="hidden md:flex items-center ml-6">
            <Link
              to={ROUTES.CONTACT}
              className="flex items-center gap-2 bg-[#ffcc53] h-20 text-gray-900 font-semibold py-3 px-6 rounded-xl hover:bg-yellow-200  transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              <span>Book An Appointment</span>
              <FaArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* القائمة المتجاوبة للموبايل */}

      <div
        className={`md:hidden fixed px-5 py-5  left-0 z-50 w-full text-gray-950 text-xl text-start bg-white shadow-2xl transform --font-sans: var(--font-inter, sans-serif)"
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
         
          transition-transform duration-300 ease-in-out
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#f7f7f7] text-gray-950  rounded-3xl flex justify-between px-4 py-2 my-4 mx-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full focus:outline-none
                 text-start"
          />
          <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors ml-4">
            <FaSearch className="w-5 h-5 text-gray-300 hover:text-white" />
          </button>
        </div>
        <ul className="space-y-4 font-sans text-sm bg-white ">
          <li>
            <div className="flex justify-between">
              <Link
                to={ROUTES.HOME}
                className="block py-3 px-4 text-lg  "
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Home
              </Link>
              <button className=" bg-[#f7f7f7] px-2 py-1 h-7 w-7 mt-3  rounded ">
                <FaChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("home");
                  }}
                  className={`w-3 h-4 transition-transform duration-300 ${
                    openDropdown === "home" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <ul
              className={`overflow-hidden gap-3 text-bold top-full w-40 backdrop-blur-md  
                        transition-all duration-300 
                        ${openDropdown === "home" ? "opacity-100 scale-100 visible " : "opacity-0 scale-95 invisible max-h-0"}`}
            >
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/home">Home</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/dectors">Doctors</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/appointment">Make Appointment</Link>
              </li>
            </ul>
          </li>
          <li className="group cursor-pointer relative ">
            <div className="flex justify-between">
              <Link
                to={ROUTES.PAGES}
             className="   block py-3 px-4 text-lg "
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Pages
              </Link>
              <button className=" bg-[#f7f7f7] px-2 py-1 h-7 w-7 mt-3   rounded ">
                <FaChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("pages");
                  }}
                  className={`w-3 h-4 transition-transform duration-300 ${
                    openDropdown === "pages" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <ul
              className={`overflow-hidden gap-3 text-bold top-full w-40 backdrop-blur-md  
                        transition-all duration-300 
                        ${openDropdown === "pages" ? "opacity-100 scale-100 visible " : "opacity-0 scale-95 invisible max-h-0"}`}
            >
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/home">Home</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/dectors">Doctors</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/appointment">Make Appointment</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/about">About</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/contact">Contact</Link>
              </li>
            </ul>
          </li>
          <li className="group cursor-pointer relative">
            <div className="flex justify-between">
              <Link
                to={ROUTES.SERVICES}
                 className="   block py-3 px-4 text-lg "
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Services
              </Link>
              <button className=" bg-[#f7f7f7] px-2 py-1 h-7 w-7 mt-3   rounded ">
                <FaChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("services");
                  }}
                  className={`w-3 h-4 transition-transform duration-300 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <ul
              className={`overflow-hidden gap-3 text-bold top-full w-40 backdrop-blur-md  
                        transition-all duration-300 
                        ${openDropdown === "services" ? "opacity-100 scale-100 visible " : "opacity-0 scale-95 invisible max-h-0"}`}
            >
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/our services">Our Services</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/services detail">Services Detail</Link>
              </li>
            </ul>
          </li>
          <li className="group cursor-pointer relative">
            <div className="flex justify-between">
              <Link
                to={ROUTES.CASE_STUDIES}
                 className="   block py-3 px-4 text-lg "
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Case Studies
              </Link>
              <button className=" bg-[#f7f7f7] px-2 py-1 h-7 w-7 mt-3   rounded ">
                <FaChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("case studies");
                  }}
                  className={`w-3 h-4 transition-transform duration-300 ${
                    openDropdown === "case studies" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <ul
              className={`overflow-hidden gap-3 text-bold top-full w-40 backdrop-blur-md  
                        transition-all duration-300 
                        ${openDropdown === "case studies" ? "opacity-100 scale-100 visible " : "opacity-0 scale-95 invisible max-h-0"}`}
            >
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/Case Studies1">Case Studies1</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/Case Studies2">Case Studies2</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/Case Studies3">Case Studies3</Link>
              </li>
            </ul>
          </li>
          <li className="group cursor-pointer relative">
            <div className="flex justify-between">
              <Link
                to={ROUTES.BLOG}
                 className="   block py-3 px-4 text-lg "
                onClick={() => {
                  setIsOpen(false);
                  setOpenDropdown(null);
                }}
              >
                Blog
              </Link>
              <button className=" bg-[#f7f7f7] px-2 py-1 h-7 w-7 mt-3  rounded ">
                <FaChevronDown
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown("blog");
                  }}
                  className={`w-3 h-4 transition-transform duration-300 ${
                    openDropdown === "blog" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
            <ul
              className={`overflow-hidden gap-3 text-bold top-full w-40 backdrop-blur-md  
                        transition-all duration-300 
                        ${openDropdown === "blog" ? "opacity-100 scale-100 visible " : "opacity-0 scale-95 invisible max-h-0"}`}
            >
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/Blog ">Blog Standard</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                {" "}
                <Link to="/pages/Blog ">Blog Full Width</Link>
              </li>
              <li className="p-2 hover:text-gray-200">
                <Link to="/pages/Blog ">Blog Single</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to={ROUTES.CONTACT}
               className="   block py-3 px-4 text-lg "
              onClick={() => {
                setIsOpen(false);
                setOpenDropdown(null);
              }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
