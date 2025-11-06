import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import { useRouter } from 'next/router';
import Image from "next/image";

const Accenture = () => {
    const router = useRouter(); // Move this inside the component
  
    const handleBackToProjects = () => {
      router.push('/').then(() => {
        setTimeout(() => {
          const projectsSection = document.getElementById('projects');
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      });
    };
  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[50vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[50vh] bg-black/40 z-10" />
        <Image
          className="absolute inset-0 w-full h-full object-cover z-1 "
          src="/assets/acc_bg.jpg"
          alt="Spotify dashboard Gif"
          layout="fill"
          />
        <div className="proj_header_text absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">Accenture</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6">Packaged Application Development Associate</p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
<h3 className="ov_text text-text_Color font-normal leading-relaxed">
  As a Packaged App Developer at Accenture, I contributed to a large&ndash;scale upgrade of the IBM Maximo Application Suite (MAS), 
  helping transition the client&rsquo;s legacy asset management system to a modern, cloud&ndash;based platform.<br /><br />

  I managed user provisioning for 50+ end users across multiple environments, created detailed runbooks and deployment guides, 
  and collaborated with engineers on Azure and Red Hat OpenShift infrastructure to ensure smooth releases. 
  I also wrote automation scripts in Python, Jython, and Java to streamline processes and improve system reliability.<br /><br />

  Beyond development, I served as the Social and Events lead for our client team, fostering collaboration and engagement throughout 
  the project lifecycle.<br /><br />
</h3>
        <div className="back_project_link flex flex-row" >
          <a
            href="https://www.accenture.com/us-en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 mr-4 py-1 text-white bg-mainColor proj-btn">
              Accenture Website
            </button>
          </a>
              <p onClick={handleBackToProjects} className="underline cursor-pointer text-mainColor pt-1">
                Back To Projects
              </p>
          </div>
        </div>
        <div className="bg-gray-200 col-span-4 sm:col-span-2 tech_block md:col-span-1 shadow-md shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-secondBg">Technologies Used</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> IBM Maximo
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Red Hat Open Shift
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Microsoft Azure Services
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Microsoft Visio
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Java
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Python
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Jython
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> SQL
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accenture;
