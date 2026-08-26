/** Design: Black Signal Theatre — movement follows a measured montage rhythm with scroll-bound, GPU-friendly transforms. */
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useCinematicMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ delay: 1.1 });
      heroTimeline
        .fromTo(".hero-title .intro-reveal", { autoAlpha: 0, clipPath: "inset(0 0 105% 0)", yPercent: 112 }, { autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: .68, ease: "power4.out", stagger: .09, yPercent: 0 })
        .fromTo(".hero-display .portfolio-ghost", { autoAlpha: 0, filter: "blur(8px)", x: 45 }, { autoAlpha: 1, duration: .55, ease: "power3.out", filter: "blur(0px)", x: 0 }, "<.1")
        .fromTo(".hero-topline, .hero-bottom", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, duration: .48, ease: "power3.out", stagger: .07, y: 0 }, "<.12");
      gsap.to(".signal-orbit", { duration: 24, ease: "none", repeat: -1, rotation: 360 });
      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
        gsap.fromTo(element, { autoAlpha: 0, filter: "blur(7px)", scale: .975, y: 34 }, { autoAlpha: 1, duration: .72, ease: "power4.out", filter: "blur(0px)", immediateRender: false, scale: 1, scrollTrigger: { trigger: element, start: "top 84%", once: true }, y: 0 });
      });
      gsap.utils.toArray<HTMLElement>(".project-frame").forEach((element, index) => {
        gsap.fromTo(element, { autoAlpha: 0, filter: "blur(10px)", scale: .95, x: index % 2 ? 46 : -46, y: 38 }, { autoAlpha: 1, duration: .86, ease: "power4.out", filter: "blur(0px)", immediateRender: false, scale: 1, scrollTrigger: { trigger: element, start: "top 87%", once: true }, x: 0, y: 0 });
        gsap.to(element.querySelector(".project-visual"), { ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: .75 }, yPercent: index % 2 ? 5 : -5 });
      });
      gsap.utils.toArray<HTMLElement>(".section-title").forEach((element) => {
        gsap.fromTo(element, { clipPath: "inset(0 0 100% 0)", y: 38 }, { clipPath: "inset(0 0 0% 0)", duration: .72, ease: "power4.out", immediateRender: false, scrollTrigger: { trigger: element, start: "top 82%", once: true }, y: 0 });
      });
      gsap.to(".signal-path", { scrollTrigger: { trigger: ".contact-section", start: "top 70%", end: "bottom 40%", scrub: 1.1 }, strokeDashoffset: 0 });
    });
    return () => context.revert();
  }, []);
}
