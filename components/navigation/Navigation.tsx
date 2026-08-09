"use client";

import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Our Story", "timeline"],
  ["Memories", "gallery"],
  ["100 Reasons", "reasons"],
  ["Letter", "love-letter"],
  ["Celebrate", "birthday-cake"],
  ["Finale", "grand-finale"],
] as const;

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2" aria-label="Main navigation">
      <div className="nav-glass flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <button type="button" className="flex items-center gap-2 text-sm font-semibold tracking-wide" onClick={() => go("intro")}>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
            <Heart size={15} fill="currentColor" className="text-pink-200" />
          </span>
          <span className="hidden sm:inline">Our Little Story</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => go(id)} className="nav-link">
              {label}
            </button>
          ))}
        </div>

        <button type="button" className="nav-menu-button md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile-menu mt-2 rounded-3xl p-3 md:hidden">
          {links.map(([label, id]) => (
            <button key={id} type="button" onClick={() => go(id)} className="nav-mobile-link">
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
