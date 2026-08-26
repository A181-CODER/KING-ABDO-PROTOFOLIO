/** Design: Black Signal Theatre — a factual dossier frame turns verified professional information into a cinematic profile scene. */
import { BriefcaseBusiness, GraduationCap, MapPin, Network } from "lucide-react";
import { SectionSignal } from "@/components/SectionSignal";

const profileFacts = [
  { icon: GraduationCap, label: "Education", value: "B.Eng. Intelligent Systems Engineering · 2024—2029" },
  { icon: MapPin, label: "Base", value: "Cairo, Egypt" },
  { icon: Network, label: "Open source", value: "15 public repositories · 180+ commits · 5 active projects" },
  { icon: BriefcaseBusiness, label: "Focus", value: "Junior / Internship roles in AI, full-stack development, or cybersecurity" },
];

export function ProfileSection() {
  return <section className="section profile-section" id="profile"><SectionSignal chapter="00" label="Professional profile" />
    <div className="profile-composition"><div className="profile-heading reveal-up"><span className="eyebrow">Abdelrahman Mohamed Shehata</span><h2 className="section-title">Intelligent systems, built with care.</h2></div>
      <div className="profile-story reveal-up"><p>I am an Intelligent Systems Engineering student at Helwan National University, working at the intersection of AI engineering, cybersecurity, and frontend development.</p><p>My work focuses on intelligent systems, secure web applications, and AI-powered tools that solve real problems while keeping design and security in the same conversation.</p></div>
    </div>
    <div className="profile-facts">{profileFacts.map(({ icon: Icon, label, value }) => <article className="profile-fact reveal-up" key={label}><Icon aria-hidden="true" /><span>{label}</span><strong>{value}</strong></article>)}</div>
    <div className="experience-band reveal-up"><span className="utility-label">Field experience / 2026</span><p><strong>Cyber Security Trainee</strong> — The British University in Egypt (20-hour intensive program) <i /> <strong>Digital Transformation & Smart Systems Trainee</strong> — The Arab Contractors for Facility Management (40-hour training) <i /> <strong>AI / Software Intern</strong> — Al Mokawloon Al Arab for Facilities Management.</p></div>
  </section>;
}
