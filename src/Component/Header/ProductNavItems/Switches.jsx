import React, { useState } from "react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export default function Switches() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative flex gap-10 pl-4">
      <div
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Button */}
        <button className="flex items-center gap-1 font-medium hover:text-blue-600">
          Switches
          <span>{isOpen ? <LuChevronUp /> : <LuChevronDown />}</span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-8 left-0 bg-white shadow-md rounded-md p-2 w-40 h-32 transition-all duration-200 overflow-y-auto ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="space-y-1 text-sm ">
            <li className="hover:bg-gray-100 p-1 rounded">Power Socket</li>
            <li className="hover:bg-gray-100 p-1 rounded">1 gang</li>
            <li className="hover:bg-gray-100 p-1 rounded">2 gang</li>
            <li className="hover:bg-gray-100 p-1 rounded">2 gang + Socket</li>
            <li className="hover:bg-gray-100 p-1 rounded">Double Socket</li>
            <li className="hover:bg-gray-100 p-1 rounded">4+Socket</li>
            <li className="hover:bg-gray-100 p-1 rounded">6+ Socket</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
