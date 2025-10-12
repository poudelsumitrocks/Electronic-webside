import React, { useState, useContext } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { ThemeContext } from "../useContext/Toggle";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { isDark } = useContext(ThemeContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={`min-h-screen pt-24 px-6 sm:px-12 md:px-24 transition-colors duration-300 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-700"}`}>
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <p>We are happy to help you. Reach out to us anytime!</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <IoLocationSharp className="text-yellow-400 text-xl" /> SirjanaChowk,Bharatpur, Chitwan
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-yellow-400 text-xl" /> +977-9811228889
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400 text-xl" /> sumitpoudell20s@gmail.com
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md transition-colors duration-300"
          onSubmit={handleSubmit}
          style={{ backgroundColor: isDark ? "#1f2937" : "white", color: isDark ? "white" : "black" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none w-full"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="px-4 py-2 border rounded-md focus:outline-none w-full"
            rows={5}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-md font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
