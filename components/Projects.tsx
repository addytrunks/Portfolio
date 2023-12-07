"use client";

import { urlFor } from "@/sanity/lib/client";
import { Project } from "@/type";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="h-screen relative flex flex-col overflow-hidden text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-transparent  scrollbar-thumb-transparent ">
        {projects?.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen" key={project._id}>
            <Link href={project.linkToBuild}>
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
                src={urlFor(project.image).url()}
                className="w-[400px] h-[300px] cursor-pointer mt-5"
              />
            </Link>
            <div className="px-0 space-y-8 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-indigo-400">
                  Case Study {i + 1} of {projects.length}:{" "}
                </span>
                {project.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies?.map((tech) => (
                  <div key={tech._id} className="relative h-10 w-10">
                    <Image fill src={urlFor(tech.image).url()} alt="tec_img" />
                  </div>
                ))}
              </div>

              <p className="text-lg md:text-left font-medium text-justify">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-indigo-400/80 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
