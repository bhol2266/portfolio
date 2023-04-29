import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-bg-color text-white h-screen snap-y snap-mandatory overflow-scroll z-0 font-inter">
      <Head>
        <title>Imadsfsad</title>
      </Head>

      <Header />

      {/* Hero  */}
      <section id="hero">
        <Hero />
      </section>

      {/* About  */}

      {/* Experience  */}

      {/* Skills  */}

      {/* Projects  */}

      {/* Contact me   */}
    </div>
  );
}
