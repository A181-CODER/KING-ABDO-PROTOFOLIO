/** Design: Black Signal Theatre — the ending resolves the page through giant type and a drawn lime signal path. */
import { BrandMark } from "@/components/BrandMark";
import { SectionSignal } from "@/components/SectionSignal";

export function ContactSection() {
  return <section className="section contact-section" id="contact"><SectionSignal chapter="06" label="Final sequence" />
    <div className="contact-grid"><p className="eyebrow reveal-up">Final sequence / make a signal</p><h2 className="contact-statement"><span>Build systems.</span><span>With</span><span>consequence.</span></h2><svg aria-hidden="true" className="signal-drawing" viewBox="0 0 1000 620"><path className="signal-path" d="M-20 525 C130 500 160 310 328 337 C460 358 410 125 591 138 C735 149 678 406 838 398 C922 394 944 214 1040 152" /></svg></div>
    <div className="contact-footer reveal-up"><p className="contact-invite">Open to junior and internship opportunities across AI engineering, full-stack development, and cybersecurity. For project demos, collaboration, or professional contact, use the channels below.</p><div className="contact-links"><a className="contact-link" href="mailto:abdalrhmanmohmaed717@gmail.com">Email</a><a className="contact-link" href="tel:+201033732082">Call</a><a className="contact-link" href="https://github.com/A181-CODER" rel="noreferrer" target="_blank">GitHub</a><a className="contact-link" href="https://www.linkedin.com/in/abdelrahman-mohamed-shehata-127a48366?utm_source=share_via&utm_content=profile&utm_medium=member_android" rel="noreferrer" target="_blank">LinkedIn</a></div></div>
    <footer className="footer-meta"><span>© 2026 KING ABDO</span><span className="brand-lockup"><BrandMark /> Signal / 0001</span></footer>
  </section>;
}
