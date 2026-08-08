"use client";

import siteConfig from "@/config/siteConfig";

type HeroProps = {
  onContinue: () => void;
};

export function Hero({ onContinue }: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24"
    >
      <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 text-sm uppercase tracking-[.25em] text-pink-200/70">
            {siteConfig.hero.eyebrow}
          </p>

          <h2
            id="hero-heading"
            className="text-gradient text-glow text-5xl font-bold sm:text-7xl"
          >
            {siteConfig.hero.title}
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
            {siteConfig.hero.subtitle}
          </p>

          <button
            type="button"
            className="btn-primary mt-9"
            onClick={onContinue}
          >
            {siteConfig.hero.cta}
          </button>
        </div>

        <div
          className="image-frame relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-300/20 via-purple-300/15 to-white/5"
          role="img"
          aria-label="Hero memory photo placeholder"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
            <span aria-hidden="true" className="text-6xl">
              📸
            </span>
            <p className="mt-4 text-sm text-white/60">
              Add your hero photo here
            </p>
            <p className="mt-1 break-all text-[10px] text-white/25">
              {siteConfig.hero.image}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
