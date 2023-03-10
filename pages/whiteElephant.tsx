import Image from "next/legacy/image";
import React from "react";
import wEleImg from "../public/assets/projects/white.gif";
import { RiCodeSSlashFill } from "react-icons/ri";
import Link from "next/link";

const whiteElephant = () => {
  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[40vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={wEleImg}
          alt="/"
        />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="mb-2 py-2 pl-6">White Elephant</h2>
          <p className="mb-2 pb-3 pl-6"> Java | Spring Boot | MySQL </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="text-[#5e6d96] mb-2">Overview</h2>
          <h3 className="text-gray-600">
            I developed a fully functional CRUD application using Java and
            Spring Boot that allows users to create gift ideas for their
            friends. To design and plan the application from scratch, I created
            a comprehensive wireframe and utilized a Trello board, resulting in
            a more organized and efficient development process and a 25%
            reduction in development time. I utilized CSS animation, keyframes,
            and transform to create a visually engaging moving cloud effect on
            the landing page, which improved user engagement and overall
            aesthetic. To iterate through gift objects and render them on the
            display table, I applied JSTL for formatting, looping, and
            validation. I also integrated a secure login and registration system
            using Spring Security, and ensured password security by using
            bcrypt, which resulted in improved security for user data.
          </h3>
          {/* <a 
            href="/"
            target="_blank"
            rel="noopener noreferrer">
            <button className="px-8 py-2 mt-4 mr-8 text-white ">Demo</button></a> */}
          <a
            href="https://github.com/MikeSanDev/White-Elephant"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 text-white proj-btn ">
              Code
            </button>
          </a>
          <div>
            <Link href="/#projects">
              <p className="underline cursor-pointer text-[#5e6d96] py-10 back-project-link">
                Back To Projects
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-[#5e6d96] ">
              Technologies Used
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Java
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Spring Boot
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> MySQL
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Figma
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> HTML
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> CSS
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Git
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whiteElephant;
