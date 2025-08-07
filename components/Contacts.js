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
import GlareHover from "./effects/GlareHover"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5lrhjkg",
        "template_rvmojc6",
        form.current,
        "Lv0NZ9GUt44rmRG0r"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
          
          // SweetAlert2 popup 
         Swal.fire({
            title: 'Message Sent Successfully!',
            text: 'Thank you for reaching out! I\'ll get back to you as soon as possible.',
            icon: 'success',
            confirmButtonText: 'Great!',
            background: '#5c4c68', // Matches your card background
            color: '#ffe590', // Matches your accent color
            confirmButtonColor: '#8b5a3c', // Matches your main color
            iconColor: '#ffe590',
            customClass: {
              popup: 'custom-popup',
              title: 'custom-title',
              htmlContainer: 'custom-text'
            },
            showClass: {
              popup: 'animate__animated animate__fadeInDown animate__faster'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp animate__faster'
            },
            timer: 4000, // Auto close after 4 seconds
            timerProgressBar: true,
            backdrop: false // This removes the dark backdrop
          });
        },
        (error) => {
          console.log(error.text);
          
          // Error popup
          Swal.fire({
            title: 'Oops!',
            text: 'Something went wrong. Please try again or contact me directly.',
            icon: 'error',
            confirmButtonText: 'Try Again',
            background: '#5c4c68',
            color: '#ffe590',
            confirmButtonColor: '#8b5a3c',
            iconColor: '#ff6b6b'
          });
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full p-2 skills-bg bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/bg2.svg')" }}
    >
      <div className="max-w-[1240px] m-auto px-2 pt-8 pb-0 w-full">
        <p className="text-xl px-2 tracking-widest uppercase text-[#ffe590]">
          Contact
        </p>
        <h2 className="py-2 px-2 text-slate-50">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="bg-[#5c4c68] col-span-3 lg:col-span-2 flex flex-col items-center justify-center w-full h-full shadow-xl shadow-gray-900 rounded-xl p-4">
            <div className=" h-full">
              <div className="flex flex-col items-center">
                
                 <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.7}
                            glareAngle={-30}
                            glareSize={300}
                            transitionDuration={900}
                            playOnce={false}
                            background="transparent"
                            borderRadius="3%"
                            style={{ width: 'auto', height: 'auto' }}
                          ><Image
                  className="rounded-xl contact_img"
                  src="/assets/me-yellow.png"
                  alt="/"
                  width="500"
                  height="200"
                />
                </GlareHover>
                <div>
                  <h2 className="pt-6 text-accentColor flex justify-center contact_text1">Michael Sanchez</h2>
                  <h2 className="text-xl text-secondaryColor flex justify-center contact_text2">Full-Stack Developer</h2>
                  <h3 className="text-accentColor underline flex justify-center contact_text3">
                    Contact me directly
                  </h3>
                  <div className="pt-10 flex justify-center ">
                    <h3 className=" text-accentColor pb-1">
                      Other Links
                    </h3>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="main_link_btns space-x-4 flex pt-1 items-center">
                    <div className="cursor-pointer hover:scale-110 ease-in duration-200">
                      <a
                        className="footer-link"
                        href="https://www.linkedin.com/in/michael-sanchez-825882182/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="rounded-full shadow-lg shadow-gray-700 p-3 text-mainColor"
                          style={{ backgroundColor: "#e7e6de" }}
                        >
                          <FaLinkedinIn size={25} />
                          <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                            Linkedin
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="cursor-pointer hover:scale-110 ease-in duration-200">
                      <a
                        className="footer-link"
                        href="https://github.com/MikeSanDev"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="rounded-full shadow-lg shadow-gray-700 p-3 text-mainColor"
                          style={{ backgroundColor: "#e7e6de" }}
                        >
                          <FaGithub size={25} />
                          <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                            Github
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="cursor-pointer hover:scale-110 ease-in duration-200">
                      <a
                          className="footer-link"
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=mjs070594@gmail.com&su=Portfolio%20Contact&body=Hi%20Michael,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0D%0A%0D%0A"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        <div
                          className="rounded-full shadow-lg shadow-gray-700 p-3 text-mainColor"
                          style={{ backgroundColor: "#e7e6de" }}
                        >
                          <AiOutlineMail size={25} />
                          <span className="hidden absolute top-0 left-0 bg-white py-2 px-4 text-gray-900 rounded-lg ">
                            Email
                          </span>
                        </div>
                      </a>
                    </div>
                    <div className="cursor-pointer hover:scale-110 ease-in duration-200">
                      <a
                        className="footer-link"
                        href="/assets/michael_sanchez_resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          className="rounded-full shadow-lg shadow-gray-700 p-3 text-mainColor"
                          style={{ backgroundColor: "#e7e6de" }}
                        >
                          <BsFillPersonLinesFill size={25} />
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
          </div>
          {/* right */}
          <div className="bg-[#5c4c68] col-span-3 w-full h-auto shadow-xl shadow-gray-900 rounded-xl lg:p-4">
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
                  className="w-full p-4 text-gray-100 mt-8 bg-gradient-to-r 
        from-mainColor to-[#5c4c68] shadow-xl shadow-gray-800 rounded-xl uppercase cursor-pointer hover:scale-105 transition-transform duration-200"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-900 p-4 bg-[#5c4c68] cursor-pointer hover:scale-110 ease-in duration-300 text-accentColor"
              title="Back to the top">
              <HiOutlineChevronDoubleUp size={30} className="m-auto" />
            </div>
          </Link>
        </div>
      </div>

      {/* Add this CSS to your global styles or in a <style> tag */}
      <style jsx global>{`
        .custom-popup {
          border-radius: 15px !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
        }
        .custom-title {
          font-size: 1.5rem !important;
          font-weight: bold !important;
        }
        .custom-text {
          font-size: 1rem !important;
        }
        .swal2-timer-progress-bar {
          background: #ffe590 !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;