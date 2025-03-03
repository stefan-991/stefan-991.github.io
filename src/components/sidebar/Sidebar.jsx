import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(100vh at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 40,
    },
  },
  closed: {
    clipPath: "circle(23px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 500,
      damping: 50,
    },
  },
  hover: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sidebarRef = useRef(null);

  const currentVariant = open ? "open" : (isHovered ? "hover" : "closed");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <motion.div
      ref={sidebarRef}
      className="sidebar"
      animate={currentVariant}
      onMouseEnter={() => !open && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="bg"
        variants={variants}
      >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;