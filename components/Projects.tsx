import React from "react";
import kinetic from "../public/assets/projects/kinetic.png";
import chamber from "../public/assets/projects/chamber_proj.png";
import whiteElephant from "../public/assets/projects/elephant.png";
import spotify from "../public/assets/projects/spotify.png";
import acc_logo from "../public/assets/acc_bg3.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" 
    className="w-full  p-2 skills-bg bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/bg1.svg')" }}>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ffe590]">
          Projects & Experience
        </p>
        <h2 className="py-4 text-slate-50 ">What I&rsquo;ve Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Kinetic Footwear"
            backgroundImg={kinetic}
            language="React JS"
            projectUrl="/kinetic"
          />
          <ProjectItem
            title="Chamber.IO"
            backgroundImg={chamber}
            language="React JS"
            projectUrl="/chamber"
          />
          <ProjectItem
            title="White Elephant"
            backgroundImg={whiteElephant}
            language="Java"
            projectUrl="/whiteElephant"
          />
          <ProjectItem
            title="Spotify Clone"
            backgroundImg={spotify}
            language="React JS"
            projectUrl="/spotify"
          />
        </div>
        <div className=" py-8 work_exp ">
        <h2 className="py-4 text-slate-50 ">Work Experience</h2>
        <div className="work_item">
        <ProjectItem
            title="Accenture"
            backgroundImg={acc_logo}
            language="Packaged App Developer"
            projectUrl="/accenture"
          />
          </div>
          </div> 
      </div>
    </div>
  );
};

export default Projects;
