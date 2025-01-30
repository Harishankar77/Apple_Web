import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white mt-9">
      <motion.div
        className="relative w-3/4 h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        {/* Default Image */}
        <motion.div
          className="absolute inset-0 bg-[url('https://i.ytimg.com/vi/GDlkCkcIqTs/maxresdefault.jpg')] bg-cover bg-center transition-opacity duration-500"
          initial={{ opacity: 1 }}
          whileHover={{ opacity: 0 }}
        ></motion.div>

        {/* Hover Image */}
        <motion.div
          className="absolute inset-0 bg-[url('https://www.apple.com/v/iphone-16-pro/d/images/overview/welcome/hero_endframe__b3cjfkquc2s2_xlarge.jpg')] bg-cover bg-center opacity-0 transition-opacity duration-500"
          whileHover={{ opacity: 1 }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
