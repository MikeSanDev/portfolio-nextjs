import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import Image from 'next/image';
import { useRouter } from 'next/router';


const Chamber = () => {
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
        <Image
          className="absolute inset-0 w-full h-full object-cover z-1"
          src="/assets/projects/chamber_io.gif"
          alt="/"
          layout="fill"
          />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">Chamber.IO</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6"> React JS | Stripe | Netlify </p>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-start">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
<h3 className="ov_text text-text_Color font-normal leading-relaxed">
  I designed and developed an ecommerce website for Chamber, a local dance training organization, 
  to streamline ticket purchases and event management. The goal was to create a modern, 
  intuitive platform that handled payments, scheduling, and ticket tracking seamlessly.<br /><br />

  I integrated the Stripe payment gateway to simplify transactions and improve ticket management 
  for both users and organizers. To enhance usability, I implemented React Bootstrap components 
  for clean session layouts and built a custom cart system allowing users to add and remove items 
  effortlessly.<br /><br />

  Beyond development, I collaborated with the founder and a creative team of 10 Chicago dancers 
  to produce a promotional video featured on the landing page. This launch drove a 50% increase 
  in traffic and ticket sales, positioning Chamber as one of the city&rsquo;s most accessible 
  and visually engaging training platforms.<br /><br/>
</h3>
          <div className="back_project_link">
            <div className="proj_btns">
          <a
            href="https://chamber-io.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-1 mt-4 mr-8 text-white bg-mainColor proj-btn1">
              Website
            </button>
          </a>
          <a
            href="https://github.com/MikeSanDev/Chamber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-1 mt-4 text-white bg-mainColor proj-btn2">
              Code
            </button>
          </a>
          </div>
              <p onClick={handleBackToProjects}  className="underline cursor-pointer text-mainColor py-4 back-project-link">
                Back To Projects
              </p>
          </div>
        </div>
        <div className="bg-gray-200 col-span-4 tech_block sm:col-span-2 md:col-span-1 shadow-md shadow-gray-900 rounded-xl p-4 self-start sticky top-24 h-fit">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-secondBg ">
              Technologies Used
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> React JS
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Stripe API
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Axios
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Netlify
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> HTML/CSS
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Javascript
              </p>
              <p className="text-secondBg  py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Framer Motion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chamber;
