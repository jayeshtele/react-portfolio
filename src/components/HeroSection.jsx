import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-section flex flex-col justify-center pl-5">
      <h2 className="text-5xl">Hi! I'm Jayesh</h2>
      <h1 className="my-5 text-8xl font-semibold">
        Front-End Web Developer
        <span className="block text-[#f52225]">Based In India.</span>
      </h1>
      <p className="text-xl">
        I'm developer focused on crafting user friendly experiences, I am
        passionate about building excellent
        <span className="block">
          Web Designs that improves the lives of those around me.
        </span>
      </p>
      <button className="mt-10 self-start rounded-xl bg-[rgba(119,119,119,0.2)] px-[8rem] py-3 text-left text-xl font-semibold hover:bg-[rgba(119,119,119,0.5)] duration-500 ease-out">
        My Work
      </button>
    </div>
  );
}
