import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const toneClasses = {
  teal: "border-teal-300/25 bg-teal-300/10 text-teal-200",
  amber: "border-amber-300/25 bg-amber-300/10 text-amber-200",
  rose: "border-rose-300/25 bg-rose-300/10 text-rose-200",
  blue: "border-sky-300/25 bg-sky-300/10 text-sky-200",
};

export default function StatCard({ label, value, tone = "teal" }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-400">{label}</p>
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border ${toneClasses[tone]}`}
        >
          <ArrowUpwardIcon className="text-[1rem]" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        Portfolio metric
      </p>
    </div>
  );
}
