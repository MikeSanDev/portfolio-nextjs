import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import { useRouter } from 'next/router';
import Image from "next/image";

const Asj = () => {
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
            <div className="w-screen h-[30vh] lg:h-[60vh]  relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/40 z-10" />
                <Image
                    className="absolute z-1 inset-0 w-full h-full object-cover"
                    src="/assets/projects/asj-gif.gif"
                    alt="ASJ"
                    layout="fill"
                />
                <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
                    <h2 className="proj_title mb-2 py-2 pl-6">UI/UX Portfolio Website</h2>
                    <p className="proj_subtext mb-2 pb-3 pl-6"> Next.JS | Tailwind | Framer Motion </p>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4 ">
                    <h2 className="ov_title text-accentColor mb-2">Overview</h2>
                   <h3 className="ov_text text-text_Color font-normal leading-relaxed">
  I collaborated with a UI/UX designer who had recently completed his design program to build his first professional 
  portfolio website. His goal was to create a design that captured his personality and creative style, while my focus 
  was to faithfully translate that vision into a fully functional web experience.<br /><br />

  Aaron designed the layout and components in Figma, and I implemented his specifications with precision using 
  Next.js, Tailwind CSS, and Framer Motion. I treated this as an opportunity to refine my collaboration skills with 
  designers and to deliver pixel&ndash;perfect alignment between concept and implementation.<br /><br />

  The final result became a clean, fast, and expressive portfolio that reflects Aaron&rsquo;s creative identity and 
  strengthens his presence as he enters the tech industry.<br /><br />
</h3>
                    <div className="back_project_link">
                        <div className="proj_btns">
                            <a
                                href="https://aaronsanjose.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-8 py-1 mt-5 mr-8 text-white bg-mainColor proj-btn1">
                                    Demo
                                </button>
                            </a>
                            <a
                                href="https://github.com/MikeSanDev/asj-portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-8 py-1 mt-5 text-white bg-mainColor proj-btn2">
                                    Code
                                </button>
                            </a>
                        </div>
                            <p onClick={handleBackToProjects}  className="underline cursor-pointer text-mainColor py-4 back-project-link">
                                Back To Projects
                            </p>
                    </div>
                </div>
                <div className="bg-gray-200 col-span-4 sm:col-span-2 tech_block md:col-span-1 shadow-md shadow-gray-900 rounded-xl p-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2 text-secondBg ">
                            Technologies Used
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1">
                            <p className="text-secondBg  py-2 flex items-center">
                                <RiCodeSSlashFill className="pr-1" /> Next.JS
                            </p>
                            <p className="text-secondBg  py-2 flex items-center">
                                <RiCodeSSlashFill className="pr-1" /> Tailwind CSS
                            </p>
                            <p className="text-secondBg  py-2 flex items-center">
                                <RiCodeSSlashFill className="pr-1" /> Figma
                            </p>
                            <p className="text-secondBg  py-2 flex items-center">
                                <RiCodeSSlashFill className="pr-1" /> Framer Motion
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

export default Asj;
