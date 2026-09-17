import { Camera, SquarePlay } from "lucide-react";
import AnimatedText from "../components/AnimatedText";
import ContactForm from "../components/ContactForm";
import ImageReveal from "../components/ImageReveal";
import { siteConfig } from "../data/siteConfig";

const SOCIAL_ICONS = { Instagram: Camera, YouTube: SquarePlay };

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
              alt={`Real client work by ${siteConfig.businessName}`}
              className="aspect-[4/5]"
              hoverZoom
            />

            <div>
              <p className="tracked-caps mb-3 text-xs text-muted">Let's connect</p>
              <p className="text-ink/80">
                Every project starts with a conversation — tell us the date, the place, and
                what you have in mind, and we'll take it from there.
              </p>
            </div>

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
              <div>
                <dt className="tracked-caps text-xs text-muted">Follow</dt>
                <dd className="mt-2 flex items-center gap-4">
                  {siteConfig.socials.map((s) => {
                    const Icon = SOCIAL_ICONS[s.label];
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={s.label}
                        className="flex items-center gap-2 hover:text-maroon"
                      >
                        {Icon ? <Icon size={15} strokeWidth={1.5} /> : null}
                        <span className="tracked-caps text-xs">{s.label}</span>
                      </a>
                    );
                  })}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="tracked-caps mb-2 text-xs text-muted">Send us a message</p>
            <h2 className="font-display mb-8 text-2xl">We'd love to hear about your day.</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
