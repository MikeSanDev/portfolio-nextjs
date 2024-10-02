import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const whiteElephant = () => {
  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[60vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1 inset-0 w-full h-full object-cover"
          src="/assets/projects/white.gif"
          alt="White Elephant Gif"
          layout="fill"
        />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">White Elephant</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6"> Java | Spring Boot | MySQL </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
          <h3 className="ov_text text-text_Color">
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
          <div className="back_project_link">
            <a
              href="https://github.com/MikeSanDev/White-Elephant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 mr-4 py-1 mt-4 text-white bg-mainColor proj-btn ">
                Code
              </button>
            </a>
            <Link href="/#projects">
              <p className="underline cursor-pointer text-mainColor py-4 back-project-link">
                Back To Projects
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 col-span-4 sm:col-span-2 tech_block md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-secondBg ">
              Technologies Used
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Java
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Spring Boot
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> MySQL
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Figma
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> HTML/CSS
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Git/Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default whiteElephant;
