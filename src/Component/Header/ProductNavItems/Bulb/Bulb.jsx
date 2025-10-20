import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import Led from "./Led"
import TubeLight from "./TubeLight"
export default function Bulb() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative flex gap-10 pl-4">
    
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Button */}
        <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-blue-600">
          Bulb
          <span>{isOpen ? <LuChevronUp /> : <LuChevronDown />}</span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-8 left-0 bg-white shadow-md rounded-md p-2 w-40 transition-all duration-200  ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="space-y-1 text-sm">
            <li className="hover:bg-gray-100 p-1 rounded cursor-pointer">
              <Led/>
            </li>
            <li className="hover:bg-gray-100 pl-5 rounded cursor-pointer">
              Smart Bulb
            </li>
            <li className="hover:bg-gray-100 p-1 rounded cursor-pointer">
             <TubeLight/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
