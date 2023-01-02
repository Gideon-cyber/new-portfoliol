import Head from "next/head";
import About from "../components/About";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="h-screen font-space snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-purple/80">
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
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="awards" className="snap-start">
        <Awards />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Navigation />
    </div>
  );
}
