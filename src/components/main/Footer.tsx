import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[10px] ">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-row gap-2 text-2xl z-50">
          <a href="https://www.linkedin.com/in/matheusz-nied/" className="hover:-translate-y-2 hover:text-[#0a66c2] transition-all ease duration-700">
            {" "}
            <RxLinkedinLogo />
          </a>
          <a href="https://github.com/matheusz-nied" className="hover:-translate-y-2 transition-all ease duration-700">
            {" "}
            <RxGithubLogo />
          </a>
          <a href="https://instagram.com/matheusz.nied" className="hover:-translate-y-2 hover:text-[#cf31a5] transition-all ease duration-700">
            {" "}
            <FaSquareInstagram />
          </a>
          <a href="https://twitter.com/matheusz_nied" className="hover:-translate-y-2 hover:text-[#1d9bf0] transition-all ease duration-700">
            {" "}
            <FaTwitter />
          </a>
        </div>

        <div className="text-[15px] text-center mt-2">
          &copy; Matheusz.nied 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
