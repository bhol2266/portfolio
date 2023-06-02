import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center  md:space-x-4"
    >
      <h3 className="absolute top-[80px] md:top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-xl 2xl:text-2xl" >
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink  rounded-full object-cover md:rounded-lg w-56  md:w-[300px] 2xl:w-[500px] lg:w-[400px]"
        src="./profile.png"
        alt=""
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]"> little</span>{" "}
          background
        </h4>
        <p className="text-xs sm:text-sm lg:text-md 2xl:text-lg">
        Welcome to my portfolio! I&apos;m Ashutosh Gupta, a Full Stack Developer with a deep-rooted love for crafting innovative and user-centric digital experiences. With a blend of front-end and back-end expertise, I specialize in bringing ideas to life through elegant and efficient web applications.  <br></br>    <br></br>    &nbsp; &nbsp; Throughout my career, I have worked on a wide range of projects, spanning from small startups to large-scale enterprise applications. This diverse experience has equipped me with the ability to adapt quickly to new technologies and problem-solving challenges, ensuring efficient and effective project execution.    </p>
      </div>
    </motion.div>
  );
}

export default About;
