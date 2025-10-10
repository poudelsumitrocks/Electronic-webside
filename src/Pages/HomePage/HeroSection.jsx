import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Bulb from "../../assets/Image/Bulb.png";
import Fans from "../../assets/Image/Fans.png";
export default function HeroSection() {
  const images = [Bulb,Fans];


  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []); 

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background Images with Fade Transition */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "fit",
            backgroundPosition: "center",
            // backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Poudel Electric House ⚡
        </h1>
        <p className="max-w-xl mx-auto text-base sm:text-lg drop-shadow-md">
          Find the best electrical equipment, tools, and accessories for your
          home and business — all in one place.
        </p>
        <button className="mt-6 bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
          Shop Now
        </button>
      </div>

      {/* Left / Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-black/60 text-white p-3 rounded-full z-30 "
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-black/60 text-white p-3 rounded-full z-30"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-30">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-yellow-400" : "bg-white/60"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
