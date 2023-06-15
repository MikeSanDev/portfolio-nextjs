import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when the component is 20% visible
  });
  const skills = [
    { name: "HTML", imageSrc: "/assets/skills/html.png" },
    { name: "CSS", imageSrc: "/assets/skills/css.png" },
    { name: "Javascript", imageSrc: "/assets/skills/javascript.png" },
    { name: "Node JS", imageSrc: "/assets/skills/node.png" },
    { name: "React JS", imageSrc: "/assets/skills/react.png" },
    { name: "Next JS", imageSrc: "/assets/skills/nextjs.png" },
    { name: "Mongo DB", imageSrc: "/assets/skills/mongo.png" },
    { name: "Github", imageSrc: "/assets/skills/github.png" },
    { name: "Python", imageSrc: "/assets/skills/python.png" },
    { name: "Java", imageSrc: "/assets/skills/java.png" },
    { name: "Tailwind", imageSrc: "/assets/skills/tailwind.png" },
    { name: "Bootstrap", imageSrc: "/assets/skills/bootstrap.png" },
  ];

  return (
    <div id="skills" className="w-full lg:h-screen p-2 skills-bg">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ffe590]">
          Skills
        </p>
        <h2 className="py-4 text-slate-50">Tools I&rsquo;ve Recently Used</h2>
        <AnimatePresence>
          <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -42 }}
                animate={{ opacity: 1, x: 0 }}
                // exit={{ opacity: 0, x: 100 }}
                // transition={{ duration: 1.5, delay: index * 0.6 }}
                className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              >
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image
                      src={skill.imageSrc}
                      width="64"
                      height="64"
                      alt={skill.name}
                    />
                  </div>
                  <div className="text-gray-200 flex flex-col items-center justify-center">
                    <h3>{skill.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;
