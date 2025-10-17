import React from "react";
import { RiCodeSSlashFill } from "react-icons/ri";
import Image from "next/image";
import { useRouter } from "next/router";

const TrackSage = () => {
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
          src="/assets/projects/sage_duplicate.gif"
          alt="SAGE Music Agent Gif"
          layout="fill"
        />
        <div className="absolute bottom-0 left-0 max-w-[1240px] w-full text-white z-10 p-2 project-header-title">
          <h2 className="proj_title mb-2 py-2 pl-6">TrackSAGE DJ Music Tool</h2>
          <p className="proj_subtext mb-2 pb-3 pl-6">
            Python | FastAPI | OpenAI API | Pydantic | CLI
          </p>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <h2 className="ov_title text-accentColor mb-2">Overview</h2>
          <h3 className="ov_text text-text_Color">
              TrackSAGE DJ Music Tool is an AI-powered automation system I designed to help DJs manage and clean large music libraries. 
              As a DJ, I often download massive playlists from SoundCloud and other sources—sorting, tagging, and renaming hundreds of MP3s manually can take hours. 
              TrackSAGE streamlines this process, automatically detecting duplicates, renaming files, and repairing missing metadata for faster, more reliable music prep in Serato DJ.
              <br />
              <br />
              The tool scans folders recursively, identifying duplicate tracks using MD5 hashing and filename heuristics before safely moving them to a timestamped trash folder. 
              It also inspects existing ID3 tags, then renames tracks into a standardized “Artist – Title” format for clean organization across libraries. 
              Every run is fully logged in both JSON and TXT formats for transparency and easy debugging.
              <br />
              <br />
              TrackSAGE integrates AI-assisted renaming powered by OpenAI’s GPT-4o-mini model, which intelligently infers artist and title information for untagged files. 
              A built-in caching system stores AI suggestions locally, reducing costs and speeding up repeated runs. 
              The newest update also introduces a tag inspection feature for verifying metadata and a placeholder for future audio transcription capabilities—laying the groundwork for complete creative automation in DJ workflows.
            </h3>

          <div className="back_project_link">
            <a
              href="https://github.com/MikeSanDev/tracksage_dj_music_tool"
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

export default TrackSage;