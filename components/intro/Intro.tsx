"use client";

import siteConfig from "@/config/siteConfig";

type IntroProps = {
  onContinue: () => void;
};

export function Intro({ onContinue }: IntroProps) {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24 text-center"
    >
      <div className="max-w-3xl animate-fade-up">
        <div aria-hidden="true" className="mb-7 text-6xl animate-float">
          🐼❤️
        </div>

        <p className="mb-4 text-sm uppercase tracking-[.3em] text-pink-200/70">
          A little story made with love
        </p>

        <h1
          id="intro-heading"
          className="text-gradient text-glow text-4xl font-bold sm:text-6xl"
        >
          {siteConfig.intro.title}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">
          {siteConfig.intro.message}
        </p>

        <button
          type="button"
          className="btn-primary mt-10"
          onClick={onContinue}
        >
          Begin Our Story ❤️
        </button>
      </div>
    </section>
  );
}

export default Intro;
