/** Design: Black Signal Theatre — code appears as a constructed stage, not a generic rounded code block. */
import { SectionSignal } from "@/components/SectionSignal";

export function CodeSection() {
  return <section className="section code-section" aria-labelledby="code-heading"><SectionSignal chapter="02" label="System trace" />
    <div className="code-composition">
      <div className="code-copy reveal-up"><span className="eyebrow">System note / 02</span><h2 className="section-title" id="code-heading">Build the future with intent.</h2><p className="section-lede">Engineering is most valuable when the system behind the screen is as considered as the experience in front of it.</p>
        <ul className="signal-list"><li><span>Craft</span><em>Interface / logic</em></li><li><span>Security</span><em>Trust by design</em></li><li><span>Scale</span><em>Systems that endure</em></li></ul>
      </div>
      <div className="code-stage reveal-up">
        <div aria-hidden="true" className="signal-ticker"><span>build / secure / ship / create / systems / intelligence / </span><span>build / secure / ship / create / systems / intelligence / </span></div>
        <div className="code-window-bar"><span>ka.system / impact.ts</span><span className="window-dots"><i /><i /><i /></span></div>
        <pre className="code-block"><code><span className="code-key">const</span> <span className="code-name">abdelrahman</span> = {'{'}{`\n`}  role: <span className="code-string">"AI Engineer"</span>,{`\n`}  degree: <span className="code-string">"Intelligent Systems Engineering"</span>,{`\n`}  focus: [<span className="code-string">"AI"</span>, <span className="code-string">"Security"</span>, <span className="code-string">"Frontend"</span>],{`\n`}  openSource: <span className="code-string">"KING ABDO AI"</span>,{`\n`}{'}'};{`\n\n`}<span className="code-key">async function</span> <span className="code-fn">buildImpact</span>(idea: Idea) {'{'}{`\n`}  <span className="code-key">const</span> system = <span className="code-key">await</span> <span className="code-fn">engineer</span>(idea);{`\n`}  <span className="code-key">return</span> <span className="code-fn">deploy</span>(system);{`\n`}{'}'}{`\n\n`}<span className="code-comment">// useful, secure, and considered</span></code></pre>
        <div className="code-metrics"><span className="metric-label">Modes<strong>04</strong></span><span className="metric-label">Signal<strong>ON</strong></span><span className="metric-label">Status<strong>LIVE</strong></span></div>
      </div>
    </div>
  </section>;
}
