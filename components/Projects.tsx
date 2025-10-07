import React from "react";
import kinetic from "../public/assets/projects/kinetic.png";
import chamber from "../public/assets/projects/chamber_proj.png";
import sage from "../public/assets/projects/sage_logo_resized.png";
import asj from "../public/assets/projects/asj.png";
import acc_logo from "../public/assets/acc_bg3.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects"
      className="w-full  p-2 skills-bg bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg1.svg')" }}>
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl px-2 tracking-widest uppercase text-[#ffe590]">
          Projects & Experience
        </p>
        <h2 className="py-2 px-2 text-slate-50 ">What I&rsquo;ve Built </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sage Music Agent"
            backgroundImg={sage}
            language="Python"
            projectUrl="/sageMusicAgent"
          />
          <ProjectItem
            title="Kinetic Footwear"
            backgroundImg={kinetic}
            language="React JS"
            projectUrl="/kinetic"
          />
            <ProjectItem
              title="UI/UX Designer Portfolio"
              backgroundImg={asj}
              language="Next.JS"
              projectUrl="/asj"
            />
          <ProjectItem
            title="Chamber.IO"
            backgroundImg={chamber}
            language="React JS"
            projectUrl="/chamber"
          />
        </div>
        <div className=" py-8 work_exp ">
          <h2 className="p-2 text-slate-50 ">Work Experience</h2>
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
