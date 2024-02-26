import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg_main.svg')" }}
      // FADE IN BACKGROUND - SVG IS ALREADY OPTIMIZED
    >
        {/* Adjust the 'space-x-_' to give more space between elements */}
      <div id="block" className="max-w-4xl w-full h-full mx-auto p-4 flex justify-between items-center space-x-8">
      <motion.div
          className="main_block1 flex flex-col w-1/3"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: -50 }}
          transition={{ duration: 3 }}
        >
        <div className="main_block1 flex flex-col w-1/3" >
          <h1 className="py-1 text-[#CFCDBD]">
            Michael <span>Sanchez</span>
          </h1>
          <div className="flex items-center justify-between">
            <div className="cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                className="footer-link"
                href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-accentColor"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <FaLinkedinIn size={22} />
                  <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip">
                    Linkedin
                  </span>
                </div>
              </a>
            </div>
            <div className="cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                className="footer-link"
                href="https://github.com/MikeSanDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-accentColor"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <FaGithub size={22} />
                  <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip">
                    Github
                  </span>
                </div>
              </a>
            </div>

            <div className="cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                className="footer-link"
                href="mailto:mike.san.dev16@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-accentColor"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <AiOutlineMail size={22} />
                  <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip">
                    Email
                  </span>
                </div>
              </a>
            </div>

            <div className="cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                className="footer-link"
                href="/assets/michael_sanchez_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-accentColor"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <BsFillPersonLinesFill size={22} />
                  <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip">
                    Resume
                  </span>
                </div>
              </a>
            </div>
          </div>
          <a className="pt-4 text-accentColor">Contact Me</a>
        </div>
        </motion.div>
        <div className="main_block2 flex flex-col w-1/3 relative">
        <AnimatePresence>
            <motion.div
              className="rounded-xl flex items-center justify-center absolute inset-0"
              initial={{ opacity: 0, y: 0 }} // Initial state (above)
              animate={{ opacity: 1, y: -50 }} // Animate state (down)
              exit={{ opacity: 0, y: 100 }} // Exit state (down)
              transition={{ duration: 3 }} // Duration of transition
              style={{ zIndex: 1 }} // Ensure it's above the circle
            >
              <Image
                className="rounded-xl main_img"
                src="/assets/main_img.png"
                alt=""
                title=""
                width="1415"
                height="100"
              />
            </motion.div>
            <motion.div
              className="rounded-xl flex items-center justify-center absolute inset-0"
              initial={{ opacity: 0, y: -100 }} // Initial state (above)
              animate={{ opacity: 1, y: -30 }} // Animate state (down)
              exit={{ opacity: 0, y: 100 }} // Exit state (down)
              transition={{ duration: 3 }} // Duration of transition
              style={{ zIndex: 0 }} // Ensure it's behind the image
            >
              <Image
                className="rounded-xl main_img"
                src="/assets/main_circle.png"
                alt="Me"
                title="Me"
                width="1235"
                height="1000"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.div 
        className="main_block3 flex flex-col w-1/3"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 80 }}
        transition={{ duration: 3 }}>
          <h1>Introduction</h1>
          <p>I am a full stack developer with a passion for creating fully
            functional websites and applications and a background in Dentistry. 
            In my free time i like to dance, create and solve puzzles.</p>
            <button> More About Me </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
