import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import ImageReveal from "../components/ImageReveal";
import { siteConfig } from "../data/siteConfig";

export default function Contact() {
  return (
    <section className="px-6 pb-28 pt-36 sm:px-10 sm:pt-44">
      <div className="mx-auto max-w-[1600px]">
        <p className="tracked-caps mb-6 text-xs text-muted">Get in touch</p>
        <AnimatedText
          as="h1"
          type="lines"
          className="font-display max-w-3xl text-4xl leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Let's talk about your project.
        </AnimatedText>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col gap-10">
            <ImageReveal
              src={siteConfig.heroImage}
              alt="Studio contact"
              className="aspect-[4/5]"
              hoverZoom
            />
            <dl className="flex flex-col gap-6 text-sm">
              <div>
                <dt className="tracked-caps text-xs text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-maroon">
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracked-caps text-xs text-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-maroon">
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="tracked-caps text-xs text-muted">Studio</dt>
                <dd className="mt-1">{siteConfig.location}</dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
