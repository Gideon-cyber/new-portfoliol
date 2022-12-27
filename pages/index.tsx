import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="h-screen font-space snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Gideon&apos;s Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Gideon Nwokpor - Front-end Engineer"
        />
      </Head>

      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <Navigation />

      <footer></footer>
    </div>
  );
}
