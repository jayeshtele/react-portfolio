import React, { useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import WorkIcon from "@mui/icons-material/Work";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { profile } from "../data/portfolioData";

const navItems = [
  { to: "/", label: "Overview", icon: SpaceDashboardIcon, end: true },
  { to: "/about", label: "About", icon: PersonIcon },
  { to: "/projects", label: "Projects", icon: WorkIcon },
  { to: "/credentials", label: "Credentials", icon: WorkspacePremiumIcon },
  { to: "/contact", label: "Contact", icon: MailIcon },
];

function DashboardNav({ onNavigate }) {
  return (
    <nav className="space-y-2">
      {navItems.map(({ to, label, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavigate}
          className={({ isActive }) =>
            [
              "group flex items-center gap-3 rounded-lg border px-3 py-3 text-sm font-semibold transition",
              isActive
                ? "border-teal-300/50 bg-teal-300/10 text-white shadow-[0_0_30px_rgba(45,212,191,0.12)]"
                : "border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-100",
            ].join(" ")
          }
        >
          <Icon className="text-[1.25rem]" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function SidebarContent({ onNavigate }) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-800 px-5 py-5">
        <NavLink to="/" onClick={onNavigate} className="flex items-center gap-3">
          <img
            src="/assets/dashboard-mark.svg"
            alt="Jayesh dashboard mark"
            className="h-11 w-11 shrink-0"
          />
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-100">
              Jayesh
            </p>
            <p className="text-xs font-semibold text-teal-300">
              Dashboard Portfolio
            </p>
          </div>
        </NavLink>
      </div>

      <div className="px-5 py-6">
        <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/70 p-3">
          <img
            src="/assets/Profile.png"
            alt="Jayesh Tele profile"
            className="h-14 w-14 rounded-full border border-teal-300/40 object-cover"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">{profile.name}</p>
            <p className="truncate text-xs text-slate-400">{profile.role}</p>
          </div>
        </div>
      </div>

      <div className="flex-1 px-5">
        <DashboardNav onNavigate={onNavigate} />
      </div>

      <div className="border-t border-slate-800 px-5 py-5">
        <div className="mb-4 rounded-lg border border-amber-300/20 bg-amber-300/10 p-3">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-amber-200">
            Status
          </p>
          <p className="mt-1 text-sm text-slate-200">{profile.availability}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:text-white"
            aria-label="GitHub"
          >
            <GitHubIcon fontSize="small" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-teal-300 hover:text-white"
            aria-label="LinkedIn"
          >
            <LinkedInIcon fontSize="small" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DashboardLayout() {
  const { pathname } = useLocation();

  const activePage = useMemo(() => {
    return navItems.find((item) =>
      item.end ? pathname === item.to : pathname.startsWith(item.to),
    );
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#070a12] text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-slate-800 bg-[#0b1020]/95 lg:block">
        <SidebarContent />
      </aside>

      <header className="sticky top-0 z-20 border-b border-slate-800 bg-[#080d19]/90 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/assets/dashboard-mark.svg"
              alt="Jayesh dashboard mark"
              className="h-10 w-10"
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em]">
                Jayesh
              </p>
              <p className="text-xs text-teal-300">
                {activePage?.label || "Dashboard"}
              </p>
            </div>
          </NavLink>
        </div>
      </header>

      <main className="min-h-screen pb-24 lg:pl-72 lg:pb-0">
        <div className="mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
          <Outlet />
        </div>
      </main>

      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-slate-800 bg-[#080d19]/95 px-3 py-2 backdrop-blur lg:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-5 gap-1">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  "flex min-h-[3.25rem] flex-col items-center justify-center gap-1 rounded-lg text-[0.68rem] font-semibold transition",
                  isActive
                    ? "bg-teal-300/10 text-teal-200"
                    : "text-slate-500 hover:bg-slate-900 hover:text-slate-200",
                ].join(" ")
              }
            >
              <Icon className="text-[1.2rem]" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
