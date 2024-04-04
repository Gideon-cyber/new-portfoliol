import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import ReactIcon from "../public/react.svg";
import NextIcon from "../public/next.svg";
import Tailwind from "../public/tailwindcss.svg";
import Git from "../public/git.svg";
import Redux from "../public/redux.svg";
import TypeScriptIcon from "../public/typescript.svg";
import Npm from "../public/npm.svg";
import JavaScriptIcon from "../public/javascript.svg";
import CSSIcon from "../public/css3.svg";
import SaasIcon from "../public/sass.svg";
import Bootstrap from "../public/bootstrap.svg";
import Html from "../public/html-5.svg";
import Figma from "../public/figma.svg";
import Express from "../public/expressjs-icon.svg";
import MongoDb from "../public/mongodb-icon.svg";
import NodeJSIcon from "../public/Node.js_logo.svg";

type Props = {};

const Experience = (props: Props) => {
  const Experiences = [
    {
      image: "./Stealth.jpeg",
      role: "Senior FullStack Engineer",
      company: "Stealth Startup",
      skills: [
        ReactIcon,
        NextIcon,
        TypeScriptIcon,
        JavaScriptIcon,
        Tailwind,
        Git,
        Express,
        NodeJSIcon,
        MongoDb,
        Redux,
        Npm,
      ],
      date: "July 2023 - Present",
      summary: [
        "Participated in pre-project analysis and technical assessments to validate creation of user-friendly interface. ",
        "Troubleshot website on different browsers to determine quality.",
        "Worked with different testing tools and frameworks, content management systems and cross-functional teams to smoothly complete projects.",
        "Developed and integrated payment processing features onto the web and mobile apps increasing revenue by 5% so far.",
        `Took charge of spearheading the development of the company's premier mobile application, alongside the creation of the Admin dashboard, as well as Student and Teacher dashboards.`,
      ],
    },
    {
      image: "./watu.jpg",
      role: "Frontend Engineer",
      company: "WATU Global Technology Inc",
      skills: [ReactIcon, NextIcon, TypeScriptIcon, Tailwind, Git, Redux, Npm],
      date: "September 2022 - Present",
      summary: [
        "Designed and implemented a new dashboard interface that reduced user onboarding time by 30% and increased user retention by 15%. ",
        "Played a key role in the onboarding process for two other fintech companies utilizing the Fintech as a Service (FAAS) platform, resulting in a 50% reduction in integration time and a 20% increase in client satisfaction ratings.",
        "Implemented client-side data validation and error handling mechanisms, reducing transaction errors by 25% and improving overall user experience.",
      ],
    },
    {
      image: "./realfocus.png",
      role: "Frontend Engineer",
      company: "REALFOCUS TECH GLOBAL",
      skills: [
        ReactIcon,
        NextIcon,
        TypeScriptIcon,
        CSSIcon,
        Tailwind,
        Figma,
        Redux,
        Git,
        Npm,
      ],
      date: "October 2022",
      summary: [
        "Led the rebuild of the company’s website from the ground up using Next.js, Typescript, and Tailwind CSS",
        "Built reusable components and developed a custom design system",
        "Added a contact form to website that increased customer engagement and feedback by 15%",
      ],
    },

    {
      image: "./dhelc.jpg",
      role: "Frontend Developer",
      company: "DHELC BUSINESS SOLUTIONS",
      skills: [
        Html,
        CSSIcon,
        JavaScriptIcon,
        ReactIcon,
        Tailwind,
        SaasIcon,
        Git,
        Npm,
      ],
      date: "Febuary 2022 - August 2022",
      summary: [
        "Working on projects for clients in various industries",
        "Developed a custom design system for the company",
        "Agile development using Jira to manage tasks and deadlines",
      ],
    },
    {
      image: "./era.jpeg",
      role: "Frontend Engineer",
      company: "NFT ERA Inc",
      skills: [
        ReactIcon,
        JavaScriptIcon,
        CSSIcon,
        Tailwind,
        Bootstrap,
        Git,
        Npm,
      ],
      date: "March 2021 - January 2022",
      summary: [
        " I was responsible for designing and developing the user interface of the NFT platform, ensuring it is visually appealing, intuitive to navigate, and responsive across devices.",
        "I collaborated with backend developers to integrate frontend components with blockchain technologies such as Ethereum or Solana.",
        "Interacted with smart contracts, querying blockchain data, and handling cryptographic operations to enable NFT-related functionalities.",
      ],
    },
    {
      image: "./nftmeta.PNG",
      role: "Frontend Engineer",
      company: "NFTMETAPOOL INC",
      skills: [ReactIcon, JavaScriptIcon, CSSIcon, Redux, Git, Npm],
      date: "Febuary 2019 - December 2020",
      summary: [
        "Co-lead a team of developers and designers through the development and launch of the company’s foremost DApp product.",
        "Lead the creation of the product architecture and design system, while building the front-end infrastructure for the product.",
        "Oversaw the wholesome testing of the product before the product launch and further testing after launch to ensure the product’s stability and performance.",
      ],
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative lg:text-left lg:flex-row max-w-7xl pl-3 lg:px-10 justify-center mx-auto items-center"
    >
      <h2 className="absolute top-[55px] lg:top-[80px] tracking-[20px] text-[#a1bbdf] text-xl lg:text-2xl uppercase dark:text-gray-500">
        Experience
      </h2>

      <div className="flex space-x-5 w-full px-2 lg:px-10 overflow-x-scroll snap-x snap-mandatory scroll-smooth scrollbar-track-gray-400/20 scrollbar-thumb-purple/80 scrollbar-thin">
        {Experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            role={experience?.role}
            company={experience?.company}
            date={experience?.date}
            image={experience?.image}
            skills={experience?.skills}
            summary={experience?.summary}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
