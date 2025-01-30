import React from "react";
import { FaInstagram, FaWhatsapp, FaApple } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { AiFillAndroid } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 md:px-10 bg-white bg-opacity-80 backdrop-blur-lg shadow-md fixed w-full top-0 left-0 z-50">
      <div className="flex items-center">
        <a href="https://www.apple.com/">
          <img
            src="https://pngimg.com/d/apple_logo_PNG19689.png"
            alt="Nav_logo"
            className="w-12"
          />
        </a>
      </div>

      <div className="flex space-x-4 md:space-x-6">
        <div className="relative group">
          <a href="https://www.instagram.com/">
            <FaInstagram className="text-5xl p-2 cursor-pointer hover:bg-gray-200 rounded-md bg-gray-100" />
            <span className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-red-500 text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Follow us
            </span>
          </a>
        </div>

        <div className="relative group">
          <a href="https://www.linkedin.com/">
            <CiLinkedin className="text-5xl p-2 cursor-pointer hover:bg-gray-200 rounded-md bg-gray-100" />
            <span className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-red-500 text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Follow us
            </span>
          </a>
        </div>

        <div className="relative group">
          <a href="https://web.whatsapp.com/">
            <FaWhatsapp className="text-5xl p-2 cursor-pointer hover:bg-gray-200 rounded-md bg-gray-100" />
            <span className="absolute top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-red-500 text-white text-sm py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              Follow us
            </span>
          </a>
        </div>
      </div>

      <div className="mt-3 md:mt-0">
        <a href="https://www.apple.com/">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <FaApple className="text-xl" />
            <AiFillAndroid className="text-xl" />
            <span className="font-semibold">Download the App</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
