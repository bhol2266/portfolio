import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../sanity";

export default function ExperienceCard({ experience }) {
  return (
    <article className="relative top-10 md:top-4 flex flex-col rounded-xl items-center space-y-2 flex-shrink-0 w-screen sm:w-full lg:w-[650px] xl:w-[800px] 2xl:w-[900px] snap-center bg-[#292929] p-3 sm:p-4 md:px-6 lg:p-8 2xl:p-10 2xl:pt-4  hover:opacity-100 lg:opacity-40 duration-200 translate-opacity overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 xl:w-40 xl:h-40 object-cover "
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div>
        <h4 className="text-center md:text-left text-[17px] xl:text-[20px]">
          {experience.jobTitle}
        </h4>
        <p className="text-center md:text-left text-[16px] xl:text-[18px] font-semibold">
          {experience.company}
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-2 my-2">
          {experience.technologies.map((tech) => {
            return (
              <img
                key={tech._id}
                className="md:h-10 md:w-10 h-8 w-8 rounded-full"
                src={urlFor(tech.image).url()}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase py-2 xl:py-5 text-gray-300 px-2">
          Started work: {new Date(experience.dateStarted).toDateString()} -
          Present
        </p>

        <ul className=" px-4 list-disc space-y-1 xl:space-y-2 ml-2 md:ml-5 text-xs md:text-sm">
          {experience.points.map((point) => {
            return <li key={point}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
