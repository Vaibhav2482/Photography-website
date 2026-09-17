import AnimatedText from "../components/AnimatedText";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import CTASection from "../components/CTASection";
import { services } from "../data/services";

const process = [
  { step: "01", title: "Enquiry", text: "Tell us about the project, the date, and what you have in mind." },
  { step: "02", title: "Consultation", text: "A short call to align on style, timeline, and coverage." },
  { step: "03", title: "Session", text: "We show up, stay out of the way, and photograph what happens." },
  { step: "04", title: "Delivery", text: "A curated, retouched gallery delivered within the agreed window." },
];

export default function Services() {
  return (
    <>
      <section className="px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
        <div className="mx-auto max-w-[1600px]">
          <p className="tracked-caps mb-6 text-xs text-muted">What we offer</p>
          <AnimatedText
            as="h1"
            type="lines"
            className="font-display max-w-3xl text-4xl leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Services
          </AnimatedText>
          <p className="mt-8 max-w-lg text-muted">
            Five core disciplines, each shot with the same editorial approach — composed,
            unobtrusive, and true to the moment.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-10">
        <div className="mx-auto max-w-[1600px] divide-y divide-ink/10 border-t border-ink/10">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-dim/40 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="How it works" title="A straightforward process" />
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((item) => (
              <div key={item.step}>
                <span className="font-display text-3xl text-maroon">{item.step}</span>
                <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
