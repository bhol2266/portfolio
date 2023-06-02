import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";


function Header({}) {
  return (
    <header className="select-none p-5 flex items-center justify-between sticky top-0 max-w-7xl mx-auto z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center space-x-2 "
      >
        {/* Social Icons  */}
        <SocialIcon
          url="https://twitter.com/bhola2266"
          fgColor="gray"
          bgColor="transparent"
        />
         
        <SocialIcon
          url="https://facebook.com/bhola2266"
          fgColor="gray"
          bgColor="transparent"
        />
        {/* <SocialIcon
          url="https://youtube.com/bhola2266"
          fgColor="gray"
          bgColor="transparent"
        /> */}
        <SocialIcon
          url="https://instagram.com/bhola.g"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/bhola2266"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center  cursor-pointer"
      >
        <a href="./resume.pdf" download>
          <img
            src="./briefcase.png"
            alt=""
            className="h-6 mx-4 cursor-pointer"
          />
        </a>

        <Link href="#contact">
          <div>
            <SocialIcon
              network="email"
              className="cursor-pointer"
              fgColor="gray"
              bgColor="transparent"
            />
          </div>
        </Link>

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
