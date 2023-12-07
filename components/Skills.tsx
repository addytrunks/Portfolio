import React from "react";
import Skill from "./Skill";
import { Technology } from "@/type";
import { urlFor } from "@/sanity/lib/client";

interface Props{
  skills:Technology[]
}

const Skills = ({skills}:Props) => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 mx-auto min-h-screen justify-center xl:space-y-0 items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-600 text-sm">Hover over a skill for current proficiency</h3>

      <div className="grid grid-cols-4 gap-5">
            {skills?.slice(0,skills.length/2).map((skill) => (
              <Skill progress={skill.progress} imageUrl={urlFor(skill.image).url()}/>
            ))}
            {skills?.slice(skills.length/2,skills.length).map((skill) => (
              <Skill progress={skill.progress} imageUrl={urlFor(skill.image).url()} directionLeft/>
            ))}
      </div>
    </div>
  );
};

export default Skills;
