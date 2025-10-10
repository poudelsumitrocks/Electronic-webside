import React from "react";
import Navbar from "../../Component/Header/Navbar";
import ProductNav from "../../Component/Header/ProductNav";
import HeroSection from "./HeroSection";
import Footer from "../../Component/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Navbar */}
      <Navbar />

      <div className="pt-20">
        {/* Product Navigation Bar */}
        <ProductNav />

        {/* Hero Section */}
      
        <HeroSection/>

        {/* Featured Products */}
        <section className="py-10 px-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Cards (example placeholders) */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                  Image
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Product {item}
                </h3>
                <p className="text-sm text-gray-600 mb-2">High-quality item</p>
                <button className="bg-yellow-500 text-gray-800 px-4 py-1 rounded-md hover:bg-yellow-400 transition">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        {/* <footer className="bg-blue-700 text-white py-6 text-center mt-10">
          <p>© {new Date().getFullYear()} Poudel Electric House. All rights reserved.</p>
        </footer> */}
        <Footer/>
      </div>
    </div>
  );
}
