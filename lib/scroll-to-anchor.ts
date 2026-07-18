import type Lenis from "lenis";

/** Smooth-scroll an in-page anchor through the shared Lenis instance. */
export function scrollToAnchor(
  href: string,
  e?: { preventDefault: () => void },
  offset = -32,
) {
  e?.preventDefault();
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(href, { offset });
  else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

/** Scroll back to the very top of the page. */
export function scrollToTop() {
  const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
  if (lenis) lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
