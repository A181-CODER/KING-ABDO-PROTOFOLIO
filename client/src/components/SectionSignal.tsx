/** Design: Black Signal Theatre — chapter coordinates keep every scroll scene indexed and technically alive. */
import { BrandMotif } from "@/components/BrandMotif";

type SectionSignalProps = { chapter: string; label: string };

export function SectionSignal({ chapter, label }: SectionSignalProps) {
  return <div aria-hidden="true" className="section-signal"><span>/{chapter}</span><i /><em>{label}</em><BrandMotif /></div>;
}
