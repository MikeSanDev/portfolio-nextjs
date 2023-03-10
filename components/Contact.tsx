import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full m-auto bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/light-dark.jpg')" }}
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#ffe590]">
          Contact
        </p>
        <h2 className="py-4 text-slate-50">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="bg-gray-200 col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl "
                  src="/assets/me-gray.png"
                  alt="/"
                />
                <div>
                  <h2 className="py-3">Michael Sanchez</h2>
                  <h3 className="text-[#5e6d96]">Full-Stack Developer</h3>
                  <p className="py-3">
                    I am available for freelance or a full-time position.
                    Contact me and connect!
                  </p>
                </div>
              </div>
              <div>
                <p className="pt-8 text-center">Connect With Me</p>
                <div className="flex items-center justify-evenly py-4">
                  <div className="cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      className="footer-link"
                      href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-4 text-[#5e6d96]">
                        <FaLinkedinIn size={22} />
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
                        <FaGithub size={22} />
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
                        <AiOutlineMail size={22} />
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
                        <BsFillPersonLinesFill size={22} />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="bg-gray-200 col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg bg-gray-200 shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 text-[#5e6d96]">
              <HiOutlineChevronDoubleUp size={30} className="m-auto" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
