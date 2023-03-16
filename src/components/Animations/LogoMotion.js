import { motion } from "framer-motion";
import React from "react";

const SlidingMotion = ({ children }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  );
};
export default SlidingMotion;
