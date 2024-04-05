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
          <div className="bg-[#5c4c68] col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-700 rounded-xl p-4">
            <div className="lg:p-3 h-full">
              <div>
                <Image
                  className="rounded-xl "
                  src="/assets/me-yellow.png"
                  alt="/"
                  width="500"
                  height="200"
                />
                <div>
                  <h2 className="pt-2 text-accentColor">Michael Sanchez</h2>
                  <h3 className="text-secondaryColor">Full-Stack Developer</h3>
                  <p className="py-2 text-accentColor underline">
                    Contact me directly!
                  </p>
                </div>
              </div>
              <div>

                <div className="main_link_btns space-x-2 flex pt-1 items-center">
              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-700 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <FaLinkedinIn size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Linkedin
                    </span>
                  </div>
                </a>
              </div>
              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="https://github.com/MikeSanDev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-700 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <FaGithub size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Github
                    </span>
                  </div>
                </a>
              </div>

              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="mailto:mike.san.dev16@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-700 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <AiOutlineMail size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                      Email
                    </span>
                  </div>
                </a>
              </div>

              <div
                className="cursor-pointer hover:scale-110 ease-in duration-200"
              >
                <a
                  className="footer-link"
                  href="/assets/michael_sanchez_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="rounded-full shadow-lg shadow-gray-700 p-2 text-mainColor"
                    style={{ backgroundColor: "#e7e6de" }}
                  >
                    <BsFillPersonLinesFill size={20} />
                    <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
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
          <div className="bg-[#5c4c68] col-span-3 w-full h-auto shadow-xl shadow-gray-700 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-1 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-accentColor text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-accentColor text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="user_email"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-accentColor text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-accentColor text-sm py-2">Message</label>
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
        from-secondaryColor to-mainColor shadow-xl shadow-gray-600 rounded-xl uppercase cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg  shadow-gray-500 p-4 bg-[#5c4c68] cursor-pointer hover:scale-110 ease-in duration-300 text-accentColor">
              <HiOutlineChevronDoubleUp size={30} className="m-auto" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
