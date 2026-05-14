import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["about", "skills", "work", "experience", "education"];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4">

      {/* Main Navbar */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`
          w-full max-w-7xl
          transition-all duration-500
          ${
            isScrolled
              ? "bg-[#0f0f0f]/80 border border-purple-500/20 shadow-[0_0_30px_rgba(130,69,236,0.15)] backdrop-blur-xl"
              : "bg-transparent"
          }
          rounded-2xl px-6 md:px-8
        `}
      >
        <div
          className={`
            flex items-center justify-between
            transition-all duration-300
            ${isScrolled ? "py-4" : "py-5"}
          `}
        >

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer"
          >
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Rishabh
              <span className="text-[#8245ec]">.</span>
            </h1>

            {/* Glow */}
            <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 hover:opacity-100 transition duration-500"></div>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-2">

            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`
                    relative px-5 py-2 rounded-full
                    text-sm font-medium
                    transition-all duration-300
                    ${
                      activeSection === item.id
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }
                  `}
                >
                  {/* Active Pill */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }}
                      className="
                        absolute inset-0
                        rounded-full
                        bg-[#8245ec]
                        shadow-[0_0_20px_rgba(130,69,236,0.5)]
                      "
                    />
                  )}

                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="hidden md:flex items-center gap-4">

            <motion.a
              whileHover={{ scale: 1.15, rotate: 5 }}
              href="https://github.com/rishabh1230"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                w-11 h-11 rounded-full
                border border-purple-500/20
                bg-[#111111]
                text-gray-300
                hover:text-white
                hover:border-purple-500/40
                hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]
                transition-all duration-300
              "
            >
              <FaGithub size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15, rotate: -5 }}
              href="https://www.linkedin.com/in/rishabhpandey30/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                w-11 h-11 rounded-full
                border border-purple-500/20
                bg-[#111111]
                text-gray-300
                hover:text-white
                hover:border-purple-500/40
                hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]
                transition-all duration-300
              "
            >
              <FaLinkedin size={18} />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#8245ec] text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                pb-6
              "
            >
              <div
                className="
                  mt-4 rounded-2xl
                  border border-purple-500/20
                  bg-[#111111]/95
                  backdrop-blur-xl
                  p-6
                  shadow-[0_0_30px_rgba(130,69,236,0.2)]
                "
              >
                <ul className="flex flex-col gap-4">

                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() =>
                          handleMenuItemClick(item.id)
                        }
                        className={`
                          w-full text-left px-4 py-3 rounded-xl
                          transition-all duration-300
                          ${
                            activeSection === item.id
                              ? "bg-[#8245ec] text-white"
                              : "text-gray-300 hover:bg-[#1a1a1a]"
                          }
                        `}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Socials */}
                <div className="flex gap-4 mt-6">

                  <a
                    href="https://github.com/rishabh1230"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center
                      w-11 h-11 rounded-full
                      border border-purple-500/20
                      bg-[#181818]
                      text-gray-300
                    "
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/rishabhpandey30/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center justify-center
                      w-11 h-11 rounded-full
                      border border-purple-500/20
                      bg-[#181818]
                      text-gray-300
                    "
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;