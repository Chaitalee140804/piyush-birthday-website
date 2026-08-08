"use client";

import { useMemo, useState } from "react";
import siteConfig from "@/config/siteConfig";

export default function HomePage() {
  const [giftOpen, setGiftOpen] = useState(false);
  const [cakeCelebrated, setCakeCelebrated] = useState(false);
  const [finale, setFinale] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const reasons = siteConfig.reasons;

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const stars = useMemo(() => Array.from({ length: 28 }, (_, i) => ({ left: (i * 37) % 100, top: (i * 53) % 100, delay: (i % 7) * .4 })), []);

  return (
    <main className="overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        {stars.map((s, i) => <span key={i} className="absolute animate-sparkle text-pink-200/30" style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s` }}>✦</span>)}
      </div>

      <section id="intro" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24 text-center">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-7 text-6xl animate-float">🐼❤️</div>
          <p className="mb-4 text-sm uppercase tracking-[.3em] text-pink-200/70">A little story made with love</p>
          <h1 className="text-gradient text-glow text-4xl font-bold sm:text-6xl">{siteConfig.intro.title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/65">{siteConfig.intro.message}</p>
          <button className="btn-primary mt-10" onClick={() => go("hero")}>Begin Our Story ❤️</button>
        </div>
      </section>

      <section id="hero" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
        <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="mb-4 text-sm uppercase tracking-[.25em] text-pink-200/70">{siteConfig.hero.eyebrow}</p>
            <h2 className="text-gradient text-glow text-5xl font-bold sm:text-7xl">{siteConfig.hero.title}</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">{siteConfig.hero.subtitle}</p>
            <button className="btn-primary mt-9" onClick={() => go("love-letter")}>{siteConfig.hero.cta}</button>
          </div>
          <MemoryPlaceholder label="Hero Photo" path={siteConfig.hero.image} />
        </div>
      </section>

      <section id="love-letter" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[.25em] text-pink-200/70">From my heart</p>
          <h2 className="text-gradient mt-3 text-4xl font-bold sm:text-5xl">{siteConfig.loveLetter.title}</h2>
          <div className="glass-card mt-10 rounded-[2rem] p-7 text-left sm:p-12">
            {siteConfig.loveLetter.paragraphs.map((p) => <p key={p} className="mb-6 text-base leading-8 text-white/75 last:mb-0 sm:text-lg">{p}</p>)}
            <p className="mt-10 text-right font-serif text-2xl text-pink-100">{siteConfig.loveLetter.signature}</p>
          </div>
          <button className="btn-primary mt-10" onClick={() => go("gift")}>Continue Our Story ✨</button>
        </div>
      </section>

      <section id="gift" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[.25em] text-pink-200/70">{siteConfig.gift.subtitle}</p>
          <h2 className="text-gradient mt-3 text-4xl font-bold sm:text-5xl">{siteConfig.gift.title}</h2>
          <div className="glass-card mt-12 rounded-[2rem] p-10">
            <button className={`mx-auto flex h-52 w-64 animate-float items-center justify-center rounded-3xl border border-white/15 bg-gradient-to-br from-pink-300/70 to-purple-400/60 text-7xl shadow-2xl transition-transform ${giftOpen ? "scale-95" : "hover:scale-105"}`} onClick={() => setGiftOpen(true)} aria-label="Open surprise gift">{giftOpen ? "💖" : "🎁"}</button>
            {!giftOpen ? <p className="mt-8 text-white/60">Tap the gift to open it ❤️</p> : <div className="mt-8 animate-fade-up"><p className="text-lg leading-8 text-white/80">{siteConfig.gift.message}</p><button className="btn-primary mt-8" onClick={() => go("timeline")}>Continue to Our Story →</button></div>}
          </div>
        </div>
      </section>

      <section id="timeline" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto mb-16 max-w-3xl text-center"><p className="text-sm uppercase tracking-[.25em] text-pink-200/70">Our journey</p><h2 className="text-gradient mt-3 text-4xl font-bold sm:text-5xl">Our Story 📖</h2></header>
          <div className="space-y-10">
            {siteConfig.timeline.map((m, i) => <article key={m.id} className="grid items-center gap-8 lg:grid-cols-2"><MemoryPlaceholder label={m.title} path={m.image} /><div className="glass-card rounded-[2rem] p-7"><p className="text-sm uppercase tracking-[.2em] text-pink-200/60">{m.date}</p><h3 className="mt-3 text-2xl font-semibold">{m.title}</h3><p className="mt-4 leading-8 text-white/65">{m.description}</p></div></article>)}
          </div>
          <div className="mt-14 text-center"><button className="btn-primary" onClick={() => go("gallery")}>View Our Memories 📸</button></div>
        </div>
      </section>

      <section id="gallery" className="relative z-10 px-5 py-28">
        <div className="mx-auto max-w-6xl"><header className="mx-auto mb-12 max-w-3xl text-center"><p className="text-sm uppercase tracking-[.25em] text-pink-200/70">Little pieces of us</p><h2 className="text-gradient mt-3 text-4xl font-bold sm:text-5xl">{siteConfig.gallery.title}</h2><p className="mt-5 text-white/60">{siteConfig.gallery.subtitle}</p></header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{siteConfig.gallery.memories.map((m) => <button key={m.id} className="group text-left" onClick={() => setSelectedPhoto(m.id)}><MemoryPlaceholder label={m.caption ?? m.alt} path={m.src} /><p className="mt-3 text-sm text-white/60">{m.caption}</p></button>)}</div>
          {selectedPhoto && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-md" onClick={() => setSelectedPhoto(null)}><div className="glass-card rounded-3xl p-8 text-center"><p className="text-5xl">📸</p><p className="mt-4 text-white/80">Your selected memory will appear here when the real photo is added to <code>public/images</code>.</p><button className="btn-secondary mt-6" onClick={() => setSelectedPhoto(null)}>Close</button></div></div>}
          <div className="glass-card mt-16 rounded-[2rem] p-5"><div className="aspect-video rounded-2xl bg-black/30 p-6 text-center"><p className="pt-[12%] text-5xl">🎥</p><h3 className="mt-5 text-2xl">{siteConfig.video.title}</h3><p className="mt-3 text-white/50">Add your MP4 to <code>public/videos/birthday.mp4</code>.</p></div></div>
          <div className="mt-12 text-center"><button className="btn-primary" onClick={() => go("reasons")}>100 Reasons I Love You ❤️</button></div>
        </div>
      </section>

      <section id="reasons" className="relative z-10 px-5 py-28"><div className="mx-auto max-w-6xl"><header className="mx-auto max-w-3xl text-center"><p className="text-sm uppercase tracking-[.25em] text-pink-200/70">A hundred little reasons</p><h2 className="text-gradient mt-3 text-4xl font-bold sm:text-5xl">100 Reasons I Love You ❤️</h2></header><div className="sticky top-4 z-30 mx-auto mt-8 w-fit rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm backdrop-blur-xl">❤️ {reasons.length} / 100 reasons</div><div className="mt-12 grid gap-4 sm:grid-cols-2">{reasons.map((r, i) => <article key={`${i}-${r}`} className="glass-card rounded-2xl p-5"><span className="mr-3 text-pink-200">{String(i + 1).padStart(2, "0")}</span><span className="text-white/75">{r}</span></article>)}</div><div className="mt-14 text-center"><button className="btn-primary" onClick={() => go("birthday-cake")}>Let's Celebrate Your Birthday 🎂</button></div></div></section>

      <section id="birthday-cake" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-28"><div className="mx-auto max-w-3xl text-center"><p className="text-sm uppercase tracking-[.25em] text-pink-200/70">Make a wish</p><h2 className="text-gradient mt-3 text-4xl font-bold sm:text-6xl">{siteConfig.cake.title}</h2><p className="mt-5 text-white/60">{siteConfig.cake.subtitle}</p><div className="glass-card mt-12 rounded-[2rem] p-10"><div className="text-9xl animate-float">🎂</div><div className="mt-7 flex justify-center gap-2 text-3xl">{Array.from({ length: siteConfig.cake.candleCount }).map((_, i) => <span key={i} className={cakeCelebrated ? "opacity-20" : "animate-flame"}>🕯️</span>)}</div>{!cakeCelebrated ? <button className="btn-primary mt-10" onClick={() => setCakeCelebrated(true)}>Blow Out The Candles 💨</button> : <div className="animate-fade-up"><div className="text-5xl">🎉🎈✨</div><h3 className="text-gradient mt-6 text-3xl">{siteConfig.cake.wishTitle}</h3><p className="mt-5 leading-8 text-white/70">{siteConfig.cake.wishMessage}</p><p className="mt-7 font-serif text-2xl">{siteConfig.cake.signature}</p><button className="btn-primary mt-8" onClick={() => go("grand-finale")}>One Last Surprise Awaits ✨</button></div>}</div></div></section>

      <section id="grand-finale" className="relative z-10 flex min-h-screen items-center justify-center px-5 py-28"><div className="mx-auto max-w-4xl text-center"><p className="text-sm uppercase tracking-[.3em] text-pink-200/70">The final chapter</p>{!finale ? <><h2 className="text-gradient mt-3 text-5xl font-bold sm:text-7xl">One Last Surprise ✨</h2><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/60">There's one last thing I want you to know before our little journey comes to an end.</p><button className="btn-primary mt-10" onClick={() => setFinale(true)}>Reveal The Final Surprise ❤️</button></> : <div className="animate-fade-up"><div className="text-6xl">🎆</div><div className="glass-card mt-8 rounded-[2rem] p-8 sm:p-14"><h2 className="text-gradient text-4xl font-bold sm:text-6xl">{siteConfig.finale.title}</h2><p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/80">{siteConfig.finale.message}</p><p className="mt-10 font-serif text-2xl">{siteConfig.finale.signature}</p></div><div className="mt-10 flex flex-wrap justify-center gap-3"><button className="btn-secondary" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Replay Our Story ❤️</button><button className="btn-primary" onClick={() => navigator.share ? navigator.share({ title: siteConfig.seo.title, text: siteConfig.seo.description, url: window.location.href }) : navigator.clipboard.writeText(window.location.href)}>Share With Love ❤️</button></div><footer className="mt-20 pb-8"><div className="text-4xl">🐼❤️</div><p className="mt-5 font-serif text-2xl">Made with all my love for Piyush</p><p className="mt-7 text-xs uppercase tracking-[.35em] text-white/30">✦ ♡ ✦ &nbsp; The End</p></footer></div>}</div></section>
    </main>
  );
}

function MemoryPlaceholder({ label, path }: { label: string; path: string }) {
  return <div className="image-frame relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink-300/20 via-purple-300/15 to-white/5"><div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"><span className="text-5xl">📸</span><p className="mt-4 text-sm text-white/60">{label}</p><p className="mt-1 break-all text-[10px] text-white/25">{path}</p></div></div>;
}
