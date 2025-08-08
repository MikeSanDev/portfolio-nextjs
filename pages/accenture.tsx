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
          <h3 className="ov_text text-text_Color">

          During my tenure as an Packaged App Developer at Accenture, I honed my skills in asset management within IBM Maximo, an enterprise asset management system. 
          My responsibilities spanned various facets, including user administration, where I created user profiles and permissions to ensure seamless access and security protocols. 
          Leveraging tools like Red Hat Open Shift, I orchestrated the deployment of Maximo instances, optimizing their performance and scalability. 
          I also utilized tools such as SQL and wrote code in Jython and Java, crafting automation scripts and escalations to streamline processes and enhance operational efficiency. 
          Outside of the technical work, I was also a support pillar in the Social/Events for our client.
          
          {/* &rsquo; */}
          </h3>
        <div className="back_project_link">
            <div className="proj_btns">
          <a
            href="https://www.accenture.com/us-en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-1 mt-4 text-white bg-mainColor proj-btn">
              Accenture Website
            </button>
          </a>
              <p onClick={handleBackToProjects} className="underline cursor-pointer text-mainColor py-4">
                Back To Projects
              </p>
          </div>
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
