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
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        className="-mb-20 md:mb-0 flex-shrink w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="https://media.licdn.com/dms/image/C5603AQGrVn_ITVbnUg/profile-displayphoto-shrink_800_800/0/1634372259576?e=1687996800&v=beta&t=k0NwoTKTGDD5G6GoXR_idIhqwWS2CQUTDVzVIntDMM8"
        alt=""
      ></motion.img>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]"> little</span>{" "}
          background
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          mollitia, quam, molestiae expedita nam ab perferendis in impedit
          quibusdam earum aliquam nostrum sequi nobis, esse pariatur reiciendis
          repudiandae molestias ratione?Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Numquam, iure pariatur nisi esse totam saepe ipsa
          fugiat iusto sed adipisci veniam, consequatur, maiores neque tempore
          quos delectus. Aperiam, minus veniam.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
