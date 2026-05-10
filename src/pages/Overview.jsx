import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import StatCard from "../components/StatCard";
import { dashboardImages, profile, projects, stats } from "../data/portfolioData";

const focusItems = [
  "React interfaces with clean component structure",
  "Responsive dashboards and utility workflows",
  "Dark UI systems with strong contrast and usable states",
];

export default function Overview() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-6">
      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-teal-300/25 bg-teal-300/10 px-3 py-1 text-sm font-bold text-teal-200">
              <BoltIcon className="text-[1rem]" />
              Dashboard Portfolio
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-1 text-sm font-semibold text-slate-300">
              <LocationOnIcon className="text-[1rem]" />
              {profile.location}
            </span>
          </div>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-200">
              {profile.name}
            </p>
            <h1 className="mt-3 text-4xl font-black leading-tight text-white sm:text-5xl xl:text-6xl">
              Front-end work, presented like a product dashboard.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              {profile.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-300 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-teal-200"
            >
              View Projects
              <ArrowForwardIcon className="text-[1rem]" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm font-black text-slate-200 transition hover:border-teal-300 hover:text-white"
            >
              Profile Snapshot
            </Link>
          </div>
        </div>

        <div className="relative min-h-[26rem] overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
          <img
            src={dashboardImages.analytics}
            alt="Analytics dashboard on a laptop screen"
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-200">
                  Current Mode
                </p>
                <p className="mt-2 text-2xl font-black text-white">
                  Building clean React UI
                </p>
              </div>
              <img
                src="/assets/Profile.png"
                alt="Jayesh Tele"
                className="h-20 w-20 shrink-0 rounded-full border-2 border-teal-300 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                Focus
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                What this dashboard tracks
              </h2>
            </div>
            <CodeIcon className="text-3xl text-teal-200" />
          </div>
          <div className="mt-6 space-y-4">
            {focusItems.map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircleIcon className="mt-0.5 text-[1.15rem] text-teal-300" />
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                Featured
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Recent portfolio highlights
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-teal-300 hover:text-white"
            >
              All projects
              <ArrowForwardIcon className="text-[1rem]" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
