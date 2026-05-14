import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="work"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          PROJECTS
        </h2>

        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg font-medium max-w-2xl mx-auto leading-8">
          A showcase of projects highlighting backend engineering,
          scalable architectures, APIs, caching systems, and modern web
          technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#111111] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(130,69,236,0.25)]"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Image */}
            <div className="relative overflow-hidden p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="px-5 pb-5">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#1d1633] border border-purple-500/20 text-purple-300 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-purple-500/20 bg-[#111111] shadow-[0_0_40px_rgba(130,69,236,0.25)]">

            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="sticky top-4 ml-auto mr-4 mt-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#1d1633] text-white transition hover:bg-purple-600"
            >
              ✕
            </button>

            {/* Image */}
            <div className="p-5 pt-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-[400px] object-cover rounded-2xl border border-purple-500/20"
              />
            </div>

            {/* Content */}
            <div className="px-6 pb-8">

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-400 leading-8 mb-6">
                {selectedProject.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-[#1d1633] border border-purple-500/20 text-purple-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

                {/* GitHub */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full border border-purple-500 bg-transparent px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-purple-600 hover:shadow-[0_0_25px_rgba(130,69,236,0.35)]"
                >
                  View Code
                </a>

                {/* Live Demo */}
                <a
                  href={selectedProject.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full bg-gradient-to-r from-[#8245ec] to-purple-500 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(130,69,236,0.45)]"
                >
                  View Live
                </a>

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;