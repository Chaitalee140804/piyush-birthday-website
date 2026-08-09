"use client";

import { useEffect, useState } from "react";
import siteConfig from "@/config/siteConfig";

type IntroProps = { onContinue: () => void };

export function Intro({ onContinue }: IntroProps) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const begin = () => {
    setLeaving(true);
    window.setTimeout(onContinue, 650);
  };

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className={`intro-screen relative z-50 flex min-h-screen items-center justify-center overflow-hidden px-5 py-24 text-center transition-all duration-700 ${leaving ? "intro-leaving" : ""}`}
    >
      <div aria-hidden="true" className="intro-moon" />
      <div aria-hidden="true" className="intro-stars">
        {Array.from({ length: 34 }, (_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties}>✦</span>)}
      </div>
      <div aria-hidden="true" className="intro-petals">
        {Array.from({ length: 18 }, (_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties}>🌸</span>)}
      </div>

      <div className="relative z-10 max-w-3xl">
        <div className="intro-emblem mx-auto mb-8 grid h-24 w-24 place-items-center rounded-full border border-white/15 bg-white/5 text-5xl shadow-2xl backdrop-blur-md">
          ♡
        </div>

        <p className="text-xs uppercase tracking-[.45em] text-pink-100/55 sm:text-sm">
          A birthday story · made with love
        </p>

        <h1 id="intro-heading" className="text-gradient text-glow mt-6 text-4xl font-bold leading-tight sm:text-6xl">
          {siteConfig.intro.title}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          {siteConfig.intro.message}
        </p>

        <div className="mx-auto mt-10 h-px w-32 bg-gradient-to-r from-transparent via-pink-200/50 to-transparent" />

        <button
          type="button"
          className="btn-primary mt-10 min-w-52"
          onClick={begin}
          disabled={!ready}
        >
          {ready ? "Begin Our Story ❤️" : "Preparing our story…"}
        </button>

        <p className="mt-6 text-xs tracking-[.2em] text-white/25">EPISODE 01 · JUST US</p>
      </div>
    </section>
  );
}

export default Intro;
