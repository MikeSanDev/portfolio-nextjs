import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 skills-bg">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#ffe590]">
          Skills
        </p>
        <h2 className="py-4 text-slate-50">Tools I've Recently Used</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Node JS</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Mongo DB</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github.png"
                  width="70"
                  height="70"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/python.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/java.png"
                  width="70"
                  height="70"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Java</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="bg-[#7782a1] p-6 drop-shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/bootstrap.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="text-gray-200 flex flex-col items-center justify-center">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
