/** Design: Black Signal Theatre — giant editorial wordmark anchors an asymmetric, cinematic opening frame. */
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MagneticLink } from "@/components/MagneticLink";

export function HeroSection() {
  return <section className="hero" id="home">
    <div aria-hidden="true" className="hero-image" />
    <div aria-hidden="true" className="hero-veil" />
    <div className="hero-inner">
      <div className="hero-topline intro-reveal">
        <span className="eyebrow">Selected systems / 2026</span>
        <span className="hero-corner">Coordinates<br />24° 28′ N / 54° 22′ E</span>
      </div>
      <div className="hero-display">
        <div aria-hidden="true" className="hero-signal signal-orbit" />
        <h1 className="hero-title" aria-label="KING ABDO"><span className="intro-reveal">KING</span><span className="title-offset intro-reveal">ABDO</span></h1>
        <p className="portfolio-ghost intro-reveal">Portfolio</p>
      </div>
      <div className="hero-bottom">
        <p className="roles-line intro-reveal">AI Engineer / Front-End Developer / Cybersecurity Engineer / DevOps & Open Source</p>
        <div className="hero-actions intro-reveal">
          <MagneticLink className="button-signal" href="#work">Explore work <ArrowDown size={13} /></MagneticLink>
          <MagneticLink className="button-quiet" href="#contact">Contact <ArrowUpRight size={13} /></MagneticLink>
        </div>
      </div>
    </div>
    <span className="scroll-index">Scroll to enter</span>
  </section>;
}
