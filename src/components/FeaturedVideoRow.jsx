import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import AnimatedText from "./AnimatedText";
import Button from "./Button";

/**
 * A khaki text panel paired with an autoplaying, mutable-by-nature preview
 * clip (these placeholder clips carry no audio track, so we only expose
 * play/pause — an unmute control with nothing to unmute would be dishonest).
 */
export default function FeaturedVideoRow({
  video,
  poster,
  title,
  description,
  ctaLabel = "Enquire about this shoot",
  ctaTo = "/contact",
  reverse = false,
}) {
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
    <div className="grid md:grid-cols-2">
      <div
        className={`order-2 flex flex-col justify-center gap-6 bg-khaki/25 px-8 py-16 sm:px-14 sm:py-20 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <p className="tracked-caps text-xs text-ink/60">Featured video</p>
        <AnimatedText
          as="h3"
          type="lines"
          className="font-display text-3xl leading-[0.95] sm:text-4xl"
        >
          {title}
        </AnimatedText>
        <p className="max-w-sm text-sm text-ink/70">{description}</p>
        <Button to={ctaTo} className="mt-2">
          {ctaLabel}
        </Button>
      </div>

      <div
        className={`group relative order-1 aspect-video overflow-hidden bg-ink ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
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
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause video" : "Play video"}
          className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
        >
          {playing ? <Pause size={16} strokeWidth={1.5} /> : <Play size={16} strokeWidth={1.5} className="translate-x-[1px]" />}
        </button>
      </div>
    </div>
  );
}
