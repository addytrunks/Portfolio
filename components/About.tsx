"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/type";
import { urlFor } from "@/lib/sanity";
interface Props{
  pageInfo: PageInfo | null
}

const About = ({pageInfo}:Props) => {
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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        src={urlFor(pageInfo?.heroImage).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-44 h-44 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[450px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="xl:text-4xl text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-indigo-400">little</span>{" "}
          background
        </h4>
        <p className="xl:text-base text-sm font-medium  text-justify">
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
