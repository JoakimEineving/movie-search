import React from "react";
import { motion } from "framer-motion";

const MapMotion = ({ children, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0.02 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.1 }}
      transition={{ type: "easein", duration: 1, delay: index * 0.08 }}
    >
      {children}
    </motion.div>
  );
};

export default MapMotion;
