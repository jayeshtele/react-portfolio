import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function SideNav() {
  return (
    <>
      <div className="sidenav relative hidden h-screen w-[7%] md:flex md:flex-col md:items-center md:justify-around">
        <figure className="z-10 w-[60%] cursor-pointer">
          <img
            className="rounded-full"
            src="/assets/Profile.png"
            alt="Profile"
          />
        </figure>
        <div className="sidenav-icons z-10 w-full cursor-pointer">
          <HashLink
            to="#hero"
            smooth
            className="sidenav-icons-hover relative  flex items-center justify-center"
          >
            <HomeIcon />
            <span className="absolute left-6 inline-block">Home</span>
          </HashLink>
          <HashLink
            to="#about"
            smooth
            className="sidenav-icons-hover relative  my-10 flex items-center justify-center"
          >
            <InfoIcon className="about" />
            <span className="absolute left-6 inline-block">About</span>
          </HashLink>
          <HashLink
            to="#certificate"
            smooth
            className="sidenav-icons-hover relative flex items-center justify-center"
          >
            <EmojiEventsIcon className="certificate" />
            <span className="absolute left-6 inline-block">Certificate</span>
          </HashLink>
          <HashLink
            to="#projects"
            smooth
            className="sidenav-icons-hover relative my-10 flex items-center justify-center"
          >
            <CodeIcon className="code" />
            <span className="absolute left-6 inline-block">Projects</span>
          </HashLink>
        </div>

        <div className="sidenav-icons z-10 w-full cursor-pointer">
          <NavLink
            to="https://github.com/jayeshtele"
            target="_blank"
            className="sidenav-icons-hover relative flex items-center justify-center"
          >
            <GitHubIcon />
            <span className="absolute left-6 inline-block">Services</span>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/jayesh-tele-9150711b3/"
            target="_blank"
            className="sidenav-icons-hover relative mt-10 flex items-center justify-center"
          >
            <LinkedInIcon />
            <span className="absolute left-6 inline-block">LinkedIn</span>
          </NavLink>
        </div>
      </div>

      <div className="mob-nav fixed bottom-0 z-10 w-full bg-[#0f1014] py-5 text-[#777] md:hidden">
        <div className="flex justify-evenly">
          <HashLink smooth to="#hero">
            <HomeIcon />
          </HashLink>
          <HashLink smooth to="#about">
            <InfoIcon />
          </HashLink>
          <HashLink smooth to="#certificate">
            <EmojiEventsIcon />
          </HashLink>
          <HashLink smooth to="#projects">
            <CodeIcon />
          </HashLink>
        </div>
      </div>
    </>
  );
}
