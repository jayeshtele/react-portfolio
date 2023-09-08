import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function SideNav() {
  return (
    <div className="sidenav relative flex w-[7%] flex-col items-center justify-around h-screen">
      <figure className="z-10 w-[60%] cursor-pointer">
        <img className="rounded-full" src="/assets/Profile.png" alt="Profile" />
      </figure>
      <div className="sidenav-icons z-10 w-full cursor-pointer">
        <div className="sidenav-icons-hover relative  flex items-center justify-center">
          <HomeIcon />
          <span className="absolute left-6 inline-block">Home</span>
        </div>
        <div className="sidenav-icons-hover relative  my-10 flex items-center justify-center">
          <InfoIcon className="about" />
          <span className="absolute left-6 inline-block">About</span>
        </div>
        <div className="sidenav-icons-hover relative flex items-center justify-center">
          <EmojiEventsIcon className="certificate" />
          <span className="absolute left-6 inline-block">Certificate</span>
        </div>
        <div className="sidenav-icons-hover relative my-10 flex items-center justify-center">
          <CodeIcon className="code" />
          <span className="absolute left-6 inline-block">Projects</span>
        </div>
        <div className="sidenav-icons-hover relative flex items-center justify-center">
          <DesignServicesIcon className="services" />
          <span className="absolute left-6 inline-block">Services</span>
        </div>
      </div>

      <div className="sidenav-icons z-10 w-full cursor-pointer">
        <div className="sidenav-icons-hover relative flex items-center justify-center">
          <GitHubIcon />
          <span className="absolute left-6 inline-block">Services</span>
        </div>
        <div className="sidenav-icons-hover relative mt-10 flex items-center justify-center">
          <LinkedInIcon />
          <span className="absolute left-6 inline-block">LinkedIn</span>
        </div>
      </div>
    </div>
  );
}
