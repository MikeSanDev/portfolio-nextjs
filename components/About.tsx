import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const imageVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.set(imageVariants.hidden);
    }
  }, [controls, inView, imageVariants.hidden]); // Include imageVariants.hidden in the dependency array

  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/about4.png')" }}
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest text-[#ffe590] uppercase">
            About
          </p>
          <h2 className="py-4 text-slate-50">Who I Am </h2>
          <p className="py-2 text-secondaryColor">
            I am a full stack developer with a passion for creating fully
            functional websites and applications and a background in Dentistry.
          </p>
          <p className="py-2 text-secondaryColor">
            I pursued a career in software development to tap into my creativity
            and continuously grow my skills. To further my knowledge, I
            completed a coding bootcamp at Coding Dojo and have since worked on
            a number of full-stack projects.
          </p>
          <p className="py-2 text-secondaryColor">
            In my free time, I enjoy staying active through various physical
            activities such as lifting weights, running, and dancing. I am a Hip
            Hop freestyle dancer and regularly train with my crew, competing in
            dance battles across Chicago.
          </p>
          <Link
            href="/#projects"
            className="py-2 text-mainColor underline cursor-pointer"
          >
            Check out some of my latest projects.
          </Link>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300"
        >
          <Image
            className="rounded-xl about-img"
            src="/assets/about.png"
            alt="Breakdance Picture"
            title="Me"
            width="250"
            height="300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;