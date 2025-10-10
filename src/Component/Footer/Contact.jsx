import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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
    <div className="min-h-screen bg-gray-50 pt-24 px-6 sm:px-12 md:px-24">
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p>We’d love to hear from you! Reach out for any questions or support.</p>
          <div className="flex items-center gap-2">
            <IoLocationSharp className="text-blue-700 text-xl" />
            <span>SirjanaChowk, Nepal</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-700 text-xl" />
            <span>+977-9811228889</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-700 text-xl" />
            <span>sumitpoudell20s@gmail.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-6 rounded-xl shadow space-y-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-700"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-700"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2 outline-none focus:border-blue-700 h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
