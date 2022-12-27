import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border rounded-full border-[#a1bbdf] animate-ping h-[200px] w-[200px] mt-52" />
      <div className="absolute border rounded-full border-[#f2f6fc] h-[300px] w-[300px] mt-52" />
      <div className="absolute border rounded-full border-[#f2f6fc] h-[500px] w-[500px] mt-52" />
      <div className="absolute border rounded-full border-[#085aca] animate-ping h-[650px] w-[650px] opacity-20 mt-52" />
      <div className="absolute border rounded-full border-[#5f98e7] animate-ping h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
