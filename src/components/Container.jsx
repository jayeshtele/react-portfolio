import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import Certificate from "./Certificate";
import Projects from "./Projects";

export default function Container() {
  return (
    <div className="h-full w-full">
      <HeroSection />
      <AboutMe />
      <Certificate />
      <Projects />
    </div>
  );
}
