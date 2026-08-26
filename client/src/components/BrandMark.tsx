/** Design: Black Signal Theatre — a bold KA crown-signal mark used at deliberate, visible scale. */
type BrandMarkProps = { className?: string };

export function BrandMark({ className = "" }: BrandMarkProps) {
  return <img alt="KING ABDO geometric KA mark" className={`brand-mark ${className}`} src="/manus-storage/king-abdo-mark_37d8b25c.png" />;
}
