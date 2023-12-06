"use client";

import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3, 4];

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 0.75,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              src="https://helios-i.mashable.com/imagery/articles/012km6gewOZvLGPOTrvB152/hero-image.fill.size_1200x900.v1689778238.jpg"
              className="w-[400px] h-[300px]"
            />
            <div className="px-0 space-y-10 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-indigo-400">
                  Case Study {i + 1} of {projects.length}:
                </span>
                UPS Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Sed auctor ante est, eu vestibulum nisl vestibulum in.
                Pellentesque imperdiet dolor ac turpis dignissim luctus. Nulla
                nulla turpis, finibus et viverra non, varius nec dui. Fusce et
                leo et elit lobortis molestie
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-indigo-400/50 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
