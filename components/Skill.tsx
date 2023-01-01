import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  img: string;
  directionLeft?: boolean;
};

const Skill = ({ img, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          opacity: 0,
          x: directionLeft ? 100 : -100,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full w-16 h-16 lg:w-23 lg:h-23 object-cover object-center border border-[#c9daf1] group-hover:grayscale transition duration-300 ease-in-out flex items-center justify-center"
      >
        <Image src={img} alt="skill" />
      </motion.div>
    </div>
  );
};

export default Skill;
