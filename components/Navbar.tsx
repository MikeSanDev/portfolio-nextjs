import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#CFCDBD");
  const [linkColor, setLinkColor] = useState("#D3AD63");
  const router = useRouter();

  // changes nav button color on individual project pages
  useEffect(() => {
    if (
      router.asPath === "/kinetic" ||
      router.asPath === "/chamber" ||
      router.asPath === "/whiteElephant" ||
      router.asPath === "/spotify"
    ) {
      setNavBg("transparent");
      setLinkColor("#CFCDBD");
    } else {
      setNavBg("transparent");
      setLinkColor("#D3AD63");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-50px shadow-xl z-[100] pb-8"
          : "fixed w-full h-20px z-[100]"
      }
    >
      <motion.div
        transition={{
          duration: 1.5,
        }}
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        className="flex justify-between items-center w-full h-full px-6 2xl:px-14"
      >
        <Link href="/#home">
          <Image
            className="pl-2"
            src="/assets/yellow_logo.png"
            alt="/"
            width="80"
            height="50"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex nav-items pr-4 "
          >
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase">Projects</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase">Contact</li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden cursor-pointer text-white"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </motion.div>

      {/* popup nav */}
      {/* Nav open/close logic */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top 0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#e7e7e7] p-10 ease-in duration-500"
              : "fixed left-[-120%] top 0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/blue_logo.png"
                alt="/"
                width="87"
                height="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-[#5e6d96]">
                Let&rsquo;s create something that will change the world.
              </p>
            </div>
          </div>
          <div className="py-3 flex flex-col">
            <ul className="uppercase">
              <Link href="/#home">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm nav-items2"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm nav-items2"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm nav-items2"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm nav-items2"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm nav-items2 "
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="uppercase tracking-widest text-[#5e6d96]">
                Let&rsquo;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="footer-link"
                    href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]">
                      <FaLinkedinIn size={22} title="LinkedIn" />
                      <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip2">
                        Linkedin
                      </span>
                    </div>
                  </a>
                </div>
                <div className="cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="footer-link"
                    href="https://github.com/MikeSanDev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]">
                      <FaGithub size={22} title="Github" />
                      <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip2">
                        Github
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="footer-link"
                    href="mailto:mike.san.dev16@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]">
                      <AiOutlineMail size={22} title="Email" />
                      <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip2">
                        Email
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="footer-link"
                    href="/assets/michael_sanchez_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]">
                      <BsFillPersonLinesFill size={22} title="Resume" />
                      <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg tooltip2">
                        Resume
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
