// Central helper for placeholder photography sourced from Unsplash.
// Swap `id` values in src/data/*.js for real client work when it's available —
// nothing else in the app needs to change.
export function img(id, { w = 1600, h, q = 80, fit = "crop" } = {}) {
  const params = new URLSearchParams({
    auto: "format",
    fit,
    q: String(q),
    w: String(w),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
}
