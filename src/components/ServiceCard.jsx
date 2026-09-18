import ImageReveal from "./ImageReveal";

export default function ServiceCard({ service, reverse = false }) {
  return (
    <div
      id={service.slug}
      className={`grid scroll-mt-28 items-center gap-10 py-16 sm:py-20 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {service.image ? (
        <ImageReveal
          src={service.image}
          alt={service.title}
          className="aspect-[4/3] overflow-hidden rounded-[1.4rem] shadow-[0_18px_45px_rgba(26,24,21,0.08)]"
        />
      ) : (
        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-[1.4rem] border border-ink/15 bg-paper-dim/50 text-center shadow-[0_18px_45px_rgba(26,24,21,0.04)]">
          <span className="font-display text-5xl text-ink/25">{service.number}</span>
          <span className="tracked-caps text-xs text-muted">Portfolio coming soon</span>
        </div>
      )}

      <div>
        <span className="tracked-caps text-[10px] tracking-[0.22em] text-muted">{service.number}</span>
        <h3 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">{service.title}</h3>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{service.description}</p>
        <ul className="mt-6 flex flex-col gap-2">
          {service.details.map((detail) => (
            <li key={detail} className="flex items-center gap-3 text-sm text-ink/80">
              <span className="h-px w-5 bg-ink/40" aria-hidden="true" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
