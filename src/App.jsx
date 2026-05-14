import React from "react";

import Navbar from "./components/NavBar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="relative overflow-hidden bg-[#050414] text-white min-h-screen">

      {/* ================= GLOBAL BACKGROUND ================= */}
      <div className="fixed inset-0 -z-50 overflow-hidden">

        {/* Base */}
        <div className="absolute inset-0 bg-[#050414]"></div>

        {/* Animated Aurora Layer */}
        <div className="absolute top-[-20%] left-[-10%] w-[45rem] h-[45rem] bg-purple-700/20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-20%] right-[-10%] w-[45rem] h-[45rem] bg-fuchsia-700/20 blur-[140px] rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[35%] w-[30rem] h-[30rem] bg-cyan-700/10 blur-[120px] rounded-full animate-pulse"></div>

        {/* Gradient Mesh */}
        <div
          className="
            absolute inset-0 opacity-40
            bg-[radial-gradient(circle_at_20%_20%,rgba(130,69,236,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.12),transparent_25%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.08),transparent_25%)]
          "
        ></div>

        {/* Premium Grid */}
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(130,69,236,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,69,236,0.12)_1px,transparent_1px)]
            bg-[size:42px_42px]
          "
        ></div>

        {/* Small Grid */}
        <div
          className="
            absolute inset-0 opacity-30
            bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]
            bg-[size:12px_12px]
          "
        ></div>

        {/* Noise Texture */}
        <div
          className="
            absolute inset-0 opacity-[0.025]
            mix-blend-soft-light
            bg-[url('https://www.transparenttextures.com/patterns/noise.png')]
          "
        ></div>

        {/* Vignette */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_center,transparent_20%,#050414_90%)]
          "
        ></div>

        {/* Animated Gradient Beam */}
        <div
          className="
            absolute top-[-20%] left-1/2
            h-[140vh] w-[18rem]
            -translate-x-1/2 rotate-12
            bg-gradient-to-b from-purple-500/0 via-purple-500/10 to-transparent
            blur-3xl
          "
        ></div>
      </div>

      {/* ================= FLOATING PARTICLES ================= */}

      {/* Purple Orb */}
      <div className="fixed top-24 left-20 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_20px_#8245ec] animate-pulse"></div>

      {/* Cyan Orb */}
      <div className="fixed top-[45%] left-[10%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-ping"></div>

      {/* Pink Orb */}
      <div className="fixed bottom-40 right-20 w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_20px_#d946ef] animate-pulse"></div>

      {/* Floating Tech Cube */}
      <div
        className="
          fixed top-[20%] right-[12%]
          w-6 h-6 rotate-45
          border border-purple-500/30
          bg-purple-500/10
          backdrop-blur-xl
          shadow-[0_0_25px_rgba(130,69,236,0.35)]
          animate-bounce
        "
      ></div>

      {/* Floating Ring */}
      <div
        className="
          fixed bottom-[18%] left-[8%]
          w-16 h-16 rounded-full
          border border-fuchsia-500/20
          animate-spin
        "
        style={{
          animationDuration: "12s",
        }}
      ></div>

      {/* Floating Glass Dot */}
      <div
        className="
          fixed top-[70%] right-[15%]
          w-10 h-10 rounded-full
          border border-cyan-500/20
          bg-cyan-500/5
          backdrop-blur-md
        "
      ></div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* Navbar */}
        <Navbar />

        {/* Main Sections */}
        <main className="pt-24">
          <About />
          <Skills />
          <Work />
          <Experience />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;