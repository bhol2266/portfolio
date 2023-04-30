import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-bg-color text-white h-screen snap-y snap-mandatory overflow-scroll z-0 font-inter">
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

      {/* Contact me   */}
    </div>
  );
}
