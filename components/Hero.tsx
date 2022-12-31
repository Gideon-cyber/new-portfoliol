import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import ProfilePic from "../public/pictureprof.jpg";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Gideon Nwokpor",
      "Guy-who-loves-music.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src={ProfilePic}
        alt="profile pic"
        className="rounded-full relate h-32 w-32 object-cover mx-auto"
      />
      <div className="z-20">
        <h2 className="text-sm tracking-[15px] pb-3 w-[250px] mx-auto md:w-auto">
          FRONT-END ENGINEER
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10 ">
          <span className="">{text}</span>
          <Cursor cursorColor="#085aca" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
