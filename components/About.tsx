import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#ffe590] uppercase">
            About
          </p>
          <h2 className="py-4 text-slate-50">Who I Am </h2>
          <p className="py-2 text-gray-600">
            I am a full stack developer with a passion for creating fully
            functional websites and applications and a background in Dentistry.
          </p>
          <p className="py-2 text-gray-600">
            I pursued a career in software development to tap into my creativity
            and continuously grow my skills. To further my knowledge, I
            completed a coding bootcamp at Coding Dojo and have since worked on
            a number of full-stack projects.
          </p>
          <p className="py-2 text-gray-600">
            In my free time, I enjoy staying active through various physical
            activities such as lifting weights, running, and dancing. I am a Hip
            Hop freestyle dancer and regularly train with my crew, competing in
            dance battles across Chicago.
          </p>
          <Link
            href="/#projects"
            className="py-2 text-[#5e6d96] underline cursor-pointer"
          >
            Check out some of my latest projects.
          </Link>
        </div>
        <div className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl about-img"
            src="/assets/about.png"
            alt="Breakdance Picture"
            title="Me"
            width="250"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
