import { useState } from "react";
import { services } from "../data/services";

const initialValues = { name: "", email: "", phone: "", service: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please add a short message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-ink/15 bg-paper-dim/60 p-8">
        <p className="text-xl font-medium">Thank you, {values.name.split(" ")[0]}.</p>
        <p className="mt-3 max-w-md text-sm text-muted">
          Your details were captured by this form, but this is a front-end prototype — it
          isn&rsquo;t connected to an email service or backend yet. Wire it up to a provider
          such as Formspree, Resend, or a serverless function to start receiving real
          enquiries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" value={values.phone} onChange={handleChange} />
        <label className="flex flex-col gap-2">
          <span className="tracked-caps text-xs text-muted">Service</span>
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            className="border-b border-ink/20 bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="tracked-caps text-xs text-muted">Message *</span>
        <textarea
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          className="resize-none border-b border-ink/20 bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
        />
        {errors.message ? <span className="text-xs text-red-700">{errors.message}</span> : null}
      </label>

      <button
        type="submit"
        className="tracked-caps mt-2 w-fit rounded-full border border-rose bg-rose px-8 py-3.5 text-xs text-ink transition-colors duration-300 hover:border-rose-dark hover:bg-rose-dark"
      >
        Send message
      </button>
      <p className="text-xs text-muted">
        UI prototype only — connect this form to an email or CRM backend to receive
        submissions.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, error, required }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="tracked-caps text-xs text-muted">
        {label} {required ? "*" : ""}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-b border-ink/20 bg-transparent py-2 text-sm focus:border-ink focus:outline-none"
      />
      {error ? <span className="text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
