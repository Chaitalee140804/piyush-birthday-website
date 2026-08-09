"use client";

import { useEffect, useRef, useState } from "react";

const MUSIC_SRC = "/music/our-story.mp3";

export default function JourneyControls() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(true);
  const [softMode, setSoftMode] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleEnded = () => setPlaying(false);
    const handleError = () => {
      setPlaying(false);
      setMusicAvailable(false);
    };
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    return () => {
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio || !musicAvailable) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="journey-controls" aria-label="Website controls">
      <audio ref={audioRef} src={MUSIC_SRC} preload="metadata" loop />
      <button
        type="button"
        className="journey-control-button"
        onClick={toggleMusic}
        aria-label={musicAvailable ? (playing ? "Pause music" : "Play music") : "Music file not added yet"}
        title={musicAvailable ? (playing ? "Pause music" : "Play music") : "Add public/music/our-story.mp3"}
      >
        {playing ? "♫" : "♪"}
      </button>
      <button
        type="button"
        className="journey-control-button"
        onClick={() => setSoftMode((value) => !value)}
        aria-label={softMode ? "Disable soft mode" : "Enable soft mode"}
        aria-pressed={softMode}
        title="Toggle soft visual mode"
      >
        {softMode ? "☼" : "☾"}
      </button>
      <style jsx>{`
        .journey-controls {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 60;
          display: flex;
          gap: .5rem;
          padding: .35rem;
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 999px;
          background: rgba(20, 9, 27, .55);
          backdrop-filter: blur(16px);
          box-shadow: 0 12px 40px rgba(0,0,0,.25);
        }
        .journey-control-button {
          display: grid;
          place-items: center;
          width: 2.4rem;
          height: 2.4rem;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 999px;
          background: rgba(255,255,255,.06);
          color: rgba(255,255,255,.85);
          cursor: pointer;
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }
        .journey-control-button:hover { transform: translateY(-2px); background: rgba(246,168,200,.13); color: white; }
        .journey-control-button:focus-visible { outline: 2px solid #ffd2e4; outline-offset: 3px; }
        @media (max-width: 640px) { .journey-controls { top: .75rem; right: .75rem; } }
      `}</style>
    </div>
  );
}
