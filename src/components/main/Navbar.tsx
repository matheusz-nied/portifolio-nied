
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] absolute top-0  bg-[#00000017] backdrop-blur-md px-10 z-50">
          {/* <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"> */}

      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center absolute"
        >
          <Image
            src="/code.png"
            alt="logo"
            width={45}
            height={70}
            className="cursor-pointer hover:animate-slowpin"
          />
          <span className="font-bold ml-[15px] text-gray-300">
            Matheusz.nied
          </span>
        </a>

        <div className="h-full w-full hidden md:flex flex-row items-center text-white justify-center gap-8 text-base xl:text-xl">
          <a href="#about-me" className="font-medium cursor-pointer hover:text-greenLight hover:scale-105 transition-all ease duration-500">
            About me
          </a>
          <a href="#skills" className="font-medium	cursor-pointer hover:text-greenLight hover:scale-105 transition-all ease duration-500">
            Skills
          </a>
          <a href="#projects" className="font-medium	cursor-pointer hover:text-greenLight hover:scale-105 transition-all ease duration-500">
            Projects
          </a>
          <a href="#contact" className="font-medium	cursor-pointer hover:text-greenLight hover:scale-105 transition-all ease duration-500">
            Contact
          </a>
        </div>
        <div className="flex flex-row gap-5">
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
