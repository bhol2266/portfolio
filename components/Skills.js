import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import skill from "@/portfolio/schemas/skill";

function Skills({ skills }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="select-none h-screen flex relative flex-col text-center md:text-left xl:flex-row  xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-xl xl:text-2xl">
        Skills
      </h3>
      <h3
        className="absolute top-36 uppercase
       tracking-[3px] text-gray-500 text-xs md:text-sm xl:text-md whitespace-nowrap"
      >
        Hover over askill for currency profiency
      </h3>

      <div className="grid grid-cols-4 gap-3 md:gap-4 xl:gap-5 xl:pt-[100px]">
        {skills.map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
      </div>
    </motion.div>
  );
}

export default Skills;
