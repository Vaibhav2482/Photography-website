import AnimatedText from "./AnimatedText";
import Button from "./Button";

export default function CTASection({
  eyebrow = "Let's work together",
  title = "Have a story worth telling?",
  buttonLabel = "Start an enquiry",
  to = "/contact",
}) {
  return (
    <section className="bg-ink px-6 py-20 text-paper sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        {eyebrow ? <p className="tracked-caps text-xs text-paper/50">{eyebrow}</p> : null}
        <AnimatedText
          as="h2"
          type="lines"
          className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
        >
          {title}
        </AnimatedText>
        <Button to={to} theme="rose">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
