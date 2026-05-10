import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import { dashboardImages, profile } from "../data/portfolioData";

const contactLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: GitHubIcon,
    description: "Browse repositories and source code.",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: LinkedInIcon,
    description: "Connect for roles, collaborations, and project work.",
  },
];

export default function Contact() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
        <img
          src={dashboardImages.workflow}
          alt="Developer workflow dashboard"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a12] via-[#070a12]/90 to-[#070a12]/30" />
        <div className="relative max-w-4xl p-5 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-200">
            Contact Desk
          </p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Let’s talk about front-end work that needs careful UI execution.
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-300">
            I’m available for front-end roles, portfolio collaborations, and
            focused website or dashboard builds.
          </p>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
          <img
            src="/assets/Profile.png"
            alt="Jayesh Tele"
            className="h-24 w-24 rounded-full border-2 border-teal-300 object-cover"
          />
          <h2 className="mt-5 text-2xl font-black text-white">{profile.name}</h2>
          <p className="mt-2 text-slate-400">{profile.role}</p>
          <div className="mt-6 space-y-4">
            <div className="flex gap-3">
              <LocationOnIcon className="text-teal-200" />
              <span className="text-sm text-slate-300">{profile.location}</span>
            </div>
            <div className="flex gap-3">
              <WorkIcon className="text-amber-200" />
              <span className="text-sm text-slate-300">
                {profile.availability}
              </span>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {contactLinks.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-teal-300/40 hover:bg-slate-900"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal-300/25 bg-teal-300/10 text-teal-200">
                  <Icon />
                </span>
                <ArrowForwardIcon className="text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-200" />
              </div>
              <h3 className="mt-8 text-2xl font-black text-white">{label}</h3>
              <p className="mt-3 leading-7 text-slate-400">{description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
