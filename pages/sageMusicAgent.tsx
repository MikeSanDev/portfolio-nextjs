import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/router";

const SageMusicAgent = () => {
  const router = useRouter();

  const handleBackToProjects = () => {
    router.push("/").then(() => {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
  };

  return (
    <div className="w-full no-scroll-x">
      <div className="w-screen h-[30vh] lg:h-[60vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[60vh] bg-black/40 z-10" />
        <Image
          className="absolute z-1 inset-0 w-full h-full object-cover"
          src="/assets/projects/sage.gif"
          alt="SAGE Music Agent Gif"
          layout="fill"
        />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">SAGE 2.5 Music File Management Agent</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6">
            Python | FastAPI | OpenAI API | Pydantic | CLI
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
          <h3 className="ov_text text-text_Color">
            SAGE (System for Automation, Generation, and Execution) is an AI agent that I have been improving over time. 
            This particular version focuses on cleaning and organizing large music libraries. 
            As a DJ, I often download entire playlists from SoundCloud and other sources. Sorting and renaming hundreds of MP3 files manually 
            can take hours, so I built this tool to automate the entire process and make music prep faster and more reliable for use in the Serato DJ application.
            <br />
            <br />
            SAGE 2.5 scans folders for duplicate MP3 files using MD5 hashing and filename heuristics, then automatically renames tracks 
            based on their ID3 tags into a clean &quot;Artist &ndash; Title&quot; format. It processed over 200+ songs in under 10 seconds, moving duplicates safely 
            to a timestamped trash directory for review. Every operation is logged in both JSON and TXT files for transparency and easy debugging.
            <br />
            <br />
            The system includes AI-assisted tagging and smart renaming using the OpenAI API, which suggests improved file names and metadata corrections. 
            This version of SAGE focuses on practical automation, safety, and applying AI to real creative workflows.
          </h3>

          <div className="back_project_link">
            <a
              href="https://github.com/MikeSanDev/sage2.5_music_agent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 mr-4 py-1 mt-4 text-white bg-mainColor proj-btn">
                Code
              </button>
            </a>

            <p
              onClick={handleBackToProjects}
              className="underline cursor-pointer text-mainColor py-4 back-project-link"
            >
              Back To Projects
            </p>
          </div>
        </div>

        <div className="bg-gray-200 col-span-4 sm:col-span-2 md:col-span-1 tech_block shadow-md shadow-gray-900 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 text-secondBg">
              Technologies Used
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Python
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> FastAPI
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Pydantic
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Mutagen
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> OpenAI API
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> JSON / CLI
              </p>
              <p className="text-secondBg py-2 flex items-center">
                <RiCodeSSlashFill className="pr-1" /> Git/GitHub
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SageMusicAgent;