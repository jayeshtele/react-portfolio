import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-800 bg-slate-950/70 transition hover:border-teal-300/40 hover:bg-slate-900/80">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={`${project.title} visual`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-lg border border-white/10 bg-slate-950/80 px-3 py-1 text-xs font-bold text-teal-200 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
              {project.impact}
            </p>
            <h3 className="mt-2 text-lg font-black text-white">{project.title}</h3>
          </div>
          <div className="flex shrink-0 gap-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:text-white"
              aria-label={`Open ${project.title}`}
            >
              <LaunchIcon className="text-[1.05rem]" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:text-white"
              aria-label={`${project.title} GitHub repository`}
            >
              <GitHubIcon className="text-[1.05rem]" />
            </a>
          </div>
        </div>
        <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-slate-400">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
