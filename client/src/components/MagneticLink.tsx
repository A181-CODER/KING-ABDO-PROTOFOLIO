/** Design: Black Signal Theatre — essential actions respond with a restrained physical pull, never excessive flourish. */
import { type MouseEvent, type ReactNode, useRef } from "react";

type MagneticLinkProps = { href: string; className: string; children: ReactNode; target?: string; rel?: string };

export function MagneticLink({ href, className, children, target, rel }: MagneticLinkProps) {
  const itemRef = useRef<HTMLAnchorElement>(null);
  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches || !itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * .13;
    const y = (event.clientY - rect.top - rect.height / 2) * .13;
    itemRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };
  const onLeave = () => { if (itemRef.current) itemRef.current.style.transform = "translate3d(0, 0, 0)"; };
  return <a className={`magnetic ${className}`} href={href} onMouseLeave={onLeave} onMouseMove={onMove} ref={itemRef} rel={rel} target={target}>{children}</a>;
}
