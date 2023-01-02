import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setMode } from "../redux/userSlice";

type Props = {};

const Header = (props: Props) => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector((state) => state.user);
  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl lg:mx-auto mx-4 py-3 lg:py-5 bg-white dark:bg-primaryDark lg:bg-transparent z-50">
      <motion.h1
        initial={{
          x: -500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="font-b-700 font-yellowtail text-[24px] leading-[30px] lg:text-[34px] lg:leading-[47.22px] text-purple dark:text-[#8eb1e2]"
      >
        GideonCyber
      </motion.h1>
      <motion.div
        initial={{
          x: 500,
          scale: 0.5,
          opacity: 0,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center gap-4"
      >
        <SocialIcon
          className="text-[20px] cursor-pointer"
          url="https://www.twitter.com/gideon_cyber"
          style={{ height: 30, width: 30 }}
          target="_blank"
        />
        <SocialIcon
          className="text-[20px] mr-6 cursor-pointer"
          url="https://www.linkedin.com/in/gideon-nwokpor"
          style={{ height: 30, width: 30 }}
          target="_blank"
        />

        {mode ? (
          <BsSun
            className="text-[24px] cursor-pointer text-white"
            onClick={() => dispatch(setMode())}
          />
        ) : (
          <BsFillMoonStarsFill
            className="text-[24px] cursor-pointer"
            onClick={() => dispatch(setMode())}
          />
        )}
      </motion.div>
    </header>
  );
};

export default Header;
