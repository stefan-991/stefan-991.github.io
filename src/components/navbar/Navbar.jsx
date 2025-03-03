import React, { useState } from 'react';
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const iconStyle = {
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.3s ease',
  };

  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          SI Services
        </motion.span>
        <div className="social">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="https://linkedin.com/in/stefanivkovic"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img src="/linkedin.png" alt="My LinkedIn Profile" style={iconStyle} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;