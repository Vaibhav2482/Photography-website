import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center gap-8 px-6 text-center">
      <p className="tracked-caps text-xs text-muted">404</p>
      <h1 className="font-display text-4xl sm:text-6xl">This page went off-frame.</h1>
      <Button to="/">Back to home</Button>
    </section>
  );
}
