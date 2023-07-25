import React from "react";
import Image from "next/image";
import Link from "next/link";

import Flybank from "../public/flybank.png";
import RealFocus from "../public/realfocus-1.png";
import Startup from "../public/startup.png";
import Era from "../public/era.png";
import NFTMetaPool from "../public/nftmeta-2.png";
import Crown from "../public/crown.png";
import Lighthouse from "../public/lighthouse.png";
import Soundgasm from "../public/Soundgasm2.jpg";
import Easybank from "../public/Easybank.jpg";
import Screen1 from "../public/screen1.png";
import Screen2 from "../public/screen2.png";
import { motion } from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative max-w-full overflow-hidden lg:flex-row text-left justify-evenly mx-auto items-center z-0"
    >
      <h2 className="absolute top-[55px] lg:top-[80px] tracking-[20px] text-[#a1bbdf] text-xl lg:text-2xl uppercase text-center dark:text-gray-500">
        Projects
      </h2>

      <div className="relative space-x-2 overflow-x-scroll flex snap-x snap-mandatory z-20 scroll-smooth scrollbar-track-gray-400/20 scrollbar-thumb-purple/80 scrollbar-thin">
        {/*Nft World App*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col lg:flex-row space-x-3 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center w-1/2 lg:w-fit"
          >
            <Image
              src={Screen1}
              alt="project"
              className="w-[100px] lg:w-[150px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[300px] lg:w-[350px] flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              Nft-World Mobile App
            </h4>

            <p className="text-[14px]">
              Nft-world App is a mobile application for viewing varying ranges
              of users NFT. It was built using{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React Native (expo)
              </span>
              and can be viewed on your expo-go app on your mobile device.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link
                    href="https://expo.dev/@gideon-cyber/nft-world-app"
                    target="_blank"
                  >
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Nft Market place App*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col lg:flex-row lg:space-x-7 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center w-1/2 lg:w-fit"
          >
            <Image
              src={Screen2}
              alt="project"
              className="w-[100px] lg:w-[150px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[300px] lg:w-[350px] flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              Nft-Market-Place Mobile App
            </h4>

            <p className="text-[14px]">
              Nft-Market-Place App is a mobile application UI for viewing and
              purchasing your favorite NFTs. It was built using{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React Native (expo)
              </span>
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React Navigation
              </span>
              . It can be viewed on your expo-go app on your mobile device.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link
                    href="https://expo.dev/@gideon-cyber/nft-marketplace-app"
                    target="_blank"
                  >
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Startup sphere Website*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={Startup}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              Start-up Sphere Website
            </h4>

            <p className="text-[14px]">
              I built a Decentralized crowdfunding web application called
              Startup-sphere. Users can connect their wallet and interact with
              the blockchain, create proposals for any idea they want, vote on
              the ideas of their choosing, and fund them. It was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React.js
              </span>
              , and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                TailwindCSS
              </span>
              .{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Web3.js
              </span>{" "}
              was used for the integration of the smart contract with the
              website,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Formik and Yup
              </span>{" "}
              was used to collect form data in other for users to create a
              proposal.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link
                    href="https://startup-sphere.vercel.app/"
                    target="_blank"
                  >
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*RealFocus Company Website*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={RealFocus}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              RealFocus Company Website
            </h4>

            <p className="text-[14px]">
              I led the rebuild of the company website for Real Focus Tech
              global firm, renowned for wholesales and retail mobiles and
              accessories as well as wristwatches and phone repair gadgets. It
              was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Next.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Typescript
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                TailwindCSS
              </span>
              .{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Formik and Yup
              </span>{" "}
              was used to collect form data in other for potential clients to
              reach out to the company.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link href="https://realfocus.com.ng" target="_blank">
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Flybank Dashboard*/}
        <div className="w-full  p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={Flybank}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              Flybank Dashboard
            </h4>

            <p className="text-[14px]">
              Flybank is a fintech dashboard built in colaboration with a
              product designer, that shows inflow of cash in and out of the
              users account as well as their account balance. It was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Next.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Typescript
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                TailwindCSS
              </span>
              .{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Redux ToolKit
              </span>{" "}
              was used for state management in other to make the app scalable.
              It also has a dark mode feature.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link
                    href="https://flybank-dashboard.vercel.app"
                    target="_blank"
                  >
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Era Website*/}
        <div className="w-full  p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image src={Era} alt="project" className="w-[350px] lg:w-[500px]" />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              ERA Decentralized Web App
            </h4>

            <p className="text-[14px]">
              Served as lead Front-end Engineer for the ERA project. ERA is a
              Decentralized Web app for minting the ERA token used to fund
              disabled people from around the world. It was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                SCSS
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Redux ToolKit
              </span>{" "}
              used for state management in other to make the app scalable. It
              also has a dark mode feature.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link href="http://era-nft.vercel.app/" target="_blank">
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*NFTMetaPool Website*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={NFTMetaPool}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-center lg:text-center">
              NFTMetaPool Decentralized Web App
            </h4>

            <p className="text-[14px]">
              Served as lead Front-end Engineer for the NFTMETAPool Dapp
              project. ERA is a Decentralized Web app for minting the ERA token
              used to fund disabled people from around the world. It was built
              with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                SCSS
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Redux
              </span>{" "}
              used for state management in other to make the app scalable. Other
              libraries used include{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Ether.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Web3.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                day.js
              </span>{" "}
              amongst others.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link href="https://www.nftsmetapool.com/" target="_blank">
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Lighthouse HR company*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={Lighthouse}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              LightHouse HR Company Website
            </h4>

            <p className="text-[14px]">
              I led the rebuild of the company website for LightHouse HR
              Company, a human resource company based in Ibadan, Nigeria. It was
              built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                HTML
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                SCSS
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                JavaScript
              </span>
              .Other libraries used include{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Paystack
              </span>{" "}
              for accepting payments,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                {" "}
                Elastic Email
              </span>{" "}
              for sending emails and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                AnimateOnScroll Library
              </span>{" "}
              for animations.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link
                    href="https://lighthousehrcompany.com.ng/"
                    target="_blank"
                  >
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Crwn clothing E-commerce*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={Crown}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-center lg:text-center">
              Crwn Clothing E-commerce Web App
            </h4>

            <p className="text-[14px]">
              Crwn Clothing E-commerce Web App is a web application project
              where users can other various clothing ranging from male to female
              wares online. It was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                SCSS
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Redux
              </span>{" "}
              used for state management in other to make the app scalable. Other
              libraries used include{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Stripe
              </span>
              for accepting payment , and
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Google Firebase
              </span>{" "}
              for Login and Logout authentication as well as storing app data.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link
                    href="https://crwn-clothing-blond.vercel.app/"
                    target="_blank"
                  >
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*SoundGasm Landing Page*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={Soundgasm}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-center lg:text-center">
              Soundgasm Landing Page
            </h4>

            <p className="text-[14px]">
              Soundgasm is a landing page for music lovers who love listening to
              their favorite music from around the world. It was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                React.js
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                TailwinCSS
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                Framer Motion
              </span>{" "}
              used for animation.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link href="https://soundgasm.vercel.app/" target="_blank">
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*Easybank landingPage*/}
        <div className="w-full p-6 flex-shrink-0 snap-center flex flex-col space-y-3 lg:space-y-0 items-center justify-center">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full flex items-center justify-center"
          >
            <Image
              src={Easybank}
              alt="project"
              className="w-[350px] lg:w-[500px]"
            />
          </motion.div>
          <div className="space-y-3 lg:space-y-0 w-[350px] lg:w-auto lg:max-w-3xl flex flex-col items-center">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-left lg:text-center">
              Easybank Landing page
            </h4>

            <p className="text-[14px]">
              I Built a landing page for Easybank, highly responsive and showing
              seemless transitions between various sections of the landing page
              . It was built with{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                HTML
              </span>
              ,{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                SCSS
              </span>{" "}
              and{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                JavaScript
              </span>
              , with the help of{" "}
              <span className="text-purple dark:text-[#8eb1e2] font-bold p-1 cursor-pointer">
                AnimateOnScroll Library
              </span>{" "}
              for animations.
            </p>
            <div className="w-[120px] h-[32px] border-[2px] border-purple rounded-[8px] relative">
              <div className="w-full h-[32px] flex items-center justify-center bg-purple rounded-[8px] text-white absolute right-[4px] top-[4px] text-[14px] leading-[18px] lg:text-base">
                <span>
                  <Link href="https://gideasybank.netlify.app/" target="_blank">
                    View Site
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] left-0 h-[300px] bg-purple/10 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
