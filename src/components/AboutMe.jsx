import React from "react";

export default function AboutMe({ targetSectionRef }) {
  return (
    <div id="about" ref={targetSectionRef} className="h-full w-full">
      About Me
    </div>
  );
}
