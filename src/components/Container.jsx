import React from "react";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";

export default function Container() {
  return (
    <div className="h-screen w-screen overflow-y-scroll">
      <HeroSection />
      <AboutMe />
    </div>
  );
}
