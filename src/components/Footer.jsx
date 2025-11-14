import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#226096] text-white py-10">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-8">

        <div className="md:w-1/4">
          <img src={assets.logo} alt="logo" className="w-30 " />
          <p className="text-sm leading-relaxed">
            Stay Hydrated, Stay Nature. Pure Water for a Pure You!
          </p>
        </div>

        <div className="md:w-1/4">
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <Link to="/">
              <li><a href="#" className="hover:underline">Home</a></li>
            </Link>

            <Link to='/about'>

              <li><a href="#" className="hover:underline">About</a></li>
            </Link>
            <Link to='/dealership'>

              <li><a href="#" className="hover:underline">Dealer</a></li>
            </Link>
            <Link to='/contact'>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </Link>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h2 className="font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">123 Water Street, City, Country</p>
          <p className="text-sm">Email: info@naturehwater.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Social Media */}
        <div className="md:w-1/4">
          <h2 className="font-semibold mb-3">Follow Us</h2>
          <div className="flex gap-3">
            <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/30 pt-5 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Nature Water. All rights reserved. 
        <Link>
        <a className="hover:underline ml-2" href='https://sinfoxmedia.com/'>Developed by Sinfox Media</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
