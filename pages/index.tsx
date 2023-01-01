import Head from "next/head";
import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="h-screen font-space snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Head>
        <title>Gideon&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Gideon Nwokpor - Front-end Engineer"
        />
      </Head>

      <Header />
      <section id="home" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <Navigation />

      <footer></footer>
    </div>
  );
}
