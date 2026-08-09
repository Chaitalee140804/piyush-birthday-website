"use client";

import { useState } from "react";
import siteConfig from "@/config/siteConfig";

const nav = [
  ["letter", "Love Letter"],
  ["gift", "Gift"],
  ["timeline", "Our Story"],
  ["gallery", "Memories"],
  ["reasons", "100 Reasons"],
  ["cake", "Cake"],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HomePage() {
  const [giftOpen, setGiftOpen] = useState(false);
  const [candlesOut, setCandlesOut] = useState(false);
  const [finale, setFinale] = useState(false);

  return (
    <main className="bg-romantic min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-50" aria-hidden="true">
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            className="animate-sparkle absolute text-pink-200/30"
            style={{ left: `${(i * 41) % 100}%`, top: `${(i * 67) % 100}%`, animationDelay: `${(i % 8) * 0.35}s` }}
          >
            ✦
          </span>
        ))}
      </div>

      <nav className="fixed left-1/2 top-4 z-40 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-2">
          <button className="px-3 text-lg" onClick={() => scrollToId("hero")} aria-label="Back to top">🐼❤️</button>
          <div className="hidden gap-1 md:flex">
            {nav.map(([id, label]) => (
              <button key={id} className="rounded-full px-3 py-2 text-xs text-white/65 transition hover:bg-white/10 hover:text-white" onClick={() => scrollToId(id)}>{label}</button>
            ))}
          </div>
          <button className="btn-primary !px-4 !py-2 text-xs" onClick={() => scrollToId("finale")}>♡</button>
        </div>
      </nav>

      <section id="hero" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-32 text-center">
        <div className="mx-auto max-w-5xl animate-fade-up">
          <p className="text-sm uppercase tracking-[.35em] text-pink-200/65">{siteConfig.hero.eyebrow}</p>
          <h1 className="text-gradient text-glow mt-5 text-5xl font-bold leading-tight sm:text-7xl lg:text-8xl">Happy Birthday, Piyush ❤️</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">{siteConfig.hero.subtitle}</p>
          <div className="mx-auto mt-12 max-w-xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
            <img src={siteConfig.hero.image} alt="A favorite birthday memory" className="aspect-[4/3] w-full rounded-[2rem] object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            <div className="flex aspect-[4/3] items-center justify-center text-7xl" aria-hidden="true">💗🐼</div>
          </div>
          <button className="btn-primary mt-10" onClick={() => scrollToId("letter")}>{siteConfig.hero.cta} ↓</button>
        </div>
      </section>

      <section id="letter" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="From my heart" title={siteConfig.loveLetter.title} />
          <div className="glass-card rounded-[2rem] p-7 sm:p-12">
            {siteConfig.loveLetter.paragraphs.map((p) => <p key={p} className="mb-6 text-base leading-8 text-white/75 last:mb-0 sm:text-lg">{p}</p>)}
            <p className="mt-10 text-right font-serif text-2xl text-pink-100">{siteConfig.loveLetter.signature}</p>
          </div>
          <div className="text-center"><button className="btn-primary mt-10" onClick={() => scrollToId("gift")}>Continue Our Story ✨</button></div>
        </div>
      </section>

      <section id="gift" className="relative z-10 flex min-h-screen items-center px-5 py-28">
        <div className="mx-auto w-full max-w-3xl text-center">
          <SectionHeading eyebrow={siteConfig.gift.subtitle} title={siteConfig.gift.title} />
          <div className="glass-card rounded-[2rem] p-8 sm:p-12">
            <button className={`mx-auto flex h-52 w-64 items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-pink-300/70 to-purple-400/60 text-7xl shadow-2xl ${giftOpen ? "scale-95" : "animate-float hover:scale-105"}`} onClick={() => setGiftOpen(true)} aria-expanded={giftOpen} aria-label="Open surprise gift">{giftOpen ? "💖" : "🎁"}</button>
            {!giftOpen ? <p className="mt-8 text-white/55">Tap the gift to open it ❤️</p> : <div className="animate-fade-up"><p className="mt-8 text-lg leading-8 text-white/80">{siteConfig.gift.message}</p><button className="btn-primary mt-8" onClick={() => scrollToId("timeline")}>Open The Next Chapter →</button></div>}
          </div>
        </div>
      </section>

      <section id="timeline" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Our journey" title="Our Story 📖" />
          <div className="space-y-10">
            {siteConfig.timeline.map((memory, index) => <article key={memory.id} className="grid items-center gap-7 lg:grid-cols-2">
              <div className={`overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 ${index % 2 ? "lg:order-2" : ""}`}>
                <img src={memory.image} alt={memory.title} className="aspect-[4/3] w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
                <div className="flex aspect-[4/3] items-center justify-center text-6xl" aria-hidden="true">📸💗</div>
              </div>
              <div className="glass-card rounded-[2rem] p-7"><p className="text-sm uppercase tracking-[.2em] text-pink-200/60">{memory.date}</p><h3 className="mt-3 text-2xl font-semibold">{memory.title}</h3><p className="mt-4 leading-8 text-white/65">{memory.description}</p></div>
            </article>)}
          </div>
          <div className="text-center"><button className="btn-primary mt-14" onClick={() => scrollToId("gallery")}>View Our Memories 📸</button></div>
        </div>
      </section>

      <section id="gallery" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Little pieces of us" title={siteConfig.gallery.title} />
          <p className="mx-auto -mt-12 mb-12 max-w-2xl text-center text-white/55">{siteConfig.gallery.subtitle}</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.gallery.memories.map((memory) => <figure key={memory.id} className="glass-card overflow-hidden rounded-3xl p-2 transition hover:-translate-y-1"><img src={memory.src} alt={memory.alt} loading="lazy" className="aspect-square w-full rounded-2xl object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} /><div className="flex aspect-square items-center justify-center text-5xl" aria-hidden="true">📸</div><figcaption className="p-3 text-sm text-white/60">{memory.caption}</figcaption></figure>)}
          </div>
          <div className="glass-card mt-14 rounded-[2rem] p-4"><video className="aspect-video w-full rounded-2xl bg-black" controls playsInline preload="metadata" poster={siteConfig.video.poster}><source src={siteConfig.video.src} type="video/mp4" />Your browser does not support video playback.</video><h3 className="mt-5 text-center text-2xl">{siteConfig.video.title}</h3></div>
          <div className="text-center"><button className="btn-primary mt-12" onClick={() => scrollToId("reasons")}>100 Reasons I Love You ❤️</button></div>
        </div>
      </section>

      <section id="reasons" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="A hundred little reasons" title="100 Reasons I Love You ❤️" />
          <div className="sticky top-20 z-30 mx-auto mt-8 w-fit rounded-full border border-white/10 bg-black/40 px-5 py-3 text-sm backdrop-blur-xl">❤️ {siteConfig.reasons.length} / 100</div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">{siteConfig.reasons.map((reason, i) => <article key={`${i}-${reason}`} className="glass-card rounded-2xl p-5"><span className="mr-3 text-pink-200">{String(i + 1).padStart(2, "0")}</span><span className="text-white/75">{reason}</span></article>)}</div>
          <div className="text-center"><button className="btn-primary mt-14" onClick={() => scrollToId("cake")}>Let's Celebrate 🎂</button></div>
        </div>
      </section>

      <section id="cake" className="relative z-10 flex min-h-screen items-center px-5 py-28">
        <div className="mx-auto w-full max-w-3xl text-center"><SectionHeading eyebrow="Make a wish" title={siteConfig.cake.title} /><p className="-mt-12 text-white/55">{siteConfig.cake.subtitle}</p>
          <div className="glass-card mt-12 rounded-[2rem] p-10"><div className="animate-float text-9xl" aria-hidden="true">🎂</div><div className="mt-7 flex justify-center gap-2 text-3xl">{Array.from({ length: siteConfig.cake.candleCount }, (_, i) => <span key={i} className={candlesOut ? "opacity-20" : "animate-flame"}>🕯️</span>)}</div>
            {!candlesOut ? <button className="btn-primary mt-10" onClick={() => setCandlesOut(true)}>Blow Out The Candles 💨</button> : <div className="animate-fade-up"><div className="mt-8 text-5xl">🎉🎈✨</div><h3 className="text-gradient mt-6 text-3xl">{siteConfig.cake.wishTitle}</h3><p className="mt-5 leading-8 text-white/70">{siteConfig.cake.wishMessage}</p><p className="mt-7 font-serif text-2xl">{siteConfig.cake.signature}</p><button className="btn-primary mt-8" onClick={() => scrollToId("finale")}>One Last Surprise ✨</button></div>}
          </div>
        </div>
      </section>

      <section id="finale" className="relative z-10 flex min-h-screen items-center px-5 py-28 text-center">
        <div className="mx-auto max-w-4xl"><p className="text-sm uppercase tracking-[.3em] text-pink-200/65">The final chapter</p>
          {!finale ? <><h2 className="text-gradient mt-4 text-5xl font-bold sm:text-7xl">One Last Surprise ✨</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">There is one last thing I want you to know.</p><button className="btn-primary mt-10" onClick={() => setFinale(true)}>Reveal The Final Surprise ❤️</button></> : <div className="animate-fade-up"><div className="text-6xl">🎆</div><div className="glass-card mt-8 rounded-[2rem] p-8 sm:p-14"><h2 className="text-gradient text-4xl font-bold sm:text-6xl">{siteConfig.finale.title}</h2><p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/80">{siteConfig.finale.message}</p><p className="mt-10 font-serif text-2xl">{siteConfig.finale.signature}</p></div><button className="btn-secondary mt-10" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Replay Our Story ❤️</button><footer className="mt-20 pb-8"><div className="text-4xl">🐼❤️</div><p className="mt-5 font-serif text-2xl">Made with all my love for Piyush</p><p className="mt-7 text-xs uppercase tracking-[.35em] text-white/30">✦ ♡ ✦ &nbsp; The End</p></footer></div>}
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <header className="mx-auto mb-16 max-w-3xl text-center"><p className="text-sm uppercase tracking-[.25em] text-pink-200/70">{eyebrow}</p><h2 className="text-gradient mt-3 text-4xl font-bold sm:text-5xl">{title}</h2></header>;
}
