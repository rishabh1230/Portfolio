// src/components/Skills/Skills.jsx

import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="relative py-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans overflow-hidden"
  >
    {/* Background Glow */}
    <div className="absolute top-40 left-0 w-72 h-72 bg-purple-700/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-20 right-0 w-72 h-72 bg-fuchsia-700/10 blur-3xl rounded-full"></div>

    {/* Section Title */}
    <div className="text-center mb-20 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        SKILLS
      </h2>

      <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

      <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto leading-8">
        Technologies and tools I use to build scalable backend systems,
        performant applications, and modern developer experiences.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div
            className="
              group relative overflow-hidden rounded-3xl
              border border-purple-500/20
              bg-[#111111]
              p-8
              transition-all duration-500
              hover:border-purple-500/40
              hover:shadow-[0_0_35px_rgba(130,69,236,0.2)]
            "
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Title */}
            <div className="relative z-10 mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {category.title}
              </h3>

              <div className="w-16 h-[2px] bg-purple-500 mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Skills */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="
                    group/skill
                    flex items-center gap-3
                    rounded-2xl
                    border border-purple-500/10
                    bg-[#181818]
                    px-4 py-3
                    transition-all duration-300
                    hover:border-purple-500/40
                    hover:bg-[#1f1f1f]
                    hover:shadow-[0_0_20px_rgba(130,69,236,0.15)]
                  "
                >
                  {/* Logo */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#221a38]">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <span className="text-sm sm:text-base text-gray-300 font-medium group-hover/skill:text-white transition">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;