import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";
import Link from "next/link";

function Project({ projects }) {
  return (
    <div className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-[80px] md:top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-xl 2xl:text-2xl" >
        Projects
      </h3>

      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] relative w-full flex  overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen shrink-0  snap-center flex flex-col  items-center justify-center p-8 sm:p-10 lg:p-20  h-screen"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

                transition={{ duration: 1.2 }}
                className="w-full md:w-4/5  lg:w-[750px] 2xl:w-[850px]"
                src={urlFor(project?.image).url()}
                alt=""
              />
              
              <div className="pt-10 lg:w-9/10 2xl:w-4/5 mx-auto">
                <a
                  target="_blank"
                  href={project.linktoBuild}
                  className="text-lg lg:text-xl  2xl:text-2xl font-semibold text-center"
                >
                  <span className="underline decoration-[#F7AB0A] font-light">
                    Case Study {i + 1}
                  </span>{" "}
                  :  &nbsp;{project.title} -&gt;
                </a>
                <p className="text-sm md:text-md  lg:text-lg ">{project.summary}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Project;
