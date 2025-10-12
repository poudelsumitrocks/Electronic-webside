import React, { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

export default function Concli() {
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
         Council light
          <span>{isOpen ? <LuChevronRight /> : " "}</span>
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute top-6 left-34 bg-white shadow-md rounded-md p-2 w-40 transition-all duration-200 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul className="space-y-1 text-sm">
            <li className="hover:bg-gray-100 p-1 rounded">3w Council</li>
            <li className="hover:bg-gray-100 p-1 rounded">6w Council</li>
            <li className="hover:bg-gray-100 p-1 rounded">12w Council</li>
            <li className="hover:bg-gray-100 p-1 rounded">9w Council</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
