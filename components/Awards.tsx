import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TfiCup } from "react-icons/tfi";

type Props = {};

export const FirstAward = () => {
  return (
    <div className="flex items-start flex-col gap-6 w-[80%] mx-auto p-3 lg:p-0">
      <h5 className="text-purple dark:text-[#8eb1e2] font-bold">
        Team Lead / Frontend Engineer
      </h5>
      <span className="text-[14px]">
        Lead a team of four(4) to emerge among the winners of the Hackathon. We
        built a DP auto generator platform,{" "}
        <span className="font-semibold text-purple dark:text-[#8eb1e2]">
          Alphagen
        </span>
        , which increases users campaign/program reach by creating personalized
        DPs for their events.
      </span>
    </div>
  );
};

export const SecondAward = () => {
  return (
    <div className="flex items-start flex-col gap-6 w-[80%] mx-auto p-3 lg:p-0">
      <h5 className="text-purple dark:text-[#8eb1e2] font-bold">
        Technical Writer
      </h5>
      <span className="text-[14px]">
        Emerged among the winners of the Writeathon organized by Fincra. I wrote
        a blog post about{" "}
        <a
          href="https://gideoncyber.hashnode.dev"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-purple dark:text-[#8eb1e2]"
        >
          How to integrate Fincra Checkout API
        </a>{" "}
        in a Project using JavaScript.
      </span>
    </div>
  );
};

const Awards = (props: Props) => {
  const Award = [
    { header: "CodeSandbox/Ingressive4Good Hackathon", date: "March, 2022" },
    { header: "Fincra Writeathon ", date: "December 2022" },
  ];

  const [selected, setSelected] = useState(0);

  const displayContent = (selected: number) => {
    switch (selected) {
      case 0:
        return <FirstAward />;
      case 1:
        return <SecondAward />;
      default:
        return <FirstAward />;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative max-w-full overflow-hidden lg:flex-row text-left justify-evenly mx-auto items-center z-0"
    >
      <h2 className="absolute top-[55px] lg:top-[80px] tracking-[20px] text-[#a1bbdf] text-xl lg:text-2xl uppercase text-center dark:text-gray-500">
        Awards
      </h2>

      <div className="flex items-center gap-6 flex-col lg:flex-row h-[60%] lg:h-auto overflow-y-scroll lg:overflow-y-hidden overflow-x-hidden">
        {/*Left*/}
        <div className="flex items-center justify-center flex-col gap-6">
          {Award.map((award, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              key={index}
              className="h-[150px] w-full lg:w-[400px] bg-[#f2f6fc] dark:bg-[#292929] flex items-center hover:cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-500 ease-in-out"
              onClick={() => setSelected(index)}
            >
              <div className="flex items-center justify-center gap-2 mx-auto text-[20px]">
                <TfiCup className="w-[20%]" />
                <div className="flex items-start justify-start flex-col gap-2 w-[80%]">
                  <h5 className="text-[14px] font-bold">{award.header}</h5>
                  <span className="text-[13px]">{award.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/*Right*/}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          className="flex items-center justify-center h-[324px] w-[80%] lg:w-[400px] border-[4px] border-[#f2f6fc] dark:border-[#f2f6fc]/30 shadow"
        >
          {displayContent(selected)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Awards;
