import React from 'react'
import { motion } from 'framer-motion'

const HeaderMotion = ({ text }) => {
    return (
      <motion.h2
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "easeIn" }}
      >
        {text}
      </motion.h2>
    );
  };
  
  export default HeaderMotion;