import React from "react";
import { FaApple } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

const Text = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-[180px] px-4">
        <p className="text-3xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl">
          "Life is an ever-changing journey full of unexpected moments, growth,
          and challenges."
          <br className="hidden sm:block" />
        </p>
      </div>
      <div className="flex justify-center mt-7">
        <a href="https://www.apple.com/">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm sm:text-base">
            <FaApple className="text-lg sm:text-xl" />
            <AiFillAndroid className="text-lg sm:text-xl" />
            <span className="font-semibold">Download the App</span>
          </button>
        </a>
      </div>
    </>
  );
};

export default Text;
