"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { ArrowDownTrayIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import { FaSquareInstagram } from "react-icons/fa6";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
const HeroContent = () => {
  return (
    <motion.div
      initial="Hidden"
      animate="visible"
      className="flex flex-row items-center justify-center mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col items-center justify-center xl:mt-10"
        >
          <h1 className="text-white text-3xl md:text-5xl  lg:text-5xl font-thin	">
            Hello,
            <span className="text-[#02A502]"> Matheus </span>
            aqui
          </h1>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex my-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-bold font-semibold	 text-white w-auto h-auto text-center	"
          >
            Back-end e Front-end developer
          </motion.div>
          <motion.p className="text-base text-gray-400 text-center max-w-[50%] my-6">
            Sou um engenheiro de computação se capacitando em criar e projetar
            soluções tecnológicas para resoluções de problemas, com foco em
            soluções web.
          </motion.p>
          <motion.div className="flex justify-between w-[20rem]  md:w-[24rem]">
            <a
              className={
                "px-0 mt-6 border rounded-sm w-36 text-white flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
              }
              href="/pdf/curriculo.pdf"
              download
            >
              Download CV{" "}
              <ArrowDownTrayIcon className="ml-1" width={20} height={20} />
            </a>
            <a
              href="#skills"
              className={
                "p-3 mt-6 border rounded-sm w-36 bg-[#03C303] text-slate-950 font-medium border-transparent flex items-center justify-center hover:translate-y-[-6px] transition-all ease duration-700"
              }
            >
              Saber mais
            </a>
          </motion.div>
          <motion.div className="flex flex-row text-3xl text-white gap-4 mt-16">
            <a
              href=""
              className="hover:-translate-y-2 hover:text-[#0a66c2] transition-all ease duration-700"
            >
              {" "}
              <RxLinkedinLogo />
            </a>
            <a
              href=""
              className="hover:-translate-y-2 transition-all ease duration-700"
            >
              {" "}
              <RxGithubLogo />
            </a>
            <a
              href=""
              className="hover:-translate-y-2 hover:text-[#cf31a5] transition-all ease duration-700"
            >
              {" "}
              <FaSquareInstagram />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
