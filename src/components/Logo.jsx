import { useId } from "react";
import { siteConfig } from "../data/siteConfig";

// Requested explicitly as "AK" rather than the auto-derived initials.
const MONOGRAM = "AK";

/** Original circular studio badge, driven by siteConfig — not a reproduction of any reference mark. */
export default function Logo({ className = "", light = false }) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");
  const stroke = light ? "#f5f1e7" : "#1a1815";

  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label={siteConfig.businessName}>
      {/*
        Over the video hero, a thin light-colored mark can wash out against
        bright frames — a soft backing disc keeps it legible no matter what's
        playing behind it. Skipped in the solid-header (dark-on-cream) state,
        where it isn't needed.
      */}
      {light ? <circle cx="60" cy="60" r="59" fill="#1a1815" opacity="0.32" /> : null}
      <circle cx="60" cy="60" r="57" fill="none" stroke={stroke} strokeWidth="2" opacity="0.95" />
      <circle cx="60" cy="60" r="49" fill="none" stroke={stroke} strokeWidth="1.5" opacity="0.7" />

      {/* Small tick marks around the ring, like a compass or lens scale. */}
      {Array.from({ length: 16 }, (_, i) => i * 22.5).map((angle) => (
        <line
          key={angle}
          x1="60"
          y1="9"
          x2="60"
          y2={angle % 90 === 0 ? "14" : "12"}
          stroke={stroke}
          strokeWidth="1"
          opacity="0.6"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}

      <path id={`${id}-top`} d="M 16,64 A 44,44 0 0 1 104,64" fill="none" />
      <path id={`${id}-bottom`} d="M 24,68 A 36,36 0 0 0 96,68" fill="none" />
      <text fontSize="9" letterSpacing="2.5" fontWeight="500" fill={stroke} fontFamily="Inter, sans-serif">
        <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
          {siteConfig.photographerName.toUpperCase()}
        </textPath>
      </text>
      <text fontSize="6.5" letterSpacing="2" fill={stroke} fontFamily="Inter, sans-serif" opacity="0.9">
        <textPath href={`#${id}-bottom`} startOffset="50%" textAnchor="middle">
          FILMS &amp; PHOTOGRAPHY
        </textPath>
      </text>

      {/*
        Original vintage-camera mark, line-art style — a generic camera
        silhouette (body, lens, viewfinder, shutter dial), not a
        reproduction of any specific brand's camera or logo.
      */}
      <g transform="translate(60, 40)" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round">
        <rect x="-17" y="-8" width="34" height="21" rx="2.5" />
        <rect x="-8" y="-14" width="11" height="7" rx="1.5" />
        <circle cx="0" cy="3" r="8" />
        <circle cx="0" cy="3" r="4.2" />
        <circle cx="11" cy="-3" r="1.6" fill={stroke} stroke="none" />
      </g>

      <text
        x="60"
        y="80"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="19"
        fill={stroke}
        fontFamily="Oswald, sans-serif"
        fontWeight="700"
        letterSpacing="1"
      >
        {MONOGRAM}
      </text>
    </svg>
  );
}
