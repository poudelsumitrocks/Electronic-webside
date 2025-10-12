import React, { useContext } from "react";
import Navbar from "../../Component/Header/Navbar";
import ProductNav from "../../Component/Header/ProductNav";
import HeroSection from "./HeroSection";
import Footer from "../../Component/Footer/Footer";
import FeaturedProducts from "./FeaturedProducts";
import { ThemeContext } from "../../Component/useContext/Toggle";

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-700"
      }`}
    >
      {/* Fixed Navbar */}
      <Navbar />

      <div className="pt-20">
        {/* Product Navigation Bar */}
        <ProductNav />

        {/* Hero Section */}
        <HeroSection />

        {/* Featured Products */}
        <FeaturedProducts />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
