import Image from "next/legacy/image";
import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import Link from "next/link";


const kinetic = () => {
  return (
    <div className="w-full no-scroll-x ">
      <div className="w-screen h-[30vh] lg:h-[50vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute inset-0 w-full h-full object-cover z-1"
          src="/assets/projects/kinetic_gif.gif"
          alt="Kinetic Footwear Gif"
          layout="fill"

        />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">Kinetic Footwear</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6"> React JS | Framer Motion | Netlify </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-3">Overview</h2>
          <h3 className="ov_text text-text_Color">
            I designed and developed a conceptual website for a shoe company
            that specializes in chargeable sneakers. As the project lead, I
            incorporated engaging animations and seamless page transitions using
            the Framer Motion library for the homepage. I also collected and
            analyzed survey data using form tags, storing and exporting the data
            to Google Sheets for easy collaboration and more efficient
            decision-making. To ensure the project met client needs, I
            collaborated closely with Kinetic Footwear leadership, organized
            weekly design meetings, and defined feature requirements, gathered
            assets, and created mockups and wireframes. Overall, the project was
            a success, demonstrating my ability to create engaging websites that
            meet client needs and user expectations.
          </h3>
          <div className="back_project_link">
            <div className="proj_btns">
              <a
                href="https://kineticfootwear.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-1 mt-5 mr-8 text-white bg-mainColor proj-btn1">
                  Website
                </button>
              </a>
              <a
                href="https://github.com/MikeSanDev/Kinetic-React"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-8 py-1 mt-5 text-white bg-mainColor proj-btn2">
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
        <div className=" bg-gray-200 col-span-4 sm:col-span-2 tech_block md:col-span-1 shadow-xl shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-secondBg ">
              Technologies Used
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> React
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Framer Motion
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Axios
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Netlify
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> HTML/CSS
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Javascript
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Git/Github
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kinetic;
