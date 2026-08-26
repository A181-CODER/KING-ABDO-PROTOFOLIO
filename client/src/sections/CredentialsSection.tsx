/** Design: Black Signal Theatre — verified learning records are organized as a compact credential archive instead of decorative badges. */
import { Award, BadgeCheck } from "lucide-react";
import { credentials } from "@/data/portfolio";
import { SectionSignal } from "@/components/SectionSignal";

export function CredentialsSection() {
  return <section className="section credentials-section" id="credentials"><SectionSignal chapter="05" label="Credential archive" />
    <div className="section-head reveal-up"><div><span className="eyebrow">Certification record</span><h2 className="section-title">Learning, documented.</h2></div><p className="section-lede">A selected archive of training across AI, software development, cybersecurity, systems, and professional communication.</p></div>
    <div className="credential-grid">{credentials.map((group, index) => <article className="credential-card reveal-up" key={group.category}><div className="credential-card-head"><Award aria-hidden="true" /><span>/{String(index + 1).padStart(2, "0")}</span></div><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item.title}><BadgeCheck aria-hidden="true" /><div><strong>{item.title}</strong><span>{item.issuer} · {item.date}</span></div></li>)}</ul></article>)}</div>
    <div className="language-strip reveal-up"><span className="utility-label">Languages</span><p><strong>Arabic</strong> Native <i /> <strong>English</strong> C1 Advanced <i /> <strong>French</strong> Professional working proficiency <i /> <strong>Italian</strong> Elementary proficiency</p></div>
  </section>;
}
