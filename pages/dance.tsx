import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const dance = () => {
  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[50vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute inset-0 w-full h-full object-cover z-1 "
          src="/assets/me_banner.jpg"
          alt="me"
          layout="fill"
          />
        <div className="proj_header_text absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">Dance Databank </h2>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
            <p className="text-white">Check out some of my recent videos here: </p>
        <div className="back_project_link">
            <div className="proj_btns">
          <a
            href="https://www.instagram.com/_.kuya.mike._/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-1 mt-4 text-white bg-mainColor proj-btn">
              Instagram
            </button>
          </a>
          </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center py-10">
          <Link href="/">
            <div  className="rounded-full shadow-lg  shadow-gray-500 p-4 bg-[#5c4c68] cursor-pointer hover:scale-110 ease-in duration-300 text-accentColor"
            title="Back to the top">
              <HiOutlineChevronDoubleUp size={30} className="m-auto" />
            </div>
          </Link>
        </div>
    </div>
  );
};

export default dance;
