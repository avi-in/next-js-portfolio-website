"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { resumeFilePath } from "@/constant";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-10 sm:px-16 mt-32 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <div className="Welcome-text text-[15px] w-auto text-cyan-500">
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Hi There!  \u{1F44B}\u{1F44B}",
                    "Welcome to Coding Realm!",
                    "Explore & Enjoy your Visit!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Exploring Uncharted
            <span className="text-transparent text-[42px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Realms of
            </span>{" "}
            Creativity
          </span>
          {/*  creativity */}
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  my-5 max-w-[600px] "
        >
          I&apos;m a dynamic Full Stack Web Developer with a flair for creating
          interactive & visually stunning web applications. Curious for
          more?&nbsp;
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
            Embark on a journey through my digital portfolio and uncover the
            full story.
          </span>
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          download
          href={resumeFilePath}
          className="py-2 button-primary border border-[purple] text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Downlod Resume
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full hidden sm:flex justify-center items-center"
      >
        <Image
          src="/laptop.png"  
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
