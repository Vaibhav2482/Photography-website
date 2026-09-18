import AnimatedText from "../components/AnimatedText";
import SectionHeading from "../components/SectionHeading";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/CTASection";
import { siteConfig } from "../data/siteConfig";
import bwRingExchange from "../assets/images/portfolio/bw-ring-exchange.jpg";
import turmericWalk from "../assets/images/portfolio/turmeric-walk.jpg";
import familyChandelier from "../assets/images/portfolio/family-chandelier.jpg";

const pillars = [
  {
    title: "Presence",
    text: "We work quietly and stay out of the way, so the people in front of the camera can forget it's there.",
  },
  {
    title: "Craft",
    text: "Every frame is composed and lit with intent — nothing is left to an app filter or a lucky accident.",
  },
  {
    title: "Honesty",
    text: "We photograph what's actually happening. No forced smiles, no invented moments, no exaggerated claims.",
  },
];

export default function About() {
  return (
    <>
      <section className="px-6 pb-20 pt-36 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <p className="tracked-caps mb-6 text-[10px] tracking-[0.24em] text-muted">About the studio</p>
          <AnimatedText
            as="h1"
            type="lines"
            className="font-display max-w-4xl text-4xl leading-[0.94] tracking-[-0.05em] sm:text-6xl md:text-7xl"
          >
            {`Photography is a form of paying attention.`}
          </AnimatedText>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:gap-20">
          <ImageReveal
            src={bwRingExchange}
            alt={`Editorial wedding photography by ${siteConfig.businessName}`}
            className="aspect-[3/4] overflow-hidden rounded-[1.5rem] shadow-[0_20px_55px_rgba(26,24,21,0.08)]"
            priority
          />
          <div className="flex flex-col justify-center gap-6">
            <p className="text-lg leading-relaxed text-ink/80">
              {siteConfig.photographerName} shoots {siteConfig.businessName} with one rule
              above the rest: observe first, direct only when it helps, and never let the
              camera get in the way of what's actually happening.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Every shoot starts the same way: showing up early, staying quiet, and paying
              attention long before anyone says &ldquo;cheese.&rdquo; The goal is a gallery you
              recognize as your own day — not a stranger's idea of what your day should look
              like.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-dim/40 px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Philosophy" title="Three things we won't compromise on" />
          <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-10">
            {pillars.map((pillar, i) => (
              <div key={pillar.title} className="rounded-[1.25rem] border border-ink/10 bg-paper/60 p-6 shadow-[0_14px_35px_rgba(26,24,21,0.03)]">
                <span className="tracked-caps text-[10px] tracking-[0.22em] text-muted">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10">
          <Fact label="Founded" value={String(siteConfig.founded)} />
          <Fact label="Years active" value={`${siteConfig.yearsActive}+`} />
          <Fact label="Based in" value={siteConfig.location.split(" — ")[0]} />
          <Fact label="Availability" value="Worldwide" />
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10">
          <ImageReveal
            src={turmericWalk}
            alt="Real client work from the studio's Instagram"
            className="aspect-[4/5] overflow-hidden rounded-[1.4rem] shadow-[0_18px_45px_rgba(26,24,21,0.08)]"
            hoverZoom
          />
          <ImageReveal
            src={familyChandelier}
            alt="Real client work from the studio's Instagram"
            className="aspect-[4/5] overflow-hidden rounded-[1.4rem] shadow-[0_18px_45px_rgba(26,24,21,0.08)] sm:mt-16"
            hoverZoom
          />
        </div>
      </section>

      <CTASection
        eyebrow="Get in touch"
        title="Tell us about your project."
        buttonLabel="Contact the studio"
      />
    </>
  );
}

function Fact({ label, value }) {
  return (
    <div>
      <p className="font-display text-3xl uppercase sm:text-4xl">{value}</p>
      <p className="tracked-caps mt-2 text-xs text-muted">{label}</p>
    </div>
  );
}
