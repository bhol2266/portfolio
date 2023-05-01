import React from "react";
import { motion } from "framer-motion";

function Project() {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <div className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3
        className="absolute top-24 uppercase
       tracking-[20px] text-gray-500 text-2xl "
      >
        Projects
      </h3>

      <div className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] relative w-full flex overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => {
          return (
            <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="h-[300px] "
                src="https://media.licdn.com/dms/image/C5603AQGrVn_ITVbnUg/profile-displayphoto-shrink_800_800/0/1634372259576?e=1687996800&v=beta&t=k0NwoTKTGDD5G6GoXR_idIhqwWS2CQUTDVzVIntDMM8"
                alt=""
              />
              <div className="">
                <h4 className="text-2xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    Case Study {i + 1} of {projects.length}
                  </span>{" "}
                  : UPS:clone
                </h4>
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
                  reprehenderit minima velit distinctio nisi provident magnam
                  quia molestiae repellat. Nec
                </p>
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
