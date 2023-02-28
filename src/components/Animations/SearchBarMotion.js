import React from "react";
import { motion } from "framer-motion";

const SearchBarMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};
export default SearchBarMotion;
