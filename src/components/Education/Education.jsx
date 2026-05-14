// src/components/Education/Education.jsx

import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-700/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-700/10 blur-3xl rounded-full"></div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-24 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          EDUCATION
        </h2>

        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto leading-8">
          My academic journey, achievements, and continuous learning path in
          software engineering and computer science.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Timeline Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/20 via-purple-500 to-purple-500/20 transform md:-translate-x-1/2"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={`relative mb-16 flex w-full ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 top-8 transform md:-translate-x-1/2 z-20">
              <div className="relative flex items-center justify-center">
                
                {/* Pulse Animation */}
                <div className="absolute w-10 h-10 rounded-full bg-purple-500/30 animate-ping"></div>

                {/* Main Circle */}
                <div className="w-10 h-10 rounded-full border-4 border-[#8245ec] bg-[#111111] overflow-hidden shadow-[0_0_20px_rgba(130,69,236,0.5)]">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card */}
            <div
              className={`
                relative ml-16 md:ml-0
                w-full md:w-[46%]
                group overflow-hidden rounded-3xl
                border border-purple-500/20
                bg-[#111111]
                p-6 md:p-8
                transition-all duration-500
                hover:border-purple-500/40
                hover:shadow-[0_0_35px_rgba(130,69,236,0.2)]
              `}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Header */}
              <div className="relative z-10 flex items-start gap-5">

                {/* Logo */}
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#1d1633] border border-purple-500/20 flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {edu.degree}
                  </h3>

                  <h4 className="text-purple-300 mt-1 text-sm md:text-base">
                    {edu.school}
                  </h4>

                  <p className="text-gray-500 text-sm mt-2">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <div className="relative z-10 mt-6">
                <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-[#1d1633] px-4 py-2 text-sm font-medium text-purple-300">
                  Grade: {edu.grade}
                </span>
              </div>

              {/* Description */}
              <p className="relative z-10 mt-6 text-gray-400 leading-8">
                {edu.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;