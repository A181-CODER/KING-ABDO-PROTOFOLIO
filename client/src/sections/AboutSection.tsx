/** Design: Black Signal Theatre — a bright editorial interruption gives the portfolio a decisive change of pace. */
import { SectionSignal } from "@/components/SectionSignal";

export function AboutSection() {
  return <section className="section about-section" id="about"><SectionSignal chapter="04" label="Working principle" />
    <span className="eyebrow reveal-up">About / working principle</span>
    <h2 className="section-title reveal-up">I don't just write code.<br />I build experiences, systems, and ideas.</h2>
    <div className="about-body reveal-up"><p className="about-copy">I bring a multi-disciplinary approach to every project: deep technical curiosity, a strong eye for design, and a security-first mindset. The goal is technology that is functional, secure, and thoughtfully made.</p><div className="about-side"><div className="about-note"><span>Approach</span><strong>Curiosity with structure.</strong></div><div className="about-note"><span>Focus</span><strong>AI, security, frontend, systems.</strong></div><div className="about-note"><span>Community</span><strong>Contributor to Helwan Linux LTS.</strong></div></div></div>
  </section>;
}
