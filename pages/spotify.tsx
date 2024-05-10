import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const spotify = () => {
  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[50vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute inset-0 w-full h-full object-cover z-1 "
          src="/assets/projects/dash_spotify.gif"
          alt="Spotify dashboard Gif"
          layout="fill"
          />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">Spotify Clone</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6">React JS | Spotify API | Context API</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
          <h3 className="ov_text text-text_Color">
            I developed a real-time Spotify clone project that included user
            authentication, responsive design, and API usage. The project was
            designed using Material UI and built with the Spotify API to display
            user account and playlist information. To prevent prop drilling
            between components, I utilized the Context API. The project serves
            as a functional and interactive clone of Spotify, enabling users to
            enjoy the platform&rsquo;s music streaming features while also
            providing a seamless user experience.
          </h3>
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            >
            <button className="px-8 py-2 mt-4 mr-8 text-white ">Demo</button>
          </a> */}
        <div className="back_project_link">
            <div className="proj_btns">
          <a
            href="https://github.com/MikeSanDev/Spotify-Clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-1 mt-4 text-white bg-mainColor proj-btn">
              Code
            </button>
          </a>
          </div>
            <Link href="/#projects">
              <p className="underline cursor-pointer text-mainColor py-4 back-project-link">
                Back To Projects
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-gray-200 col-span-4 tech_block tech_block sm:col-span-2 md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-secondBg">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> React JS
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Spotify API
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Context API
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Node JS
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Express JS
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> HTML/CSS
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Material UI
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Mongo DB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default spotify;
