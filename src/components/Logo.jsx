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
      <circle cx="60" cy="60" r="58" fill="none" stroke={stroke} strokeWidth="1" opacity="0.9" />
      <circle cx="60" cy="60" r="51" fill="none" stroke={stroke} strokeWidth="1" opacity="0.6" />
      <path id={`${id}-top`} d="M 18,64 A 42,42 0 0 1 102,64" fill="none" />
      <path id={`${id}-bottom`} d="M 26,68 A 34,34 0 0 0 94,68" fill="none" />
      <text fontSize="8" letterSpacing="2" fill={stroke} fontFamily="Inter, sans-serif">
        <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
          {siteConfig.photographerName.toUpperCase()}
        </textPath>
      </text>
      <text fontSize="6" letterSpacing="2" fill={stroke} fontFamily="Inter, sans-serif" opacity="0.85">
        <textPath href={`#${id}-bottom`} startOffset="50%" textAnchor="middle">
          FILMS &amp; PHOTOGRAPHY
        </textPath>
      </text>
      <text
        x="60"
        y="60"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="22"
        fill={stroke}
        fontFamily="Oswald, sans-serif"
        fontWeight="600"
      >
        {initials}
      </text>
    </svg>
  );
}
