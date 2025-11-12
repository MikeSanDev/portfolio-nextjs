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
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 items-start">
        <div className="col-span-4 ">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
<h3 className="ov_text text-text_Color font-normal leading-relaxed">
  I started my journey at Accenture through their Apprenticeship Program, where I graduated in the 
  first cohort to become a Packaged App Developer.
  As a Packaged App Developer, I work on enhancing and maintaining the IBM Maximo Application Suite (MAS) 
  for an enterprise client migrating from a legacy asset management system to a cloud-based platform on Azure and OpenShift.<br /><br />

  Day-to-day, I handle developer tasks in Azure DevOps (ADOS) — building, testing, and coordinating 
  deployments across multiple environments. My work includes configuring Maximo domains, escalations, 
  and UI components to support critical workflows for Operations & Maintenance and Capital Projects teams. 
  I also collaborate closely with functional leads to align system logic with automation scripts and SAP integrations, 
  ensuring consistent and reliable performance.<br /><br />

  I contribute Python and Jython automation scripts that reduce repetitive manual steps and improve 
  environment consistency, and I often serve as the bridge between on-shore and off-shore teams to 
  keep delivery smooth and issues unblocked. Outside of development, I lead social and engagement 
  initiatives for our client team to foster collaboration and morale across the project lifecycle.

  <br /><br />
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
        <div className="bg-gray-200 col-span-4 sm:col-span-2 tech_block md:col-span-1 shadow-md shadow-gray-900 rounded-xl p-4 self-start sticky top-24 h-fit">
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
                <RiCodeSSlashFill className="pr-1" /> Azure DevOps
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
