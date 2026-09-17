import { useId } from "react";
import { siteConfig } from "../data/siteConfig";

const initials = siteConfig.photographerName
  .split(" ")
  .map((word) => word[0])
  .join("")
  .toUpperCase();

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
      <text
        x="60"
        y="61"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="26"
        fill={stroke}
        fontFamily="Oswald, sans-serif"
        fontWeight="700"
      >
        {initials}
      </text>
    </svg>
  );
}
