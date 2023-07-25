import React from "react";
import { motion } from "framer-motion";

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
import Firebase from "../public/firebase.svg";
import Github from "../public/github.svg";
import Nodejs from "../public/Node.js_logo.svg";
import MongoDb from "../public/mongodb-icon.svg";
import Express from "../public/expressjs-icon.svg";
import ReactNative from "../public/react-native-1.svg";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  const SkillsIcons = [
    { img: ReactIcon, direction: true },
    { img: NextIcon, direction: true },
    { img: TypeScriptIcon, direction: true },
    { img: Tailwind, direction: true },
    { img: Git, direction: true },
    { img: Github, direction: true },
    { img: Redux, direction: true },
    { img: Npm, direction: true },
    { img: JavaScriptIcon, direction: false },
    { img: CSSIcon, direction: false },
    { img: SaasIcon, direction: false },
    { img: Bootstrap, direction: false },
    { img: Html, direction: false },
    { img: Figma, direction: false },
    { img: Firebase, direction: false },
    { img: Nodejs, direction: true },
    { img: MongoDb, direction: true },
    { img: Express, direction: true },
    { img: ReactNative, direction: true },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative lg:text-left lg:flex-row max-w-7xl pl-3 lg:px-10 justify-center mx-auto items-center"
    >
      <h2 className="absolute top-[55px] lg:top-[80px] tracking-[20px] text-[#a1bbdf] text-xl lg:text-2xl uppercase dark:text-gray-500">
        Skills
      </h2>

      <div className="grid grid-cols-5 gap-5">
        {SkillsIcons.map((skill, index) => (
          <Skill
            key={index}
            img={skill?.img}
            directionLeft={skill.direction}
            className={`${index === 1 && "dark:text-white dark:bg-white"}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
