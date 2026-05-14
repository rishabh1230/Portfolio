import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profilelogo.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-purple-700/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-fuchsia-700/10 blur-3xl rounded-full"></div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-16 relative z-10">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">

          {/* Small Heading */}
          <p className="text-purple-400 text-lg font-medium mb-3 tracking-wide">
            SOFTWARE ENGINEER & OPEN SOURCE CONTRIBUTOR
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Rishabh
            <span className="text-[#8245ec]"> Pandey</span>
          </h1>

          {/* Typewriter */}
          <div className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 leading-tight h-[80px]">
            <Typewriter
              words={[
                "Build scalable backend systems",
                "Optimize performance with Redis & caching",
                "Design clean REST & GraphQL APIs",
                "Contribute to Open Source (Oppia)",
                "3★ Coder on CodeChef",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-8 mt-6 max-w-2xl">
            Backend-focused developer skilled in building scalable systems,
            designing clean APIs, and optimizing application performance using
            Redis and caching strategies. Passionate about backend architecture,
            open source, and solving complex engineering problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">

            {/* Resume */}
            <a
              href="https://drive.google.com/file/d/1jzpQS10voHeSh5RY0Sge9OCXd8mlBakA/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-purple-500"></span>

              <span className="relative flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-white font-semibold hover:bg-[#181818] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>

                Resume
              </span>
            </a>

            {/* LeetCode */}
            <a
              href="https://leetcode.com/u/rishabhpandey30/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-purple-500"></span>

              <span className="relative flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-white font-semibold hover:bg-[#181818] transition-all duration-300">
                <span className="text-[#8245ec] font-bold">
                  &lt;/&gt;
                </span>

                LeetCode
              </span>
            </a>

            {/* CodeChef */}
            <a
              href="https://www.codechef.com/users/mockeydluffy"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] transition-all duration-300 hover:scale-105"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#8245ec] to-purple-500"></span>

              <span className="relative flex items-center gap-2 rounded-full bg-[#111111] px-7 py-3 text-white font-semibold hover:bg-[#181818] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#8245ec]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L1 21h22L12 2z" />
                </svg>

                CodeChef
              </span>
            </a>
          </div>
        </div>

        {/* Right Side */}
<div className="md:w-1/2 flex justify-center md:justify-end relative">

  <Tilt
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    perspective={1200}
    scale={1.03}
    transitionSpeed={1200}
    gyroscope={true}
  >
    <div className="relative flex items-center justify-center">

      {/* Massive Background Glow */}
      <div className="absolute w-[28rem] h-[28rem] bg-purple-600/20 blur-[120px] rounded-full animate-pulse"></div>

      {/* Rotating Gradient Ring */}
      <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full bg-gradient-to-r from-[#8245ec] via-fuchsia-500 to-cyan-400 animate-[spin_14s_linear_infinite] opacity-20 blur-md"></div>

      {/* Neon Orbit Ring */}
      <div className="absolute w-[320px] h-[320px] md:w-[430px] md:h-[430px] rounded-full border border-purple-400/20 animate-[spin_20s_linear_infinite_reverse]"></div>

      {/* Floating Tech Cubes */}
      <div className="absolute -top-4 right-10 w-8 h-8 rounded-xl border border-purple-400/40 bg-purple-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.4)] animate-bounce"></div>

      <div className="absolute bottom-10 -left-2 w-6 h-6 rounded-lg border border-fuchsia-400/40 bg-fuchsia-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(217,70,239,0.4)] animate-pulse"></div>

      <div className="absolute top-24 -left-10 w-5 h-5 rotate-45 border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.4)] animate-[bounce_4s_infinite]"></div>

      {/* Animated Grid */}
      <div
        className="
          absolute w-[420px] h-[420px]
          rounded-full opacity-20
          bg-[linear-gradient(rgba(130,69,236,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(130,69,236,0.15)_1px,transparent_1px)]
          bg-[size:32px_32px]
          animate-[spin_40s_linear_infinite]
        "
      ></div>

      {/* Floating Particles */}
      <div className="absolute top-16 left-10 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_20px_#8245ec] animate-ping"></div>

      <div className="absolute bottom-20 right-12 w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_20px_#d946ef] animate-pulse"></div>

      <div className="absolute top-1/2 -right-6 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-bounce"></div>

      {/* Main Image Border */}
      <div
        className="
          relative rounded-full p-[4px]
          bg-gradient-to-r from-[#8245ec] via-fuchsia-500 to-cyan-400
          shadow-[0_0_60px_rgba(130,69,236,0.5)]
        "
      >
        {/* Inner Border */}
        <div className="rounded-full bg-[#0f0f0f] p-3">

          {/* Shine Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>

          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Rishabh Pandey"
            className="
              w-64 h-64
              sm:w-80 sm:h-80
              md:w-[25rem] md:h-[25rem]
              rounded-full
              object-cover
              relative z-10
            "
          />
        </div>
      </div>

      {/* Bottom Floating Badge */}
      <div
        className="
          absolute -bottom-6
          px-5 py-2
          rounded-full
          border border-purple-500/30
          bg-[#111111]/80
          backdrop-blur-xl
          text-sm text-purple-300
          shadow-[0_0_25px_rgba(130,69,236,0.3)]
          animate-[float_4s_ease-in-out_infinite]
        "
      >
        Software Engineer ⚡
      </div>
    </div>
  </Tilt>
</div>
          
      </div>
    </section>
  );
};

export default About;