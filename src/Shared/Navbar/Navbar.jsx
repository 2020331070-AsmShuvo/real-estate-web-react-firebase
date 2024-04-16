import React, { useContext, useEffect, useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [curUser, setCurUser] = useState(user);
  useEffect(() => {
    setCurUser(user);
  }, [user]);
  // console.log(user);
  // console.log("User photo in navbar: ", user?.photoURL);

  return (
    <div>
      <div className="navbar bg-[#212121df] lg:bg-[#212121] ">
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-gray-600">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="text-gray-600">
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li className="text-gray-600">
                <NavLink to="/jobs">Job offers</NavLink>
              </li>
              <li className="text-gray-600">
                <NavLink to="/update">Update Profile</NavLink>
              </li>
              {user && (
                <li className="text-gray-600">
                  <NavLink to="/userprofile">User Profile</NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center animate__animated animate__bounce ">
            <img src={logo} className="w-10 md:w-16 ml-8 mx-auto" alt="" />
            <Link to="/" className="btn btn-ghost">
              <div className="flex flex-col justify-center items-start">
                <p className="text-white text-sm md:text-xl jul">
                  <span className="text-amber-600">m</span>ajestic{" "}
                </p>
                <p className=" text-sm md:text-sm text-gray-400 jul">
                  <span className="text-amber-600">m</span>ansions
                </p>
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
              <NavLink to="/faq">FAQ</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/jobs">Job Offers</NavLink>
            </li>
            <li className="text-white">
              <NavLink to="/update">Update Profile</NavLink>
            </li>
            {user && (
              <li className="text-white">
                <NavLink to="/userprofile">User Profile</NavLink>
              </li>
            )}
          </ul>
        </div>
        {user ? (
          <div className="navbar-end flex flex-col md:flex-row gap-2">
            <p className="text-gray-500">
              {user.email ? user.email : user.displayName}
            </p>
            <div className="avatar">
              <div
                className="w-12 mx-2 rounded-full"
                title={`${user.displayName}`}
              >
                <img src={user?.photoURL} alt="user-avatar" />
              </div>
            </div>
            <button
              onClick={logOut}
              className=" border text-center py-2 font-semibold rounded-none w-24 md:w-36 text-[#a6886d] border-[#a6886d] "
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <Link
              to="/login"
              className=" border text-center py-2 font-semibold rounded-none w-20 md:w-36 text-[#a6886d] border-[#a6886d] "
            >
              Login
            </Link>
            <Link
              to="/register"
              className=" border text-center py-2 font-semibold rounded-none w-20 md:w-36 text-[#a6886d] border-[#a6886d] "
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
