import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
  return (
    <div id="hero" className="hero-section relative flex flex-col justify-center px-5">
      <div className="md:hidden">
        <figure className="absolute top-3 z-10 w-[10%] cursor-pointer">
          <img
            className="rounded-full"
            src="/assets/Profile.png"
            alt="Profile"
          />
        </figure>
        <div className="hero-logos absolute right-4 top-3 space-x-3">
          <NavLink to="https://github.com/jayeshtele" target="_blank">
            <GitHubIcon sx={{fontSize:"30px"}} />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/jayesh-tele-9150711b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlDa13SKwRLORK1NOJ0eUNg%3D%3D"
            target="_blank"
          >
            <LinkedInIcon sx={{fontSize:"30px"}} />
          </NavLink>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl xl:text-5xl">Hi! I'm Jayesh</h2>
      <h1 className="my-5 text-4xl font-semibold md:text-5xl xl:text-8xl">
        Front-End Web Developer
        <span className="block text-[#f52225]">Based In India.</span>
      </h1>
      <p className="text-xs md:text-sm xl:text-xl">
        I'm developer focused on crafting user friendly experiences, I am
        passionate about building excellent
        <span className="md:block">
          Web Designs that improves the lives of those around me.
        </span>
      </p>
      <HashLink to="#projects" smooth className="mt-5 self-start rounded-xl bg-[rgba(119,119,119,0.2)] px-[4rem] py-3 text-left font-semibold duration-500 ease-out hover:bg-[rgba(119,119,119,0.5)] xl:mt-10 xl:px-[8rem] xl:text-xl">
        My Work
      </HashLink>
    </div>
  );
}
