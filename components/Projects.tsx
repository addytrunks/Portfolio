"use client";

import { urlFor } from "@/lib/sanity";
import { Project } from "@/type";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

interface Props {
  projects: Project[] | null;
}

const Projects = ({ projects }: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const goToNext = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newScrollLeft = scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const goToPrevious = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newScrollLeft = scrollLeft - clientWidth;
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="h-screen relative flex flex-col overflow-hidden z-0 text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative z-20 w-full flex justify-center items-center">
        <button
          onClick={goToPrevious}
          className="absolute z-30 left-5 text-white"
        >
          <ChevronLeftIcon className="w-10 h-10" />
        </button>

        <div
          ref={scrollContainerRef}
          className="relative w-full flex overflow-x-scroll snap-x snap-mandatory pt-10 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-indigo-400/80"
        >
          {projects?.map((project, i) => (
            <div
              key={project._id}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen transition-transform duration-500 z-20 ease-in-out"
            >
              <Link href={project?.linkToBuild}>
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
                  src={urlFor(project?.image).url()}
                  className="xl:w-[400px] xl:h-[250px] w-[200px] h-[150px] cursor-pointer mt-5"
                />
              </Link>
              <div className="px-0 space-y-8 md:px-10 max-w-6xl">
                <h4 className="xl:text-4xl text-xl font-semibold text-center">
                  <span className="underline decoration-indigo-400">
                    Case Study {i + 1} of {projects?.length}:{" "}
                  </span>
                  {project.title}
                </h4>

                <div className="flex items-center space-x-2 justify-center">
                  {project?.technologies?.map((tech) => (
                    <div key={tech?._id} className="relative h-10 w-10">
                      <Image
                        fill
                        src={urlFor(tech?.image).url()}
                        alt="tec_img"
                      />
                    </div>
                  ))}
                </div>

                <p className="xl:text-lg text-sm md:text-left font-medium text-justify">
                  {project?.summary}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button onClick={goToNext} className="absolute z-20 right-5 text-white">
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      </div>

      <div className="w-full absolute top-[30%] bg-indigo-400/80 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
