"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import siteConfig from "@/config/siteConfig";

type HeroProps = { onContinue: () => void };

type PetalStyle = CSSProperties & { "--i": number };

export function Hero({ onContinue }: HeroProps) {
  return (
    <section id="hero" aria-labelledby="hero-heading" className="hero-section relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-5 py-24">
      <div aria-hidden="true" className="hero-orb hero-orb-one" />
      <div aria-hidden="true" className="hero-orb hero-orb-two" />
      <div aria-hidden="true" className="hero-petals">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index} style={{ "--i": index } as PetalStyle}>🌸</span>
        ))}
      </div>

      <div className="relative grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[.25em] text-pink-100/80 backdrop-blur-md">
            <span aria-hidden="true">🌸</span>{siteConfig.hero.eyebrow}
          </div>
          <h2 id="hero-heading" className="hero-title text-gradient text-glow text-5xl font-bold leading-[.98] sm:text-7xl">{siteConfig.hero.title}</h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/65 sm:text-xl">{siteConfig.hero.subtitle}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button type="button" className="btn-primary" onClick={onContinue}>{siteConfig.hero.cta} →</button>
            <span className="text-sm text-white/40">Episode 01 · Our story</span>
          </div>
        </div>

        <div className="hero-photo-wrap animate-fade-up">
          <div className="hero-photo-card">
            <div className="hero-photo-inner">
              <Image src={siteConfig.hero.image} alt="A special birthday memory" fill priority sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
              <div className="hero-photo-shade" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[.25em] text-white/60">Our little story</p>
                  <p className="mt-1 font-serif text-xl text-white">Just us. Always. ❤️</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/20 text-xl backdrop-blur-md">♡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
