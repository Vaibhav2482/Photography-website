import { useState } from "react";

/** UI-only signup — honest about not being wired to a real mailing list yet. */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | error | submitted

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setState("error");
      return;
    }
    setState("submitted");
  };

  if (state === "submitted") {
    return (
      <p className="text-sm text-muted">
        Got it — though this form isn&rsquo;t connected to a real mailing list yet. Wire it up to
        something like Mailchimp or Resend to start collecting real subscribers.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-start">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state === "error") setState("idle");
          }}
          placeholder="Your email address"
          aria-label="Email address"
          className="w-full border-b border-ink/20 bg-transparent py-2 text-sm placeholder:text-muted focus:border-ink focus:outline-none"
        />
        {state === "error" ? (
          <p className="mt-1 text-xs text-red-700">Please enter a valid email address.</p>
        ) : null}
      </div>
      <button
        type="submit"
        className="tracked-caps shrink-0 rounded-full border border-ink px-6 py-2.5 text-xs transition-colors duration-300 hover:bg-ink hover:text-paper"
      >
        Subscribe
      </button>
    </form>
  );
}
