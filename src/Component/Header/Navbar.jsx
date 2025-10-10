import React, { useContext } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { LuChevronDown } from "react-icons/lu";
import { IoCartOutline, IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../useContext/Toggle";
import { useNavigate } from "react-router";



export default function Navbar() {
  const { isDark, handleToggle } = useContext(ThemeContext);
  const navigate=useNavigate()
  const handleAccount=()=>{
    navigate("/landing")
  }

  return (
    <div className="fixed w-full top-0 bg-blue-700 h-20 text-white flex items-center px-4 sm:px-6 md:px-6">
  
      <div className="flex items-center flex-shrink-0">
        <h1 className="text-white font-bold text-xl sm:text-xl md:text-2xl lg:text-3xl">
          Poudel Electrical House
        </h1>
      </div>


      <div className="flex flex-1 justify-center mx-2 sm:mx-4 md:mx-8 ">
        <input
          type="text"
          placeholder="Search for your product here"
          className="h-10 w-full max-w-xs sm:max-w-md md:max-w-lg  bg-white rounded-xl text-black/70 px-4 outline-none"
        />
        <button className="bg-yellow-500 h-10 w-10 flex justify-center items-center rounded-xl ml-2">
          <FaSearch className="text-gray-800 hover:cursor-pointer" />
        </button>
      </div>

 
      <div className="flex items-center gap-4 sm:gap-6">
    
        <div className="cursor-pointer" onClick={handleToggle}>
          {isDark ? (
            <IoMoonOutline className="text-2xl hover:text-gray-300" />
          ) : (
            <GoSun className="text-2xl hover:text-yellow-300" />
          )}
        </div>

   
        <div className="hidden sm:flex items-center gap-2 hover:cursor-pointer" onClick={handleAccount}>
          <FaUser className="text-3xl hover:text-yellow-100 cursor-pointer" />
          <div className="flex flex-col leading-tight">
            <h3 className="text-sm">Account</h3>
            <h3 className="text-sm flex items-center">
              Login/Register <LuChevronDown className="ml-1" />
            </h3>
          </div>
        </div>

        <IoCartOutline className="text-3xl cursor-pointer" />
      </div>
    </div>
  );
}
