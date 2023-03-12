import Image from "next/legacy/image";
import React from "react";
import chamberImg from "../public/assets/projects/chamber_io.gif";
import { RiCodeSSlashFill } from "react-icons/ri";
import Link from "next/link";

const chamber = () => {
  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[40vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={chamberImg}
          alt="/"
        />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="mb-2 py-2 pl-6">Chamber.IO</h2>
          <p className="mb-2 pb-3 pl-6"> React JS | Stripe | Netlify </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="text-[#5e6d96] mb-2">Overview</h2>
          <h3 className="text-gray-600">
            I developed a website for a local dance training organization that
            allowed users to purchase tickets with ease. I utilized the Stripe
            payment portal, simplifying ticket tracking for the client and
            resulting in an improved user experience. Furthermore, to ensure a
            smooth user experience, I incorporated React Bootstrap components to
            display detailed information for each training session and developed
            an in-cart function to enable users to add and remove items from
            their cart effortlessly. As the lead of weekly design meetings with
            the founder and cross-functional team, I collaborated with 10 local
            dancers in Chicago to create a video that was featured on the
            landing page for a notable dance company, resulting in a 50%
            increase in website traffic and ticket sales since launch.
          </h3>
          <a
            href="https://chamber-io.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 text-white bg-[#5e6d96] proj-btn">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/MikeSanDev/Chamber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 text-white bg-[#5e6d96] proj-btn">
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
                <RiCodeSSlashFill className="pr-1" /> React JS
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Stripe API
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Axios
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Netlify
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> HTML
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> CSS
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Javascript
              </p>
              <p className="text-[#5e6d96]  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chamber;
