import { useLayoutEffect } from "react";
import { gsap } from "../lib/gsap";

/**
 * Runs `effect` inside a gsap.context() scoped to `scopeRef` (or the whole
 * document if omitted), and reverts every tween/ScrollTrigger it created on
 * unmount or when `deps` change. This is the one place animation cleanup
 * happens, so components never have to hand-manage ScrollTrigger.kill().
 */
export function useGsap(effect, deps = [], scopeRef) {
  useLayoutEffect(() => {
    const ctx = gsap.context(effect, scopeRef?.current ?? undefined);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
