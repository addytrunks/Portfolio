import React from "react";
import Skill from "./Skill";
import { Technology } from "@/type";
import { urlFor } from "@/lib/sanity";
interface Props{
  skills:Technology[] | null
}

const Skills = ({skills}:Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10  min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-600 text-sm">Hover over a skill for current proficiency</h3>

      <div className="grid grid-cols-3 xl:grid-cols-5 md:grid-cols-4 sm:grid-col-3 gap-5 xl:pt-20 ">
            {skills?.map((skill) => (
              <Skill key={skill._id} progress={skill.progress} imageUrl={urlFor(skill?.image).url()}/>
            ))}
      </div>
    </div>
  );
};

export default Skills;
