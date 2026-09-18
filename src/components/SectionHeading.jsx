import AnimatedText from "./AnimatedText";

export default function SectionHeading({ eyebrow, title, align = "left", className = "" }) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {eyebrow ? (
        <p className="tracked-caps mb-4 text-[10px] tracking-[0.24em] text-muted">{eyebrow}</p>
      ) : null}
      <AnimatedText
        as="h2"
        type="lines"
        className="font-display text-4xl leading-[0.92] tracking-[-0.04em] sm:text-5xl md:text-6xl"
      >
        {title}
      </AnimatedText>
    </div>
  );
}
