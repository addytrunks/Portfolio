import React from "react";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 mx-auto min-h-screen justify-center xl:space-y-0 items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-600 text-sm">Hover over a skill for current proficiency</h3>

      <div className="grid grid-cols-4 gap-5">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
      </div>
    </div>
  );
};

export default Skills;
