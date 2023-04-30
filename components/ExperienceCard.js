import React from "react";
import { motion } from "framer-motion";

export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] lg:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 duration-200 translate-opacity overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[200px] object-cover object-top"
        src="https://media.licdn.com/dms/image/C5603AQGrVn_ITVbnUg/profile-displayphoto-shrink_800_800/0/1634372259576?e=1687996800&v=beta&t=k0NwoTKTGDD5G6GoXR_idIhqwWS2CQUTDVzVIntDMM8"
        alt=""
      />

      <div>
        <h4>CEO of PAPAFAM</h4>
        <p>PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... 2-Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
