import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import { credentials, dashboardImages } from "../data/portfolioData";

export default function Credentials() {
  return (
    <div className="space-y-6">
      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 sm:p-7">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg border border-amber-300/25 bg-amber-300/10 text-amber-200">
            <VerifiedIcon />
          </span>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-teal-200">
            Credentials
          </p>
          <h1 className="mt-3 text-4xl font-black text-white sm:text-5xl">
            Learning evidence, practical work, and experience markers.
          </h1>
          <p className="mt-5 leading-8 text-slate-300">
            A compact record of the learning, practice, and experience that
            supports the project work across this portfolio.
          </p>
        </div>

        <div className="relative min-h-[22rem] overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
          <img
            src={dashboardImages.research}
            alt="Laptop showing research and analytics"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070a12] via-[#070a12]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">
              Proof System
            </p>
            <p className="mt-2 max-w-xl text-2xl font-black text-white">
              Credentials are organized as trackable records for quick review.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {credentials.map((credential) => (
          <article
            key={credential.title}
            className="rounded-lg border border-slate-800 bg-slate-950/70 p-5 transition hover:border-amber-300/40"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal-300/25 bg-teal-300/10 text-teal-200">
                <ArticleIcon />
              </span>
              <span className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-bold text-slate-300">
                {credential.status}
              </span>
            </div>
            <h2 className="mt-6 text-xl font-black text-white">
              {credential.title}
            </h2>
            <p className="mt-2 text-sm font-bold text-amber-200">
              {credential.issuer}
            </p>
            <p className="mt-4 leading-7 text-slate-400">{credential.detail}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-bold text-teal-200">
              <CheckCircleIcon className="text-[1.1rem]" />
              <span>Verified in portfolio context</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
