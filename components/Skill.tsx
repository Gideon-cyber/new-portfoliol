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
          x: directionLeft ? 50 : -50,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full w-10 h-10 lg:w-16 lg:h-16 object-cover object-center border border-[#c9daf1] group-hover:grayscale transition duration-300 ease-in-out flex items-center justify-center"
      >
        <Image src={img} alt="skill" />
      </motion.div>
    </div>
  );
};

export default Skill;
