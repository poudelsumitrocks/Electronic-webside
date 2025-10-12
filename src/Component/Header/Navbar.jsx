import React, { useContext, useState } from "react";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { IoCartOutline, IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../useContext/Toggle";
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { Logout } from "../../Redux/Slice/Userslice";

export default function Navbar() {
  const { isDark, handleToggle } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userIdentifier = useSelector((state)=>state.user.userIdentifier)
  const dispatch=useDispatch();
  const displayName=userIdentifier?userIdentifier.split("@")[0]:null;

  const handleAccount = () => {
    navigate("/landing");
    setMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed w-full top-0 left-0 h-20 flex items-center px-4 sm:px-6 md:px-8 z-50 shadow-md transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-blue-700 text-white"
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
          <span
            className="hidden sm:inline hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Poudel Electrical House
          </span>
          <span
            className="sm:hidden hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            Poudel Electical House
          </span>
        </h1>
      </div>

      {/* Desktop & Tablet Search */}
      <div className="hidden sm:flex flex-1 mx-2 md:mx-4">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 rounded-l-md border-t border-b border-l border-gray-300 text-black bg-white focus:outline-none"
        />
        <button className="px-4 py-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500">
          <FaSearch />
        </button>
      </div>

      {/* Spacer for mobile */}
      <div className="flex-1 sm:hidden"></div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Theme toggle */}
        <div className="cursor-pointer" onClick={handleToggle}>
          {isDark ? (
            <IoMoonOutline className="text-2xl hover:text-gray-300" />
          ) : (
            <GoSun className="text-2xl hover:text-yellow-300" />
          )}
        </div>

        {/* Cart */}
        <IoCartOutline className="text-3xl cursor-pointer" />

        {/* Desktop account */}
        <div
          className="hidden sm:flex items-center gap-2 cursor-pointer"
          onClick={handleAccount}
        >
          <FaUser className="text-3xl hover:text-yellow-100" />
          <div className="flex flex-col leading-tight">
            <h3 className="text-sm">Account</h3>
            <h3 className="text-sm flex items-center">

              {/* Login/Register  */}
              {displayName?`Hi,${displayName}`:"Login"}
              <LuChevronDown className="ml-1" />
            </h3>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden ml-2 cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </div>
      </div>
      {
        userIdentifier && (
          <button onClick={()=>dispatch(Logout())}
          className="ml-5 bg-red-400 px-3 py-1 rounded text-white">
            LogOut
          </button>
        )
      }

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`sm:hidden absolute top-20 left-0 w-full flex flex-col p-4 gap-4 shadow-md z-40 transition-colors duration-300 ${
            isDark ? "bg-gray-800 text-white" : "bg-blue-800 text-white"
          }`}
        >
          {/* Mobile Search */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-4 py-2 rounded-l-md text-black bg-white focus:outline-none"
            />
            <button className="px-4 py-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500">
              <FaSearch />
            </button>
          </div>

          {/* Account */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleAccount}
          >
            <FaUser className="text-2xl" />
            <span>Login / Register</span>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-2 cursor-pointer">
            <IoCartOutline className="text-2xl" />
            <span>Cart</span>
          </div>
        </div>
      )}
    </div>
  );
}
