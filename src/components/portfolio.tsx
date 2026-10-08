import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
} from "lucide-react";

import gavinduPortrait from "../assets/gv.png";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Textarea } from "../components/ui/textarea";
import { DarkModeToggle } from "./darkmode";
import { Education } from "./Education";
import { LoadingScreen } from "./LoadingScreen";
import { Technical } from "./Technical";

const links = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
] as const;

const projects = [
  {
    number: "01",
    title: "Felizey",
    label: "Product platform",
    description:
      "A modern web platform built with React and TypeScript, integrating backend services and Stripe payments.",
    tech: ["React", "TypeScript", "Supabase", "Stripe"],
    tone: "project-blue",
    link: "https://www.felizey.com/",
  },
  {
    number: "02",
    title: "Uplift.lk",
    label: "Internship / Real-world",
    description:
      "An AI-powered higher education platform where I contributed to authentication workflows, reusable UI components, and REST API integrations.",
    tech: ["Next.js", "TypeScript", "REST APIs", "Turborepo", "Cloudflare"],
    tone: "project-green",
    link: "https://uplift.lk/",
  },
  {
    number: "03",
    title: "Holiday World",
    label: "Travel platform",
    description:
      "A modern travel platform with a responsive interface and reusable frontend architecture.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    tone: "project-amber",
    link: "https://holiday-world-travel.vercel.app/",
  },
];


function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle?: string }) {
  return (
    <div className="section-heading">
      <span>{index}</span>
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  );
}

export function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const subject = String(form.get("subject") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setFormStatus("Please complete every field.");
      return;
    }

    setFormStatus("Opening your email app…");
    window.location.href = `mailto:gavindurushel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="portfolio-shell">
      <header className={scrolled ? "site-header site-header-compact" : "site-header"}>
        <a className="wordmark" href="#top" aria-label="Gavindu Rushela, home">
          GRE<span>.</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <Button asChild className="desktop-contact">
            <a href="mailto:gavindurushel@gmail.com">Let&apos;s talk <ArrowUpRight /></a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button className="mobile-menu" variant="outline" size="icon" aria-label="Open navigation"><Menu /></Button>
            </SheetTrigger>
            <SheetContent className="mobile-sheet">
              <SheetTitle>Gavindu Rushela</SheetTitle>
              <SheetDescription>Software Engineer</SheetDescription>
              <nav aria-label="Mobile navigation">
                {links.map(([label, href]) => (
                  <SheetClose asChild key={href}><a href={href}>{label}<ArrowDownRight /></a></SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <DarkModeToggle variant="below-navbar" />
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="availability"><i /> Open to software engineering opportunities</div>
            <h1>Software engineer<br />who builds things<br /><em>that matter.</em></h1>
            <p className="hero-intro">I build modern web applications, scalable backend systems, and clean user experiences.</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href="#work">View my work <ArrowDownRight /></a></Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="/education/Ekanayaka%20EMGR%20-%20CV.pdf"
                  download="Ekanayaka EMGR - CV.pdf"
                >
                  Resume
                </a>
              </Button>
              <a className="icon-link" href="https://github.com/rushela" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
              <a className="icon-link" href="https://www.linkedin.com/in/rushela-ekanayaka-357072345" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            </div>
            <p className="location-line"><MapPin /> Colombo, Sri Lanka</p>
          </div>
          <div className="hero-visual" aria-label="Portrait of Gavindu Rushela">
            <div className="portrait-grid" aria-hidden="true" />
            <img src={gavinduPortrait} alt="Gavindu Rushela Ekanayaka" />
            <div className="terminal-card">
              <p><span>$</span> whoami</p>
              <strong>Gavindu Rushela</strong>
              <small>Software Engineer</small>
              <p><span>$</span> status</p>
              <strong>building things that matter<span className="cursor">_</span></strong>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Quick facts">
          <div><strong>01+</strong><span>Real world internship</span></div>
          <div><strong>09+</strong><span>Selected projects</span></div>
          <div><strong>04+</strong><span>Production oriented builds</span></div>
          <div><strong>2023—2027</strong><span>BSc Software Engineering</span></div>
        </section>

        <section className="content-section about" id="about">
          <SectionHeading index="01" title="About" />
          <div className="about-grid">
            <h3>I turn complex problems into <em>simple, usable software.</em></h3>
            <div>
              <p>I&apos;m a Software Engineering undergraduate at SLIIT with hands-on experience in full stack and real world product development. At Prosper Global Education, I contributed to the Uplift.lk platform and worked across modern frontend, authentication, and API workflows.</p>
              <ul className="strength-list">
                <li>Full stack development</li><li>API integration</li><li>Modern frontend architecture</li>
                <li>Database driven applications</li><li>Debugging & problem solving</li><li>Product focused development</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section" id="work">
          <SectionHeading index="02" title="Selected work" subtitle="Some things I've built." />
          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card ${project.tone}`} key={project.title}>
                <div className="project-preview">
                  <span className="project-index">/{project.number}</span>
                  <div className="browser-bar"><i /><i /><i /></div>
                  <div className="preview-word">{project.title}</div>
                  <div className="preview-lines"><i /><i /><i /></div>
                </div>
                <div className="project-copy">
                  <span className="project-label">{project.label}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tech-row">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <a href={project.link} target="_blank" rel="noreferrer">Visit site <ArrowUpRight /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section always-building">
          <div><span>Always building</span><h2>Ideas become useful<br />when they <em>ship.</em></h2></div>
          <Button asChild variant="outline" size="lg"><a href="https://github.com/rushela" target="_blank" rel="noreferrer"><Github /> View GitHub profile <ArrowUpRight /></a></Button>
        </section>

        <Technical />

        <section className="content-section approach" id="approach">
          <SectionHeading index="04" title="How I approach building software" />
          <div className="approach-grid">
            {[["01", "Understand", "Define the problem before writing code."], ["02", "Build", "Create simple, maintainable solutions."], ["03", "Test", "Debug, validate, and improve."], ["04", "Ship", "Turn working ideas into usable products."]].map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <Education />



        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span>06 — Available for the right opportunity</span>
            <h2>Let&apos;s build<br /><em>something.</em></h2>
            <p>Have a project, opportunity, or idea worth discussing? I&apos;d love to hear about it.</p>
            <div className="contact-links">
              <a href="mailto:gavindurushel@gmail.com"><Mail /> gavindurushel@gmail.com</a>
              <a href="tel:+94766902338"><Phone /> +94 76 690 2338</a>
              <a href="https://www.linkedin.com/in/rushela-ekanayaka-357072345" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            </div>
          </div>
          <form onSubmit={submitContact} noValidate>
            <label>Name<Input name="name" placeholder="Your name" /></label>
            <label>Email<Input name="email" type="email" placeholder="you@company.com" /></label>
            <label>Subject<Input name="subject" placeholder="What should we discuss?" /></label>
            <label>Message<Textarea name="message" placeholder="Tell me a little about it..." rows={5} /></label>
            <div className="form-footer"><span role="status">{formStatus}</span><Button type="submit" size="lg">Send message <Send /></Button></div>
          </form>
        </section>
      </main>

      <footer>
        <div><strong>Gavindu Rushela Ekanayaka</strong><span>Software Engineer · Colombo, Sri Lanka</span></div>
        <p>© 2026 Gavindu Rushela Ekanayaka</p>
        <div><a href="https://github.com/rushela" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/rushela-ekanayaka-357072345" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:gavindurushel@gmail.com">Email</a></div>
      </footer>
    </div>
  </>
  );
}