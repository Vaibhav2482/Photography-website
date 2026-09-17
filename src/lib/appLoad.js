// Tiny pub/sub so any component (Hero's intro timeline, header logo, etc.)
// can sync with the moment the opening Loader finishes — whether it mounts
// before, during, or after that moment.
export const appLoad = { done: false };

export function onAppLoaded(callback) {
  if (appLoad.done) {
    callback();
    return () => {};
  }
  const handler = () => callback();
  window.addEventListener("app:loaded", handler, { once: true });
  return () => window.removeEventListener("app:loaded", handler);
}

export function markAppLoaded() {
  if (appLoad.done) return;
  appLoad.done = true;
  window.dispatchEvent(new Event("app:loaded"));
}
