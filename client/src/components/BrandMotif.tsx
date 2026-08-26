/** Design: Black Signal Theatre — the KA crown-signal geometry repeats as a quiet architectural signature. */
type BrandMotifProps = { className?: string };

export function BrandMotif({ className = "" }: BrandMotifProps) {
  return <span aria-hidden="true" className={`ka-motif ${className}`}><i /><b /></span>;
}
