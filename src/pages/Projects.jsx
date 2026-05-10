import React, { useMemo, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ProjectCard from "../components/ProjectCard";
import { dashboardImages, projects } from "../data/portfolioData";

const categories = ["All", "React", "JavaScript", "HTML/CSS"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] =
      category === "All"
        ? projects.length
        : projects.filter((project) => project.category === category).length;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
        <img
          src={dashboardImages.code}
          alt="Code editor dashboard visual"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070a12] via-[#070a12]/85 to-[#070a12]/25" />
        <div className="relative max-w-4xl p-5 sm:p-8">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-teal-200">
            Project Console
          </p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Explore {projects.length} builds across React, JavaScript, and static UI.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
            Browse a focused project library with clear categories, stack notes,
            and quick access to live builds and source code.
          </p>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal-300/25 bg-teal-300/10 text-teal-200">
            <FilterAltIcon />
          </span>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
              Filters
            </p>
            <h2 className="text-2xl font-black text-white">
              {filteredProjects.length} visible projects
            </h2>
          </div>
        </div>

        <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                "shrink-0 rounded-lg border px-4 py-2 text-sm font-black transition",
                activeCategory === category
                  ? "border-teal-300 bg-teal-300 text-slate-950"
                  : "border-slate-700 text-slate-300 hover:border-teal-300 hover:text-white",
              ].join(" ")}
            >
              {category} · {categoryCounts[category]}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </div>
  );
}
