import React from "react";
import kinetic from "../public/assets/projects/kinetic.png";
import chamber from "../public/assets/projects/chamber.png";
import whiteElephant from "../public/assets/projects/whiteele.png";
import spotify from "../public/assets/projects/spotify.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ffe590]">
          Projects
        </p>
        <h2 className="py-4 text-slate-50 ">What I&rsquo;ve Built</h2>
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
      </div>
    </div>
  );
};

export default Projects;
