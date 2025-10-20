import React, { useContext, useRef, useState } from "react";
import allProducts from "../../assets/Bulbimg/BulbData";
import { useParams, useNavigate } from "react-router";
import Navbar from "../../Component/Header/Navbar";
import Footer from "../../Component/Footer/Footer";
import ProductNav from "../../Component/Header/ProductNav";
import { ThemeContext } from "../../Component/useContext/Toggle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slice/CartSlice";

export default function ProductDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);
  const scrollRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const product = allProducts.find(
    (item) => item.name === decodeURIComponent(name)
  );

  if (!product) {
    return <div className="p-10 text-red-500 text-xl">Product not found</div>;
  }

  const relatedProducts = allProducts.filter(
    (item) => item.name !== product.name
  );

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -700, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 700, behavior: "smooth" });
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Redux Add to Cart
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
    // Optional alert
    // alert(`${quantity} item(s) added to cart!`);
  };

  return (
    <div
      className={`${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } mt-20`}
    >
      <Navbar />
      <ProductNav />

      {/* Main product section */}
      <div
        className={`flex flex-col md:flex-row gap-10 m-6 mb-16 p-6 rounded-lg shadow-lg ${
          isDark ? "bg-gray-800 text-white" : "bg-gray-50 text-gray-800"
        }`}
      >
        {/* Product Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-start gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-yellow-500">
            Rs {product.price}
          </p>
          <p className="text-gray-500">{product.discription}</p>

          {/* Quantity selector */}
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={decrement}
              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
            >
              -
            </button>
            <span className="px-3 py-1 border-t border-b border-gray-300">
              {quantity}
            </span>
            <button
              onClick={increment}
              className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-200"
            >
              +
            </button>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mt-4">
            <button
              className="flex-1 bg-white text-red-500 border border-red-500 rounded-md py-2 font-semibold hover:bg-red-50 transition"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
            <button
              onClick={() =>
                navigate("/buynow", { state: { product, quantity } })
              }
              className="flex-1 bg-red-500 text-white rounded-md py-2 font-semibold hover:bg-red-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="p-6 relative">
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/3 transform -translate-y-1/2 z-10 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400 md:bg-gray-700 md:text-white md:hover:bg-gray-600 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/3 transform -translate-y-1/2 z-10 bg-gray-300 text-gray-800 p-2 rounded-full hover:bg-gray-400 md:bg-gray-700 md:text-white md:hover:bg-gray-600 transition"
        >
          <FaArrowRight />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-4"
        >
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(`/productdetails/${encodeURIComponent(item.name)}`)
              }
              className={`flex-shrink-0 w-52 rounded-xl p-4 transition-transform transform hover:scale-105 shadow-md ${
                isDark
                  ? "bg-gray-700 text-white hover:shadow-gray-600"
                  : "bg-white text-gray-800 hover:shadow-lg"
              } cursor-pointer`}
            >
              <div
                className={`h-40 flex items-center justify-center rounded-lg mb-4 ${
                  isDark ? "bg-gray-600" : "bg-gray-100"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm font-medium mb-2">Rs: {item.price}</p>
              <button className="bg-yellow-500 text-gray-900 px-4 py-1 rounded-md hover:bg-yellow-400 transition">
                View Details
              </button>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
