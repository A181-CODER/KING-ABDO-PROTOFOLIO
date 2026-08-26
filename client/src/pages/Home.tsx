/** Design: Black Signal Theatre — orchestration page for a cinematic, asymmetric Tech-Noir developer portfolio. */
import { useEffect, useState } from "react";
import { AmbientField } from "@/components/AmbientField";
import { BrandMark } from "@/components/BrandMark";
import { CursorSignal } from "@/components/CursorSignal";
import { IntroPortal } from "@/components/IntroPortal";
import { navigation } from "@/data/portfolio";
import { useCinematicMotion } from "@/hooks/useCinematicMotion";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { AboutSection } from "@/sections/AboutSection";
import { CodeSection } from "@/sections/CodeSection";
import { ContactSection } from "@/sections/ContactSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectShowcase } from "@/sections/ProjectShowcase";
import { ProfileSection } from "@/sections/ProfileSection";
import { SkillsSection } from "@/sections/SkillsSection";
import { CredentialsSection } from "@/sections/CredentialsSection";
import { CommunitySection } from "@/sections/CommunitySection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useSmoothScroll();
  useCinematicMotion();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, .15, .45] });
    navigation.forEach(({ target }) => { const section = document.getElementById(target); if (section) observer.observe(section); });
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div className="portfolio-shell">
      <IntroPortal />
      <AmbientField />
      <CursorSignal />
      <header className={`site-nav ${scrolled ? "is-scrolled" : ""}`}>
        <a aria-label="Go to home" className="brand-lockup" href="#home"><BrandMark /><span className="brand-name">KING ABDO</span></a>
        <nav aria-label="Primary navigation" className="nav-links">
          {navigation.map(({ label, target }) => <a className={`nav-link ${activeSection === target ? "is-active" : ""}`} href={`#${target}`} key={target}>{label}</a>)}
        </nav>
        <span className="nav-cue"><i /> Available for select work</span>
        <button aria-controls="mobile-navigation" aria-expanded={menuOpen} className="mobile-menu-toggle" onClick={() => setMenuOpen((open) => !open)} type="button">{menuOpen ? "CLOSE" : "MENU"}</button>
      </header>
      <nav aria-label="Mobile navigation" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-navigation">
        {navigation.map(({ label, target }) => <a className={`nav-link ${activeSection === target ? "is-active" : ""}`} href={`#${target}`} key={target} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>
      <main><HeroSection /><ProfileSection /><ProjectShowcase /><CodeSection /><SkillsSection /><CommunitySection /><CredentialsSection /><AboutSection /><ContactSection /></main>
    </div>
  );
}
