import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { urlFor } from "../sanity";

export default function Skill({ skill }) {
  console.log(skill);
  const [direction, setdirection] = useState(true);
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        initial={{ x: direction ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        alt=""
        className="rounded-full border border-gray-700 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out "
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-200  w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
