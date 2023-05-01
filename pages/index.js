import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-bg-color text-white h-screen snap-y snap-mandatory  z-0 font-inter overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
      <Head>
        <title>Imadsfsad</title>
      </Head>

      <Header />

      {/* Hero  */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About  */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience  */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills  */}

      <section id="skill" className="snap-center">
        <Skills />
      </section>

      {/* Projects  */}
      <section id="project" className="snap-center">
        <Project />
      </section>

      {/* Contact me   */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
}
