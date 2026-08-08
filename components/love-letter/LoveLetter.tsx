"use client";

import siteConfig from "@/config/siteConfig";

type LoveLetterProps = {
  onContinue: () => void;
};

export function LoveLetter({ onContinue }: LoveLetterProps) {
  return (
    <section
      id="love-letter"
      aria-labelledby="love-letter-heading"
      className="relative z-10 px-5 py-28"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[.25em] text-pink-200/70">
          From my heart
        </p>

        <h2
          id="love-letter-heading"
          className="text-gradient mt-3 text-4xl font-bold sm:text-5xl"
        >
          {siteConfig.loveLetter.title}
        </h2>

        <div className="glass-card mt-10 rounded-[2rem] p-7 text-left sm:p-12">
          {siteConfig.loveLetter.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-6 text-base leading-8 text-white/75 last:mb-0 sm:text-lg"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-10 text-right font-serif text-2xl text-pink-100">
            {siteConfig.loveLetter.signature}
          </p>
        </div>

        <button
          type="button"
          className="btn-primary mt-10"
          onClick={onContinue}
        >
          Continue Our Story ✨
        </button>
      </div>
    </section>
  );
}

export default LoveLetter;
