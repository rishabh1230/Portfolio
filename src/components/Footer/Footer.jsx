import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {

  // Smooth Scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "work" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-10 px-[7vw] md:px-[7vw] lg:px-[12vw]">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-purple-700/10 blur-3xl rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-72 h-72 bg-fuchsia-700/10 blur-3xl rounded-full"></div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent"></div>

      {/* Main Container */}
      <div
        className="
          relative z-10
          rounded-3xl
          border border-purple-500/20
          bg-[#111111]/80
          backdrop-blur-xl
          px-8 py-12
          shadow-[0_0_45px_rgba(130,69,236,0.12)]
        "
      >
        {/* Logo */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Rishabh
            <span className="text-[#8245ec]">.</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-7">
            Backend Engineer focused on scalable systems,
            distributed architectures, APIs, caching,
            and performance optimization.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="
                px-5 py-2 rounded-full
                border border-purple-500/20
                bg-[#181818]
                text-gray-300
                hover:text-white
                hover:border-purple-500/40
                hover:bg-[#1f1f1f]
                hover:shadow-[0_0_20px_rgba(130,69,236,0.2)]
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-10">

          {/* GitHub */}
          <a
            href="https://github.com/rishabh1230"
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
              hover:shadow-[0_0_25px_rgba(130,69,236,0.28)]
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <FaGithub
              size={22}
              className="group-hover:scale-110 transition duration-300"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rishabhpandey30/"
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
              hover:shadow-[0_0_25px_rgba(130,69,236,0.28)]
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <FaLinkedin
              size={22}
              className="group-hover:scale-110 transition duration-300"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/rishabhsarchive/"
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
              hover:shadow-[0_0_25px_rgba(130,69,236,0.28)]
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <FaInstagram
              size={22}
              className="group-hover:scale-110 transition duration-300"
            />
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-purple-500/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Rishabh Pandey. All rights reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-500 text-sm">
            Built with
            <FaHeart className="text-purple-500 animate-pulse" />
            using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;