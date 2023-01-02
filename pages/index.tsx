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
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Loader from "../public/loader.gif";

import { useAppSelector } from "../redux/hooks";
import { GetStaticProps } from "next";

export default function Home() {
  const { mode } = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <div
      className={`h-screen font-space snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar lg:scrollbar-track-gray-400/20 lg:scrollbar-thumb-purple/80 ${
        mode ? "dark" : ""
      }`}
    >
      <Head>
        <title>Gideon&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Gideon Nwokpor - Front-end Engineer"
        />
        <link type="image/png" sizes="16x16" rel="icon" href="/favicon.png" />
      </Head>

      {loading ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Image src={Loader} alt="loader" />
        </div>
      ) : (
        <div
          className={`h-screen font-space snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth lg:scrollbar lg:scrollbar-track-gray-400/20 lg:scrollbar-thumb-purple/80`}
        >
          <Header />
          <section id="home" className="snap-start">
            <Hero />
          </section>
          <section
            id="about"
            className="snap-center dark:bg-primaryDark dark:text-white"
          >
            <About />
          </section>
          <section
            id="experience"
            className="snap-center dark:bg-primaryDark dark:text-white"
          >
            <Experience />
          </section>
          <section
            id="skills"
            className="snap-start dark:bg-primaryDark dark:text-white"
          >
            <Skills />
          </section>
          <section
            id="projects"
            className="snap-start dark:bg-primaryDark dark:text-white"
          >
            <Projects />
          </section>
          <section
            id="awards"
            className="snap-start dark:bg-primaryDark dark:text-white"
          >
            <Awards />
          </section>
          <section
            id="contact"
            className="snap-start dark:bg-primaryDark dark:text-white"
          >
            <Contact />
          </section>
          <div className="relative w-full flex items-center justify-center">
            <Navigation />
          </div>
        </div>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {}, // will be passed to the page component as props
  };
};
