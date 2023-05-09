import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Ashutosh Gupta",
      "Guy-who-loves-coffee",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="select-none  h-screen flex flex-col space-y-8 items-center justify-center text=center overflow-hidden">
      <BackgroundCircles />
      <img
        className="rounded-full relative  w-[140px] skew-x-y mx-auto object-cover bg-gray-500"
        src="./profile.png"
        alt=""
      />
      <div className="z-10 ">
        <h2 className="text-xs  lg:text-lg text-center uppercase text-gray-500 pb-2 tracking-[15px] font-semibold px-10">
          Software Engineer
        </h2>
        <h1 className="text-center text-2xl lg:text-5xl xl:text-5xl">
          <span className="">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="flex justify-center items-center pt-5 space-x-2 lg:space-x-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#project">
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
