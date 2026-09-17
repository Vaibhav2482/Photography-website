import Hero from "../components/Hero";
import AnimatedText from "../components/AnimatedText";
import SectionHeading from "../components/SectionHeading";
import FeaturedWork from "../components/FeaturedWork";
import FeaturedVideoRow from "../components/FeaturedVideoRow";
import StatementSection from "../components/StatementSection";
import ServicesPreviewList from "../components/ServicesPreviewList";
import Testimonials from "../components/Testimonials";
import ImageReveal from "../components/ImageReveal";
import CTASection from "../components/CTASection";
import Button from "../components/Button";
import { projects } from "../data/projects";
import { siteConfig } from "../data/siteConfig";

import weddingBeachVideo from "../assets/video/hero-wedding-beach.mp4";
import weddingBeachPoster from "../assets/video/hero-wedding-beach-poster.jpg";
import fashionJewelryVideo from "../assets/video/hero-fashion-jewelry.mp4";
import fashionJewelryPoster from "../assets/video/hero-fashion-jewelry-poster.jpg";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto max-w-4xl">
          <AnimatedText
            as="p"
            type="lines"
            className="font-display text-3xl leading-snug sm:text-4xl md:text-5xl"
          >
            {`${siteConfig.businessName} is an editorial studio working across weddings, portraiture, fashion, and commercial photography — always in pursuit of a moment as it actually happened.`}
          </AnimatedText>
        </div>
      </section>

      <div className="flex flex-col">
        <FeaturedVideoRow
          video={weddingBeachVideo}
          poster={weddingBeachPoster}
          title="A Beachside Ceremony"
          description="A sunset ceremony shot beachside — coverage built around ambient light and the sound of the tide, not a shot list."
        />
        <FeaturedVideoRow
          video={fashionJewelryVideo}
          poster={fashionJewelryPoster}
          title="Behind the Details"
          description="Editorial detail work for a fashion client — the kind of close, patient coverage that a wide shot can't replace."
          ctaLabel="Enquire about a shoot"
          reverse
        />
      </div>

      <section className="pb-28 pt-28 sm:pb-36 sm:pt-36">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-end justify-between gap-6 px-6 pb-14 sm:px-10">
          <SectionHeading eyebrow="Selected work" title="Recent stories" />
          <Button to="/portfolio" variant="text">
            View all work
          </Button>
        </div>
        <FeaturedWork projects={featured} />
      </section>

      <StatementSection eyebrow="Our approach" title="Craft, Not Commodity">
        We don&rsquo;t just take photographs — we{" "}
        <span className="text-maroon">craft images that last</span>. Every session is composed
        with intent, shaped by available light, and edited with the kind of restraint that turns
        a moment into <span className="text-maroon">something worth keeping</span>.
      </StatementSection>

      <section className="bg-ink px-6 py-28 text-paper sm:px-10 sm:py-36">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-14">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tracked-caps mb-4 text-xs text-paper/50">What we do</p>
              <AnimatedText
                as="h2"
                type="lines"
                className="font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
              >
                Services
              </AnimatedText>
            </div>
            <Button to="/services" variant="text" theme="dark">
              All services
            </Button>
          </div>
          <ServicesPreviewList theme="dark" />
        </div>
      </section>

      <Testimonials />

      <section className="px-6 py-28 sm:px-10 sm:py-36">
        <div className="mx-auto grid max-w-[1600px] items-center gap-12 md:grid-cols-2 md:gap-20">
          <ImageReveal
            src={siteConfig.heroImage}
            alt={`${siteConfig.photographerName} at work`}
            className="aspect-[4/5]"
            parallax
          />
          <div>
            <p className="tracked-caps mb-4 text-xs text-muted">About the studio</p>
            <AnimatedText
              as="h2"
              type="lines"
              className="font-display text-3xl leading-tight sm:text-4xl md:text-5xl"
            >
              Photography built on trust, not performance.
            </AnimatedText>
            <p className="mt-6 max-w-md text-muted">
              Founded in {siteConfig.founded}, {siteConfig.businessName} has spent{" "}
              {siteConfig.yearsActive} years photographing weddings, brands, and people who
              would rather be documented than directed.
            </p>
            <Button to="/about" className="mt-8">
              About the studio
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
