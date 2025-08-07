import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedContent from "./effects/AnimatedContent";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg1.svg')" }}
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="about_text col-span-2">
          <p className="text-xl tracking-widest text-[#ffe590] uppercase">
            About
          </p>
          <h2 className="py-2 text-slate-50">Who I Am</h2>
          <p className="py-2 text-secondaryColor">
            Welcome! My name is Michael, and I am a versatile full-stack
            developer based in Chicago, IL. I am driven by a passion for
            crafting dynamic websites and applications. My journey began in
            dentistry, as a Dental Hygienist, but my innate creativity and thirst
            for skill improvement led me to transition into the dynamic realm of
            software development.
          </p>
          <p className="py-2 text-secondaryColor">
            To further my knowledge, I completed a coding bootcamp at Coding
            Dojo and have since worked on a number of full-stack projects.
            Recently, I embarked on an exhilarating journey at Accenture,
            embracing new challenges daily and expanding my skills in a
            professional setting.
          </p>
          <p className="py-2 text-secondaryColor">
            Beyond coding, I find joy in staying active and pursuing my passion
            for Popping and Hip Hop freestyle dance. Alongside my crew, I
            immerse myself in the vibrant, growing dance culture of Chicago,
            competing in exhilarating battles and continuously pushing the
            boundaries of my craft.
          </p>
          <Link
            href="/#projects"
            className="py-2 text-mainColor underline cursor-pointer"
          >
            Check out some of my latest projects I have been working on.
          </Link>
        </div>

        <div className="w-full h-auto m-auto rounded-xl ml-10 flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={true}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <Image
              src="/assets/about.png"
              alt="Bboy"
              title="Me"
              width={250}
              height={300}
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default About;
