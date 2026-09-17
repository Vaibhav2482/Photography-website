import { Link } from "react-router-dom";

const THEMES = {
  light: "border-ink text-ink hover:bg-ink hover:text-paper",
  dark: "border-paper text-paper hover:bg-paper hover:text-ink",
  rose: "border-rose bg-rose text-ink hover:bg-rose-dark hover:border-rose-dark",
};

/** Shared CTA control — a pill button ("primary") or an underlined text link ("text"). */
export default function Button({
  to,
  href,
  children,
  variant = "primary",
  theme = "light",
  className = "",
  ...props
}) {
  const base = "group inline-flex w-fit items-center gap-3 tracked-caps text-xs";
  const styles =
    variant === "primary"
      ? `rounded-full border px-7 py-3.5 transition-colors duration-300 ${THEMES[theme]}`
      : `relative pb-1 ${theme === "dark" ? "text-paper" : "text-ink"}`;

  const arrow =
    variant === "primary" ? (
      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    ) : null;

  const underline =
    variant === "text" ? (
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-px origin-right scale-x-100 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-0 ${
          theme === "dark" ? "bg-paper" : "bg-ink"
        }`}
      />
    ) : null;

  const classes = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>
        <span>{children}</span>
        {arrow}
        {underline}
      </a>
    );
  }

  return (
    <Link to={to} className={classes} {...props}>
      <span>{children}</span>
      {arrow}
      {underline}
    </Link>
  );
}
