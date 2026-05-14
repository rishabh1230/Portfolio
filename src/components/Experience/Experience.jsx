// src/components/Experience/Experience.jsx

import React from "react";
import { experience } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
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
        className="text-center mb-20 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          EXPERIENCE
        </h2>

        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto leading-8">
          Professional experience, internships, and open-source contributions
          focused on backend engineering and scalable systems.
        </p>
      </motion.div>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div
              className="
                group relative h-full overflow-hidden rounded-3xl
                border border-purple-500/20
                bg-[#111111]
                p-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-purple-500/40
                hover:shadow-[0_0_35px_rgba(130,69,236,0.2)]
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Top Header */}
              <div className="relative z-10 flex items-start gap-5">

                {/* Company Logo */}
                {exp.img ? (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border border-purple-500/20 bg-[#1d1633] flex-shrink-0">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-[#1d1633] border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-400 text-xs">
                      Logo
                    </span>
                  </div>
                )}

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {exp.company}
                  </h3>

                  <p className="text-purple-300 font-medium mt-1 text-lg">
                    {exp.position}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="relative z-10 mt-6 h-[1px] w-full bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-transparent"></div>

              {/* Description */}
              <p className="relative z-10 mt-6 text-gray-400 leading-8 text-[15px]">
                {exp.description}
              </p>

              {/* Bottom Glow Accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;