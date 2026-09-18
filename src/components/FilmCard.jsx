import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** A vertical (9:16) autoplaying reel card — no audio track, so play/pause only. */
export default function FilmCard({ video, poster, title }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) {
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink shadow-[0_20px_55px_rgba(26,24,21,0.12)]">
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        aria-label={title}
        className="h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4"
        aria-hidden="true"
      >
        <p className="tracked-caps text-xs text-paper">{title}</p>
      </div>
      <button
        type="button"
        onClick={togglePlay}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
      >
        {playing ? <Pause size={14} strokeWidth={1.5} /> : <Play size={14} strokeWidth={1.5} className="translate-x-[1px]" />}
      </button>
    </div>
  );
}
