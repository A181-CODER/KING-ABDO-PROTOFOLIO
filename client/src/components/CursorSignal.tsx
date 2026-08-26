/** Design: Black Signal Theatre — a minimal lime cursor point reinforces the signal motif on fine-pointer devices. */
import { useEffect, useState } from "react";

export function CursorSignal() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update(); media.addEventListener("change", update);
    const cursor = document.querySelector<HTMLElement>(".cursor-signal");
    const move = (event: MouseEvent) => { if (cursor) { cursor.style.left = `${event.clientX}px`; cursor.style.top = `${event.clientY}px`; } };
    const enter = () => cursor?.classList.add("is-hovering");
    const leave = () => cursor?.classList.remove("is-hovering");
    window.addEventListener("mousemove", move);
    const interactives = Array.from(document.querySelectorAll("a, button"));
    interactives.forEach((item) => { item.addEventListener("mouseenter", enter); item.addEventListener("mouseleave", leave); });
    return () => { media.removeEventListener("change", update); window.removeEventListener("mousemove", move); interactives.forEach((item) => { item.removeEventListener("mouseenter", enter); item.removeEventListener("mouseleave", leave); }); };
  }, []);
  return enabled ? <span aria-hidden="true" className="cursor-signal" /> : null;
}
