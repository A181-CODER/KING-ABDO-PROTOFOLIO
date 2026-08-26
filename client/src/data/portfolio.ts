/** Design: Black Signal Theatre — verified professional data drives the montage, profile dossier, and credential archive. */
import { BrainCircuit, Code2, LockKeyhole, PanelsTopLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PortfolioProject = { number: string; title: string; type: string; description: string; tags: string[]; visualClass: string; href?: string };
export type ExpertiseGroup = { number: string; title: string; items: string[]; icon: LucideIcon };
export type CredentialGroup = { category: string; items: { title: string; issuer: string; date: string }[] };

export const navigation = [
  { label: "Home", target: "home" }, { label: "Profile", target: "profile" }, { label: "Work", target: "work" }, { label: "Skills", target: "skills" }, { label: "Community", target: "community" }, { label: "Credentials", target: "credentials" }, { label: "Contact", target: "contact" },
] as const;

export const projects: PortfolioProject[] = [
  { number: "01", title: "KING ABDO AI", type: "Founder & lead developer", description: "An AI-driven web platform and open-source initiative. The live platform has evolved through three major versions, with 68 commits across the product and a wider initiative spanning 15 public repositories.", tags: ["JavaScript", "Vercel CI/CD", "Git", "AI"], visualClass: "generated-ai", href: "https://king-abdo-ai-26dd.vercel.app" },
  { number: "02", title: "KING ABDO CLI", type: "Offline AI developer tool", description: "A privacy-first CLI assistant that routes prompts to a locally running Ollama LLM, streams tokens through an OpenAI-compatible API, and manages conversation history locally.", tags: ["Ollama", "Node.js", "SSE", "Prompt Engineering"], visualClass: "os-art", href: "https://github.com/A181-CODER/KING-ABDO-CLI" },
  { number: "03", title: "KING ABDO SEARCH", type: "Web search platform", description: "A responsive search application built around REST API integration, handling 200+ API calls per minute with sub-200 ms average latency and 415 verified launch visits.", tags: ["JavaScript", "REST APIs", "Google Analytics", "Vercel"], visualClass: "search-art" },
  { number: "04", title: "ISLAM HISTORY", type: "Interactive education", description: "An interactive TypeScript educational platform for Islamic historical content, deployed as a public web experience with considered information architecture.", tags: ["TypeScript", "CSS", "HTML", "Vercel"], visualClass: "history-art", href: "https://islam-histroy.vercel.app" },
  { number: "05", title: "QURAN'S HOME", type: "Interactive web platform", description: "A web platform integrating a Quran REST API with asynchronous verse-level parsing for Quran text and audio access.", tags: ["JavaScript", "Quran REST API", "HTML", "CSS"], visualClass: "generated-quran", href: "https://a181-coder.github.io/QURAN-S-HOME" },
];

export const expertise: ExpertiseGroup[] = [
  { number: "A1", title: "Artificial Intelligence", items: ["Python", "Machine Learning", "LLM Orchestration", "Ollama", "Prompt Engineering", "RAG Concepts", "FastAPI"], icon: BrainCircuit },
  { number: "B2", title: "Software Engineering", items: ["JavaScript", "TypeScript", "Node.js", "React", "Next.js", "C++", "Java"], icon: Code2 },
  { number: "C3", title: "Cybersecurity", items: ["Kali Linux", "Penetration Testing", "Secure Development", "Input Validation", "Path Traversal Protection"], icon: LockKeyhole },
  { number: "D4", title: "Web & DevOps", items: ["Tailwind CSS", "Docker", "GitHub", "CI/CD", "Vercel", "Linux Administration", "UI/UX"], icon: PanelsTopLeft },
];

export const credentials: CredentialGroup[] = [
  { category: "AI & Cloud", items: [{ title: "Google AI Fundamentals", issuer: "Google", date: "Apr 2026" }, { title: "AWS AI Practitioner Challenge", issuer: "Udacity", date: "Apr 2026" }, { title: "Getting Started with AI on Jetson Nano", issuer: "NVIDIA", date: "Mar 2026" }, { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy", date: "Mar 2026" }, { title: "Introduction to AI Concepts", issuer: "Microsoft AI", date: "Feb 2026" }] },
  { category: "Cybersecurity", items: [{ title: "Certificate of Cyber Security", issuer: "The British University in Egypt", date: "Aug 2026" }, { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", date: "Jan 2026" }, { title: "Critical Thinking in the AI Era", issuer: "HP LIFE", date: "Apr 2026" }] },
  { category: "Software Development", items: [{ title: "Introduction to Java and Object-Oriented Programming", issuer: "University of Pennsylvania", date: "Aug 2026" }, { title: "Introduction to Programming Using Java", issuer: "IBM", date: "Jul 2026" }, { title: "C++ Programming", issuer: "Cisco Networking Academy", date: "Feb 2026" }, { title: "Claude Code in Action", issuer: "Anthropic", date: "Feb 2026" }, { title: "Introduction to GitHub Copilot", issuer: "Microsoft", date: "Mar 2026" }] },
  { category: "Systems & Transformation", items: [{ title: "Digital Transformation and Smart Systems", issuer: "The Arab Contractors", date: "Jul 2026" }, { title: "Digital Twin (Revit 2026)", issuer: "Autodesk", date: "Jul 2026" }, { title: "IT Fundamentals", issuer: "Central Bank of Egypt", date: "Aug 2026" }] },
  { category: "Professional Foundations", items: [{ title: "EF SET English Certificate — C1 Advanced", issuer: "EF Education First", date: "Aug 2026" }, { title: "ICDL", issuer: "Microsoft Office Suite", date: "Certified" }] },
];
