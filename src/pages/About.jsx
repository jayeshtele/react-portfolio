import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SchoolIcon from "@mui/icons-material/School";
import TimelineIcon from "@mui/icons-material/Timeline";
import { dashboardImages, education, profile, skills } from "../data/portfolioData";

export default function About() {
  return (
    <div className="space-y-6">
      <section className="grid gap-5 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-950/70">
          <div className="relative aspect-[4/3]">
            <img
              src={dashboardImages.desk}
              alt="Developer desk with laptop and code"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
          </div>
          <div className="p-5">
            <div className="flex items-center gap-4">
              <img
                src="/assets/Profile.png"
                alt="Jayesh Tele"
                className="h-20 w-20 rounded-full border-2 border-teal-300 object-cover"
              />
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-200">
                  {profile.name}
                </p>
                <h1 className="mt-2 text-3xl font-black text-white">
                  {profile.role}
                </h1>
              </div>
            </div>
            <p className="mt-5 leading-8 text-slate-300">{profile.summary}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                Capability Map
              </p>
              <h2 className="mt-2 text-3xl font-black text-white">
                Skills shaped for dashboard and interface work
              </h2>
            </div>
            <AutoAwesomeIcon className="hidden text-4xl text-amber-200 sm:block" />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-lg border border-slate-800 bg-[#0b1222] p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-black text-white">{skill.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {skill.group}
                    </p>
                  </div>
                  <span className="text-sm font-black text-teal-200">
                    {skill.level}%
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-lg bg-slate-800">
                  <div
                    className="h-full rounded-lg bg-gradient-to-r from-teal-300 via-sky-300 to-amber-200"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <SchoolIcon className="text-3xl text-teal-200" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                Education
              </p>
              <h2 className="mt-1 text-2xl font-black text-white">
                Engineering background
              </h2>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {education.map((item) => (
              <div
                key={item.year}
                className="grid gap-3 rounded-lg border border-slate-800 bg-[#0b1222] p-4 sm:grid-cols-[5rem_1fr]"
              >
                <p className="text-lg font-black text-amber-200">{item.year}</p>
                <div>
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {item.place}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <TimelineIcon className="text-3xl text-rose-200" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
                Operating Style
              </p>
              <h2 className="mt-1 text-2xl font-black text-white">
                How I approach builds
              </h2>
            </div>
          </div>
          <div className="mt-6 space-y-5">
            {[
              ["01", "Understand the page goal before styling the surface."],
              ["02", "Use simple component boundaries and repeatable UI patterns."],
              ["03", "Make responsive states feel intentional on mobile and desktop."],
            ].map(([number, text]) => (
              <div key={number} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-rose-300/25 bg-rose-300/10 text-sm font-black text-rose-100">
                  {number}
                </span>
                <p className="pt-1 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
