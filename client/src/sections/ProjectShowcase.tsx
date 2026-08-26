/** Design: Black Signal Theatre — projects form an asymmetric editorial montage rather than a repeated vertical catalog. */
import { ArrowUpRight } from "lucide-react";
import { BrandMotif } from "@/components/BrandMotif";
import { SectionSignal } from "@/components/SectionSignal";
import { projects } from "@/data/portfolio";

export function ProjectShowcase() {
  return <section className="section work-section" id="work"><SectionSignal chapter="01" label="Project montage" />
    <div className="section-head reveal-up">
      <div><span className="eyebrow">Selected work / 01—05</span><h2 className="section-title">Systems made visible.</h2></div>
      <p className="section-lede">A shifting set of product, systems, and interface work. Every frame is built to reveal a different kind of technical thinking.</p>
    </div>
    <div className="project-grid">
      {projects.map((project) => <article className="project-frame" key={project.number}>
        <div aria-hidden="true" className={`project-visual ${project.visualClass}`} />
        <div aria-hidden="true" className="project-sheen" />
        <div className="project-meta"><span className="project-index">/{project.number}</span><BrandMotif className="project-motif" /><span className="project-type">{project.type}</span></div>
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-bottom"><span className="project-tags">{project.tags.join(" · ")}</span><a aria-label={`Open ${project.title}`} className="project-link" href={project.href ?? "#contact"} rel={project.href ? "noreferrer" : undefined} target={project.href ? "_blank" : undefined}><ArrowUpRight size={17} /></a></div>
        </div>
      </article>)}
    </div>
  </section>;
}
