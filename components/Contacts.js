import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Image from "next/image";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g3dxtcl",
        "template_rvmojc6",
        form.current,
        "Lv0NZ9GUt44rmRG0r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent.",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full  p-2 skills-bg bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/bg2.svg')" }}>
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
                <Image
                  className="rounded-xl "
                  src="/assets/me-gray.png"
                  alt="/"
                  width="500"
                  height="400"
                />
                <div>
                  <h2 className="py-3">Michael Sanchez</h2>
                  <h3 className="text-[#5e6d96]">Full-Stack Developer</h3>
                  <p className="py-3">
                    I am available for freelance or a full-time position.
                    Contact me to connect!
                  </p>
                </div>
              </div>
              <div>
                <p className="pt-8 text-[#5e6d96] text-center">
                  Connect With Me
                </p>
                <div className="flex items-center justify-evenly py-4">
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
          {/* right */}
          <div className="bg-gray-200 col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-1 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user_email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                    name="message"
                    required
                  />
                </div>
                <input
                  type="submit"
                  placeholder="Send Message"
                  value="Send Message"
                  className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r 
        from-[#d5bcb7] to-[#5e6d96] shadow-xl shadow-gray-400 rounded-xl uppercase cursor-pointer"
                />
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
