import React from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-[#212121] ">
        <div className="navbar-start px-4 py-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-gray-600">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-gray-600">
                <NavLink to="/services">Services</NavLink>
              </li>
              <li className="text-gray-600">
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center ">
            <img src={logo} className="w-10 md:w-16 ml-8" alt="" />
            <Link to="/" className="btn btn-ghost">
              <div className="flex flex-col justify-center items-start">
              <p className="text-white text-sm md:text-xl">majestic </p>
              <p className=" text-sm md:text-sm text-gray-400">mansions</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <Link
            to="/login"
            className=" border text-center py-2 font-semibold rounded-none md:w-36 text-[#a6886d] border-[#a6886d] "
          >
            Login
          </Link>
          <Link
            to="/register"
            className=" border text-center py-2 font-semibold rounded-none md:w-36 text-[#a6886d] border-[#a6886d] "
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
