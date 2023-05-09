import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";
import Link from "next/link";
import { createClient } from "next-sanity";

export default function Home({
  experience,
  pageInfo,
  projects,
  social,
  skills,
}) {
  return (
    <div className="bg-bg-color text-white h-screen snap-y snap-mandatory  z-0 font-inter overflow-y- sm:overflow-y-scroll overflow-x-hidden  md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A] ">
      <Head>
        <title>Ashutosh Gupta</title>
      </Head>

  

      {/* Skills  */}

      <section id="skill" className="snap-center">
        <Skills skills={skills} />
      </section>

      {/* Projects  */}
      <section id="project" className="snap-center">
        <Project />
      </section>

      {/* Contact me   */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://i.imgur.com/e2yvD6A.png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    projectId: "pffpqksx",
    dataset: "production",
    apiVersion: "2022-05-03",
    useCdn: false,
  });

  const experience = await client.fetch(`*[_type == "experience"]`);
  const pageInfo = await client.fetch(`*[_type == "pageInfo"]`);
  const projects = await client.fetch(`*[_type == "project"]`);
  const social = await client.fetch(`*[_type == "social"]`);
  const skills = await client.fetch(`*[_type == "skill"]`);

  return {
    props: {
      experience,
      pageInfo,
      projects,
      social,
      skills,
    },
  };
}
