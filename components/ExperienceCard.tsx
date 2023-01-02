import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
// import { SiFirebase } from "react-icons/si";
import Firebase from "../public/firebase.svg";

type Props = {
  image: string;
  role: string;
  company: string;
  skills: any[];
  date: string;
  summary: string[];
};

const ExperienceCard = ({
  image,
  role,
  company,
  skills,
  date,
  summary,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-start space-y-2 flex-shrink-0 w-[93%] xl:w-[900px] snap-center bg-[#f2f6fc] dark:bg-[#292929] px-2 lg:px-10 py-3 lg:py-6 lg:opacity-60 lg:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden lg:mt-3">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={image}
        className="w-[100px] rounded-full object-cover object-center"
        alt="logo"
      />

      <div className="px-0 ">
        <h4 className="text-[24px] font-light">{role}</h4>
        <p className="font-bold mt-1 text-[16px]">{company}</p>
        <div className="flex space-x-2 my-2">
          {skills.map((skill, index) => (
            <div key={index}>
              <Image src={skill} alt="skills" width={22} height={22} />
            </div>
          ))}

          {/* <SiFirebase className="text-3xl" /> */}
        </div>
        <p className="py-5 uppercase font-semibold text-[#a1bbdf] text-[14px]">
          {date}
        </p>

        <ul className="list-disc space-y-2 ml-5 text-[14px] leading-[18px]">
          {summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
