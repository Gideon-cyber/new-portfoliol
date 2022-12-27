import React from "react";
import { GrHomeRounded, GrMail } from "react-icons/gr";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { TbNorthStar } from "react-icons/tb";
import Link from "next/link";

type Props = {};

const Navigation = (props: Props) => {
  return (
    <div className="sticky bottom-0 flex items-center justify-center">
      <div className="relative w-[400px] h-[70px] bg-white rounded-[10px] drop-shadow-lg border border-[#e0e9f7] flex items-center justify-center">
        <ul className="w-[350px] flex items-center justify-between">
          <li className="list">
            <Link href="#hero" className="navListStyle ">
              <FaHome className="navIcon" />
              <span className="text">Home</span>
            </Link>
          </li>
          <li className="list">
            <Link href="#about" className="navListStyle">
              <BsPersonFill className="navIcon" />
              <span className="text">About</span>
            </Link>
          </li>
          <li className="list">
            <Link href="3skills" className="navListStyle">
              <RiLightbulbFlashFill className="navIcon" />
              <span className="text">Skills</span>
            </Link>
          </li>
          <li className="list">
            <Link href="#experience" className="navListStyle">
              <TbNorthStar className="navIcon" />
              <span className="text">Experience</span>
            </Link>
          </li>
          <li className="list">
            <Link href="#contact" className="navListStyle">
              <SiMinutemailer className="navIcon" />
              <span className="text">Contact</span>
            </Link>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
