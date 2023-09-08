import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Certificate from "./Certificate";
import Projects from "./Projects";

export default function Container() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <HeroSection />
      <div className="px-5">
        <AboutMe />
        <Certificate />
        <Projects />
      </div>
    </div>
  );
}
