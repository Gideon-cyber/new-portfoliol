import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutPic from "../public/aboutpic.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-screen flex flex-col relative lg:text-left lg:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h2 className="absolute top-[55px] lg:top-[80px] tracking-[20px] text-[#a1bbdf] text-xl lg:text-2xl uppercase text-center dark:text-gray-500">
        About
      </h2>

      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="/aboutpic.jpg"
        alt="profile pic"
        className="rounded-full mb-3 lg:mb-0 flex-shrink-0 w-32 h-32 md:w-56 md:h-56 object-cover lg:rounded-lg lg:w-64 lg:h-95 xl:w-[400px] xl:h-[400px] mx-auto lg:mx-0 lg:mr-10"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-2 lg:space-y-10 px-0 lg:px-10 text-center flex flex-col items-center lg:items-start lg:text-left"
      >
        <h4 className="text-[20px] leading-[24px] md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-purple/50">little</span>{" "}
          background!
        </h4>
        <p className="text-[14px] leading-[18px] lg:text-base">
          I am a Frontend Engineer with a passion for building beautiful and
          fast web applications. I have over 4 years of experience building web
          applications with React, Next.js and Typescript.
          <br /> I am a self-taught developer and Technical writer who loves to
          learn new things and share knowledge with others. I am a team player
          and I love to work with people who are passionate about what they do.
          I am a music lover and I love to play the guitar. I currently work as
          a Frontend Engineer at{" "}
          <span className="underline decoration-purple/50 font-semibold">
            Watu Inc
          </span>
          , a fintech startup in Ibadan, Nigeria.
        </p>
        <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
          <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
            <span>
              <a href="/GIDEON-res.pdf" download>
                Resume
              </a>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
