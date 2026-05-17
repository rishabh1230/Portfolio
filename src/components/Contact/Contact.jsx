import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5n6eyej",
        "template_pxi6krk",
        form.current,
        "UObPi0zpCNq-nrFdS"
      )
      .then(
        () => {
          form.current.reset();

          toast.success("Message sent successfully 🚀", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);

          toast.error("Failed to send message ❌", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="
        relative overflow-hidden
        py-28
        px-[7vw] md:px-[7vw] lg:px-[12vw]
        font-sans
      "
    >
      {/* Toast */}
      <ToastContainer />

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[30rem] h-[30rem] bg-purple-700/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-fuchsia-700/10 blur-[120px] rounded-full"></div>

      {/* Animated Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(rgba(130,69,236,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(130,69,236,0.3)_1px,transparent_1px)]
          bg-[size:45px_45px]
        "
      ></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wide">
          LET'S CONNECT
        </h2>

        <div className="w-36 h-1 bg-gradient-to-r from-[#8245ec] to-fuchsia-500 mx-auto mt-5 rounded-full"></div>

        <p className="text-gray-400 mt-8 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
          Whether it’s a backend engineering opportunity, freelance project,
          open-source collaboration, or just a tech conversation —
          feel free to reach out and connect with me.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden rounded-[2rem]
            border border-purple-500/20
            bg-[#111111]/80
            backdrop-blur-xl
            p-8 md:p-10
            shadow-[0_0_50px_rgba(130,69,236,0.12)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent"></div>

          <div className="relative z-10">

            {/* Heading */}
            <div>
              <p className="text-purple-400 font-medium tracking-wide">
                CONTACT INFORMATION
              </p>

              <h3 className="text-4xl font-bold text-white mt-3 leading-tight">
                Let’s Build
                <span className="text-[#8245ec]"> Something Great.</span>
              </h3>

              <p className="text-gray-400 leading-8 mt-6">
                I’m always open to discussing backend engineering,
                scalable systems, APIs, distributed architectures,
                internships, collaborations, and exciting opportunities.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="mt-10 space-y-5">

              {/* Email */}
              <div
                className="
                  flex items-center gap-5
                  rounded-2xl
                  border border-purple-500/20
                  bg-[#181818]
                  p-5
                  hover:border-purple-500/40
                  hover:shadow-[0_0_25px_rgba(130,69,236,0.15)]
                  transition-all duration-300
                "
              >
                <div
                  className="
                    flex items-center justify-center
                    w-14 h-14 rounded-2xl
                    bg-[#24163f]
                    text-purple-400
                  "
                >
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <p className="text-white text-lg font-medium">
                    rishabhkis0710@gmail.com
                  </p>
                </div>
              </div>

              {/* Availability */}
              <div
                className="
                  flex items-center gap-5
                  rounded-2xl
                  border border-purple-500/20
                  bg-[#181818]
                  p-5
                  hover:border-purple-500/40
                  hover:shadow-[0_0_25px_rgba(130,69,236,0.15)]
                  transition-all duration-300
                "
              >
                <div
                  className="
                    flex items-center justify-center
                    w-14 h-14 rounded-2xl
                    bg-[#24163f]
                  "
                >
                  <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse"></div>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Availability
                  </p>

                  <p className="text-white text-lg font-medium">
                    Open for Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-12">

              <p className="text-gray-400 mb-5">
                Find me on
              </p>

              <div className="flex gap-5">

                {[
                  {
                    icon: <FaGithub size={22} />,
                    link: "https://github.com/rishabh1230",
                  },
                  {
                    icon: <FaLinkedin size={22} />,
                    link: "https://www.linkedin.com/in/rishabhpandey30/",
                  },
                  {
                    icon: <FaInstagram size={22} />,
                    link: "https://www.instagram.com/rishabhsarchive/",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex items-center justify-center
                      w-14 h-14 rounded-full
                      border border-purple-500/20
                      bg-[#181818]
                      text-gray-300
                      hover:text-white
                      hover:border-purple-500/40
                      hover:bg-[#1f1f1f]
                      hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]
                      transition-all duration-300
                      hover:-translate-y-1
                    "
                  >
                    <span className="group-hover:scale-110 transition duration-300">
                      {item.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            relative overflow-hidden rounded-[2rem]
            border border-purple-500/20
            bg-[#111111]/80
            backdrop-blur-xl
            p-8 md:p-10
            shadow-[0_0_50px_rgba(130,69,236,0.12)]
          "
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent"></div>

          <div className="relative z-10">

            {/* Heading */}
            <div className="mb-10">
              <p className="text-purple-400 font-medium tracking-wide">
                SEND MESSAGE
              </p>

              <h3 className="text-4xl font-bold text-white mt-3">
                Get In Touch
              </h3>
            </div>

            {/* Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-5"
            >

              {/* Email */}
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="
                  w-full rounded-2xl
                  border border-purple-500/20
                  bg-[#181818]
                  px-5 py-4
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-purple-500
                  focus:shadow-[0_0_25px_rgba(130,69,236,0.2)]
                  transition-all duration-300
                "
              />

              {/* Name */}
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="
                  w-full rounded-2xl
                  border border-purple-500/20
                  bg-[#181818]
                  px-5 py-4
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-purple-500
                  focus:shadow-[0_0_25px_rgba(130,69,236,0.2)]
                  transition-all duration-300
                "
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="
                  w-full rounded-2xl
                  border border-purple-500/20
                  bg-[#181818]
                  px-5 py-4
                  text-white
                  placeholder:text-gray-500
                  focus:outline-none
                  focus:border-purple-500
                  focus:shadow-[0_0_25px_rgba(130,69,236,0.2)]
                  transition-all duration-300
                "
              />

              {/* Message */}
              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
                className="
                  w-full rounded-2xl
                  border border-purple-500/20
                  bg-[#181818]
                  px-5 py-4
                  text-white
                  placeholder:text-gray-500
                  resize-none
                  focus:outline-none
                  focus:border-purple-500
                  focus:shadow-[0_0_25px_rgba(130,69,236,0.2)]
                  transition-all duration-300
                "
              />

              {/* Button */}
              <button
                type="submit"
                className="
                  group relative overflow-hidden
                  rounded-2xl
                  bg-gradient-to-r from-[#8245ec] to-purple-500
                  px-8 py-4
                  text-lg font-semibold text-white
                  transition-all duration-300
                  hover:scale-[1.02]
                  hover:shadow-[0_0_35px_rgba(130,69,236,0.35)]
                "
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send Message
                  <FaPaperPlane />
                </span>

                {/* Shine */}
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;