"use client";

import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center"
      >
        <SocialIcon
          url="https://www.instagram.com/addy__srivats/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/addytrunks"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://twitter.com/AdhithyaSrivat2"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex items-center text-gray-200 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
