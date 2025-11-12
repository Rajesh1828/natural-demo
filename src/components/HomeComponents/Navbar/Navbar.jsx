import React, { useState } from "react";
import { X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { assets } from "../../../assets/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ✅ Transparent Navbar */}
      <nav className="w-full px-4 md:px-16 flex justify-between items-center py-1 absolute top-[-10] left-0 z-50 bg-transparent">

        {/* ✅ Logo (Always visible) */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src={assets.logo}
              alt="Logo"
              className="w-[170px] md:w-[180px] object-contain"
            />
          </Link>
        </div>

        {/* ✅ Right Section: Social Icons + Contact + Menu */}
        <div className="flex items-center gap-6 z-50">

          {/* ✅ Social Icons (visible on laptop & mobile) */}
          <div className=" hidden md:flex gap-2">
            <a href="#" className="bg-[#15398f] text-white p-2 rounded-full">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="bg-[#15398f] text-white p-2 rounded-full">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="bg-[#15398f] text-white p-2 rounded-full">
              <FaWhatsapp size={14} />
            </a>
            <a href="#" className="bg-[#15398f] text-white p-2 rounded-full">
              <FaYoutube size={14} />
            </a>
          </div>

          {/* ✅ Contact Button */}
          <div className="hidden md:flex">
            <Link
              to="/contact"
              className="bg-[#15398f] text-white uppercase px-3 py-2 rounded-lg text-sm md:text-base font-bold hover:opacity-90 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* ✅ Menu Toggle Button */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-cyan-400 transition"
          >
            {isOpen ? (
              <X size={34} className="text-blue-800" />
            ) : (
              <div className="px-3 py-4 bg-[#15398f] rounded-xl flex flex-col gap-1">
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-4 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* ✅ Fullscreen Dropdown Menu (Slides from Top) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out z-40 flex flex-col justify-between`}
      >
        {/* Menu Links */}
        <ul className="flex flex-col items-center justify-center gap-6 text-gray-800 font-semibold text-2xl prata flex-grow-2 tracking-[0.2em]">
          <li>
            <NavLink to="/" onClick={toggleMenu} className="hover:text-cyan-500 transition">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu} className="hover:text-cyan-500 transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={toggleMenu} className="hover:text-cyan-500 transition">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleMenu} className="hover:text-cyan-500 transition">
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* ✅ Social Icons in Menu */}
        <div className="flex justify-center gap-4 pb-10">
          <a href="#" className="bg-[#15398f] text-white p-3 rounded-full">
            <FaFacebookF />
          </a>
          <a href="#" className="bg-[#15398f] text-white p-3 rounded-full">
            <FaInstagram />
          </a>
          <a href="#" className="bg-[#15398f] text-white p-3 rounded-full">
            <FaWhatsapp />
          </a>
          <a href="#" className="bg-[#15398f] text-white p-3 rounded-full">
            <FaYoutube />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
