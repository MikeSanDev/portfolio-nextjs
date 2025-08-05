import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";
import LightRays from "@/components/LightRays";

const Main = () => {
  return (
    <div
      id="home"
      className="relative w-full min-h-screen h-screen overflow-hidden text-center"
      // style={{ backgroundImage: "url('/assets/bg_main.svg')" }}
    // FADE IN BACKGROUND - SVG IS ALREADY OPTIMIZED
    >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffe58b"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="absolute inset-0 z-0 pointer-events-none"
        />

      {/* Adjust the 'space-x-_' to give more space between elements */}
      <div id="block" className="absolute inset-0 z-10 w-full h-full p-4 flex justify-between items-center space-x-8">
        <motion.div
          className="main_block1 flex flex-col w-1/3"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 100 }}
          transition={{ duration: 4 }}
          style={{ pointerEvents: "auto" }} // Add this line
        >
          <div className="main_block1 flex flex-col w-1/3" >
            <div className="main_block1 flex flex-col w-1/3 ">
              <h1 className="py-1 main_text text-secondaryColor">
                Michael</h1>
              <h1 className="last_name py-1 pl-3 text-secondaryColor">Sanchez</h1>
            </div>
            <div className="main_link_btns space-x-2 flex items-center justify-between pl-6">
              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="res_ipad rounded-full shadow-lg shadow-gray-600 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <FaLinkedinIn size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Linkedin
                    </span>
                  </div>
                </a>
              </div>
              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="https://github.com/MikeSanDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="res_ipad rounded-full shadow-lg shadow-gray-600 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <FaGithub className="res_icon" size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Github
                    </span>
                  </div>
                </a>
              </div>

              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mjs070594@gmail.com&su=Portfolio%20Contact&body=Hi%20Michael,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0A"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="res_ipad rounded-full shadow-lg shadow-gray-600 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <AiOutlineMail size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Email
                    </span>
                  </div>
                </a>
              </div>

              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="/assets/michael_sanchez_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="res_ipad rounded-full shadow-lg shadow-gray-600 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <BsFillPersonLinesFill size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Resume
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="block1_btn flex justify-center pt-1">
              <Link href="/#contact">
                <button className="main_block1_btn ">Contact Me</button>
              </Link>
            </div>
          </div>
        </motion.div>
        <div
          className="main_block2 flex flex-col w-1/3 relative">
          <motion.div
            className="rounded-xl flex items-center justify-center absolute inset-0 z-10"
            initial={{ opacity: 0.01, y: -100 }}
            animate={{ opacity: 1, y: 90 }}
            transition={{ duration: 4 }}
          >
            <Image
              className="rounded-xl main_img "
              src="/assets/main_img.png"
              alt=""
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            className="rounded-xl flex items-center justify-center absolute inset-0"
            initial={{ opacity: 0.01, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4 }}
          >
            <Image
              className="rounded-xl circe_img"
              src="/assets/main_circle.png"
              alt=""
              width={400}
              height={400}
            />
          </motion.div>
        </div>
        <motion.div
          className="main_block3 flex flex-col justify-center items-center w-1/3"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: -30 }}
          transition={{ duration: 4 }}>
          <h1 className="py-1 text-[#ffe590] text-4xl">Introduction</h1>
          <p className="py-2 px-6 text-text_Color">I am a full stack developer with a passion for creating fully
            functional websites and applications and a background in Dentistry.
            In my free time i like to dance, create and solve puzzles.</p>
          <Link href="/#about">
            <button className="main_block1_btn2 mt-2"> More About Me </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
