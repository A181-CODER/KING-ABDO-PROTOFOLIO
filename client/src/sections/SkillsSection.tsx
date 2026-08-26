/** Design: Black Signal Theatre — expertise is arranged as an expandable technical field, not percentage bars. */
import { expertise } from "@/data/portfolio";
import { SectionSignal } from "@/components/SectionSignal";

export function SkillsSection() {
  return <section className="section skills-section" id="skills"><SectionSignal chapter="03" label="Capability field" />
    <div className="section-head reveal-up"><div><span className="eyebrow">Capability field / A1—D4</span><h2 className="section-title">Four disciplines. One point of view.</h2></div><p className="section-lede">A connected practice across intelligent systems, secure engineering, purposeful software, and expressive interfaces.</p></div>
    <div className="skill-field">{expertise.map((group) => { const Icon = group.icon; return <article className="skill-card reveal-up" key={group.number}><div className="skill-card-header"><Icon aria-hidden="true" className="skill-icon" /><span className="skill-index">/{group.number}</span></div><h3 className="skill-title">{group.title}</h3><ul className="skill-items">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>; })}</div>
  </section>;
}
