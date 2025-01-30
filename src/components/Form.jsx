import { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-3/4 max-w-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileTap={{ scale: 1.02 }}
      >
        <motion.h2
          className="text-3xl font-semibold text-center mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          User Details
        </motion.h2>

        {["Full Name", "Email", "Phone", "Address", "Country"].map(
          (label, index) => (
            <motion.div
              key={label}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <label className="block text-gray-700">{label}</label>
              <motion.input
                type={
                  label === "Email"
                    ? "email"
                    : label === "Phone"
                    ? "tel"
                    : "text"
                }
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={`Enter your ${label.toLowerCase()}`}
                whileFocus={{ scale: 1.05 }}
              />
            </motion.div>
          )
        )}

        <motion.button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </motion.form>
    </div>
  );
};

export default Form;
