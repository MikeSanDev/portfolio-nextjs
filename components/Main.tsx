import React from "react";
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        <div
          className="main_block1 flex flex-col w-1/3"
          style={{ pointerEvents: "auto" }} // Add this line
        >
          <div className="main_block1 flex flex-col w-1/3" >
            <motion.div className="main_block1 flex flex-col w-1/3 "
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: -140 }}
              transition={{ duration: 3 }}>
            <h1 className="py-1 text-secondaryColor">
              Michael <span>Sanchez</span>
            </h1>
            </motion.div>
            <div className="main_link_btns space-x-2 flex items-center justify-between">
              <motion.div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: -140 }}
              transition={{ duration: 2 }}
              >
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <FaLinkedinIn size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Linkedin
                    </span>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: -140 }}
              transition={{ duration: 2 }}
              >
                <a
                  className="footer-link"
                  href="https://github.com/MikeSanDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <FaGithub size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Github
                    </span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: -140 }}
              transition={{ duration: 2 }}
              >
                <a
                  className="footer-link"
                  href="mailto:mike.san.dev16@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <AiOutlineMail size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Email
                    </span>
                  </div>
                </a>
              </motion.div>

              <motion.div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: -140 }}
              transition={{ duration: 2 }}
              >
                <a
                  className="footer-link"
                  href="/assets/michael_sanchez_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <BsFillPersonLinesFill size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Resume
                    </span>
                  </div>
                </a>
              </motion.div>
            </div>
            <motion.div 
            className="block1_btn flex justify-center"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: -140 }}
            transition={{ duration: 2 }}>

              <a href="/#contact" className="main_block1_btn pt-4">Contact Me</a>

            </motion.div>
          </div>
        </div>
        <div className="main_block2 flex flex-col w-1/3 relative">
        <AnimatePresence>
            <motion.div
              className="rounded-xl flex items-center justify-center absolute inset-0"
              initial={{ opacity: 0, y: 0 }} // Initial state (above)
              animate={{ opacity: 1, y: -50 }} // Animate state (down)
              exit={{ opacity: 0, y: 100 }} // Exit state (down)
              transition={{ duration: 2 }} // Duration of transition
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
              transition={{ duration: 2 }} // Duration of transition
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
        className="main_block3 flex flex-col justify-center items-center w-1/3"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 160 }}
        transition={{ duration: 3 }}>
          <h1 className="py-1 text-mainColor text-4xl">Introduction</h1>
          <p className="py-1 text-text_Color">I am a full stack developer with a passion for creating fully
            functional websites and applications and a background in Dentistry. 
            In my free time i like to dance, create and solve puzzles.</p>
            <Link href="/#contact">
            <button className="main_block1_btn2 mt-2"> More About Me </button>
            </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
