import React, { useState } from "react";
import { GrHomeRounded, GrMail } from "react-icons/gr";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHome, FaAward, FaBriefcase } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import { BsPersonFill } from "react-icons/bs";
import { TbNorthStar } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppSelector } from "../redux/hooks";

type Props = {};

const Navigation = (props: Props) => {
  const router = useRouter();
  // const { navigation } = useAppSelector((state) => state.nav);
  const [active, setActive] = useState(0);
  const navigation = [
    { icon: FaHome, text: "Home" },
    { icon: BsPersonFill, text: "About" },
    { icon: TbNorthStar, text: "Experience" },
    { icon: RiLightbulbFlashFill, text: "Skills" },
    { icon: FaBriefcase, text: "Projects" },
    { icon: FaAward, text: "Awards" },
  ];
  return (
    <div className="sticky bottom-0 flex items-center justify-center">
      <div className="relative w-[400px] h-[70px] bg-white rounded-[10px] drop-shadow-lg border border-[#e0e9f7] flex items-center justify-center mx-auto">
        <ul className="w-[350px] flex items-center justify-between">
          {navigation.map((nav, index) => (
            <li
              className={active === index ? "list active" : "list"}
              key={index}
              onClick={() => setActive(index)}
            >
              <Link
                href={`/#${nav.text.toLowerCase()}`}
                className="navListStyle"
              >
                <span className="indicator">
                  <nav.icon className="navIcon" />
                </span>
                <span className="text">{nav.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
