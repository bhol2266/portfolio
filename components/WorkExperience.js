import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function WorkExperience({ experience }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative overflow-hidden flex-col flex text-left md:flex-row max-w-full px-2 sm:px-4 md:px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-[80px] md:top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-xl xl:text-2xl">
        Experience
      </h3>
      <div className=" scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A] w-full flex space-x-5 lg:space-x-10 xl:space-x-[80px] overflow-x-scroll p-10 snap-x snap-mandatory">
        {experience.map((obj) => {
          return <ExperienceCard key={obj._id} experience={obj} />;
        })}

        {experience.map((obj) => {
          return <ExperienceCard key={obj._id} experience={obj} />;
        })}
      </div>
    </motion.div>
  );
}
