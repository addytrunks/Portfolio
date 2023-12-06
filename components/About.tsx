"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
        src="/my.jpg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[550px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-indigo-400">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          vulputate in ante eget fermentum. Maecenas euismod mauris at hendrerit
          ultrices. Aenean a egestas urna. Sed arcu urna, tempus id neque at,
          volutpat maximus turpis. In maximus euismod libero iaculis
          scelerisque. Sed auctor ante est, eu vestibulum nisl vestibulum in.
          Pellentesque imperdiet dolor ac turpis dignissim luctus. Nulla nulla
          turpis, finibus et viverra non, varius nec dui. Fusce et leo et elit
          lobortis molestie. Donec volutpat id eros nec commodo. Nam et
          dignissim mi.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
