import React from "react";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-black text-white mt-9">
        <motion.div
          className="relative w-3/4 h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.05 }}
        >
          {/* Default Image */}
          <motion.div
            className="absolute inset-0 bg-[url('https://i.pcmag.com/imagery/roundups/0537ZWnaG9Pw4UEps4o9X6Q-53.fit_lim.size_1050x.jpg')] bg-cover bg-center transition-opacity duration-500"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
          ></motion.div>

          {/* Hover Image */}
          <motion.div
            className="absolute inset-0 bg-[url('https://9to5mac.com/wp-content/uploads/sites/6/2021/10/MacBook-Pro-2021.jpg?quality=82&strip=all&w=1024')] bg-cover bg-center opacity-0 transition-opacity duration-500"
            whileHover={{ opacity: 1 }}
          ></motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
