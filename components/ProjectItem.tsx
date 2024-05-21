import React from "react";
import Image from "next/image";
import Link from "next/link";

// default title to empty string - defined types for each prop
const ProjectItem = ({
  title = "",
  backgroundImg,
  language,
  projectUrl,
}: {
  title?: any;
  backgroundImg: any;
  language: any;
  projectUrl: any;
}) => {
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl p-4 group hover:bg-gradient-to-r 
        from-secondaryColor to-accentColor"
    >
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
        width="1000"
        height="400"
      />
      <div className="hidden group-hover:block absolute ">
        <h3 className="text-2xl text-secondBg tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-secondBg text-center">{language}</p>
        <Link href={projectUrl}>
          <div className="text-center py-3 rounded-lg bg-white text-mainColor font-bold text-lg cursor-pointer flex items-center justify-center h-full w-full">
            More Info
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
