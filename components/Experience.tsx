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

type Props = {};

const Experience = (props: Props) => {
  const Experiences = [
    {
      image: "./watu.jpg",
      role: "Frontend Engineer",
      company: "WATU Global Technology Inc",
      skills: [ReactIcon, NextIcon, TypeScriptIcon, Tailwind, Git, Redux, Npm],
      date: "September 2022 - Present",
      summary: [
        "Converted high quality designs into responsive web pages using Next.js, Typescript, and Tailwind CSS",
        "Built reusable components and developed a custom design system",
        "Built new features and fixed bugs in existing features increasing customer retention by 10%",
        "Fixed bugs and improved the performance of the application by 20%",
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
      image: "./nftmeta.png",
      role: "Frontend Engineer",
      company: "NFTMETAPOOL INC",
      skills: [ReactIcon, JavaScriptIcon, CSSIcon, Redux, Git, Npm],
      date: "August 2022 - September 2022",
      summary: [
        "Co-lead a team of developers and designers through the development and launch of the company’s foremost DApp product.",
        "Lead the creation of the product architecture and design system, while building the front-end infrastructure for the product.",
        "Oversaw the wholesome testing of the product before the product launch and further testing after launch to ensure the product’s stability and performance.",
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
      date: "March 2022 - August 2022",
      summary: [
        "Working on projects for clients in various industries",
        "Developed a custom design system for the company",
        "Agile development using Jira to manage tasks and deadlines",
      ],
    },
    {
      image: "./sidehustle.jpg",
      role: "Frontend Developer Intern",
      company: "Side Hustle Inc",
      skills: [
        ReactIcon,
        JavaScriptIcon,
        CSSIcon,
        Tailwind,
        Bootstrap,
        Git,
        Npm,
      ],
      date: "May 2021 - July 2021",
      summary: [
        "Learning various frontend technologies and frameworks",
        "Converted high quality designs into responsive web pages using React, Tailwind CSS, and Bootstrap",
        "Working on projects with other developer interns",
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
