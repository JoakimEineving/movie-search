import React from "react";
import { motion } from "framer-motion";

const MapMotion = ({ children, index }) => {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0.01 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0.1 }}
      transition={{ type: "spring", duration: 1, delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
};

export default MapMotion;
