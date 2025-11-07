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
  <p className="ov_text text-text_Color font-normal leading-relaxed">
    <strong>TrackSAGE</strong> is an AI-powered automation system I designed to help DJs organize, clean, 
    and analyze large music libraries. It’s built as a <em>local-first</em> desktop tool for full control over
    your music files — optimized for workflow speed, tagging accuracy, and creative preparation in Serato DJ.
    <br />
    <br />
    TrackSAGE now includes four intelligent modules: Tag Inspection, Duplicate Detection, Smart Renaming, and 
    Audio Transcription. Each module is built with structured logging, safe file handling, and optional AI integration 
    powered by OpenAI’s GPT-4o-mini and Faster-Whisper.
    <br />
    <br />
    This project began as a simple file renamer and has evolved into a complete DJ library maintenance suite. 
    Every run generates detailed JSON + TXT logs for transparency and review, while AI caching ensures repeat runs 
    are fast, efficient, and low-cost.
  </p>

  <br />
  <h3 className="text-accentColor text-lg font-semibold mt-4">1. Inspect Tags</h3>
  <p className="ov_text text-text_Color font-normal leading-relaxed">
    Scans <code>.mp3</code> and <code>.wav</code> files using 
    <a href="https://mutagen.readthedocs.io/" target="_blank" rel="noopener noreferrer"> Mutagen</a> 
    to extract and display metadata such as <code>artist</code>, <code>title</code>, and <code>album</code>.
    Useful for verifying and cleaning inconsistent ID3 tags before renaming.
  </p>
  <p className="text-mainColor font-semibold mt-2">DEMO:</p>
  {/* insert GIF here */}

  <br />
  <h3 className="text-accentColor text-lg font-semibold mt-4">2. Duplicate Detector</h3>
  <p className="ov_text text-text_Color font-normal leading-relaxed">
    Recursively scans folders for duplicate audio files using <strong>MD5 hashing</strong> and smart filename heuristics.
    Prefers clean, original filenames (e.g., <code>Track.mp3</code> over <code>Track - Copy (1).mp3</code>) and moves duplicates
    into a timestamped <code>trash/</code> directory for safe review. Each run logs results to both JSON and TXT for transparency.
  </p>
  <p className="text-mainColor font-semibold mt-2">DEMO:</p>
  {/* insert GIF here */}

  <br />
  <h3 className="text-accentColor text-lg font-semibold mt-4">3. Smart Renamer</h3>
  <p className="ov_text text-text_Color font-normal leading-relaxed">
    Automatically renames tracks using ID3 metadata into the clean format <code>Artist - Title</code>.
    Includes built-in sanitization for illegal characters and ensures filename uniqueness.
    If tags are missing, TrackSAGE uses <strong>GPT-4o-mini</strong> to infer artist/title context intelligently and stores
    those suggestions in a local cache for reuse.
    A <em>Dry Run mode</em> allows previewing results before applying changes.
  </p>
  <p className="text-mainColor font-semibold mt-2">DEMO:</p>
  {/* insert GIF here */}

  <br />
  <h3 className="text-accentColor text-lg font-semibold mt-4">4. Audio Transcription</h3>
  <p className="ov_text text-text_Color font-normal leading-relaxed">
    Converts speech from <code>.mp3</code> and <code>.wav</code> files into text using 
    <a href="https://github.com/guillaumekln/faster-whisper" target="_blank" rel="noopener noreferrer"> Faster-Whisper</a>.  
    Ideal for lectures, DJ sets, or creative voice notes.  
    Generates transcripts as <code>logs/transcribed_&lt;timestamp&gt;.txt</code> and optionally summarizes them 
    with OpenAI for concise review notes. Summaries are saved separately as <code>logs/ai_summary_&lt;timestamp&gt;.txt</code>.
  </p>
  <p className="text-mainColor font-semibold mt-2">DEMO:</p>
  {/* insert GIF here */}

  <div className="back_project_link flex flex-row">
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