import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/light-dark-flip.jpg')" }}
    >
      <div className="max-w-{1240px} w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[#ffffff]">
            Hi, I'm <span className="text-[#ffe590]">Michael</span>
          </h1>
          <h1 className="py-2 text-[#ffffff]">A Full-Stack Developer</h1>
          <p className="py-4 max-w-[70%] text-[#ffffff] m-auto">
            I am a skilled full-stack developer with a passion for building
            visually stunning and user-friendly websites. While my primary
            expertise is in front-end development, I am constantly expanding my
            knowledge of back-end technologies to deliver seamless and efficient
            user experiences.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                className="footer-link"
                href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <FaLinkedinIn size={22} />
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
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <FaGithub size={22} />
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
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <AiOutlineMail size={22} />
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
                  className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <BsFillPersonLinesFill size={22} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
