import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  GraduationCap,
  MoveUpRight,
  Workflow,
  Database,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/motion";
import { ProjectArt } from "@/components/project-art";
import { AvailabilityLink } from "@/components/availability-link";
import { Footer } from "@/components/footer";
import { experience, profile, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <main id="top">
        <section className="hero container" aria-labelledby="hero-heading">
          <div className="hero-topline">
            <span className="eyebrow">
              <span className="blue-dot" /> SOFTWARE ENGINEER / AI & DATA
            </span>
            <span className="hero-edition">PERSONAL PORTFOLIO — VOL. 01</span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1 id="hero-heading">
                <span className="hero-line">Building intelligent</span>
                <span className="hero-line">things for the</span>
                <span className="hero-line hero-last">
                  real world<span className="blue-text">.</span>
                </span>
              </h1>
              <p className="hero-description">
                I’m Naphat, a computer engineering student at Chulalongkorn
                University. I turn complex problems into thoughtful software and
                intelligent systems.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  Explore my work <ArrowDown size={16} />
                </a>
                <AvailabilityLink
                  label="Download resume"
                  href={profile.resume}
                  download
                  className="resume-link"
                />
              </div>
            </div>
            <ProjectArt kind="hero" hero />
          </div>
          <div className="hero-bottom">
            <span className="status">
              <i />
              {profile.status}
            </span>
            <span className="hero-bottom-note">
              THOUGHTFUL SOFTWARE. REAL-WORLD PURPOSE.
            </span>
            <a href="#about" className="scroll-note">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
          </div>
        </section>

        <section id="about" className="section about-section container">
          <div className="section-label">
            <span>01 / A LITTLE ABOUT ME</span>
            <span>CURIOUS BY NATURE. ENGINEER BY CHOICE.</span>
          </div>
          <div className="about-layout">
            <Reveal>
              <h2>
                Complex problems.
                <br />
                Clear thinking.
                <br />
                <span className="muted">Human outcomes.</span>
              </h2>
              <div className="education">
                <GraduationCap size={23} strokeWidth={1.4} />
                <div>
                  <strong>Chulalongkorn University</strong>
                  <span>
                    Computer Engineering
                    <br />
                    and Digital Technology
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="about-copy">
              <p className="lead">
                I’m Naphat Chartwanchai, an engineer drawn to the space where
                software, data, and intelligence meet.
              </p>
              <p>
                I enjoy making complicated things feel considered and useful.
                From enterprise planning to a better way to organize a football
                team, I care about the problem as much as the implementation.
              </p>
              <p>
                My approach is simple: understand the context, ask better
                questions, and build with intention. I’m especially interested
                in AI systems, backend engineering, and the infrastructure that
                makes good software dependable.
              </p>
              <div className="capability-row">
                <span>
                  <Braces size={16} />
                  Thoughtful software
                </span>
                <span>
                  <Sparkles size={16} />
                  Applied intelligence
                </span>
                <span>
                  <Workflow size={16} />
                  Connected systems
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section projects-section container">
          <div className="section-label">
            <span>02 / SELECTED WORK</span>
            <span>IDEAS, ENGINEERED.</span>
          </div>
          <div className="section-heading">
            <Reveal>
              <h2>
                A few things
                <br />
                I’ve put my mind to<span className="blue-text">.</span>
              </h2>
            </Reveal>
            <p>
              Explorations in intelligent systems,
              <br />
              useful products, and better workflows.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                className={`project-card project-card-${index + 1}`}
                delay={(index % 2) * 0.08}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} case study`}
                  className="project-visual-link"
                >
                  <ProjectArt kind={project.visual} />
                  <span className="project-open">
                    <MoveUpRight size={23} strokeWidth={1.5} />
                  </span>
                </Link>
                <div className="project-info">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>/{project.number}</span>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="project-title"
                  >
                    <h3>{project.title}</h3>
                    <ArrowUpRight size={23} />
                  </Link>
                  <p>{project.summary}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="case-study-link"
                  >
                    View case study <ArrowUpRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="work-footnote">
            <span className="blue-dot" />
            Visuals are original conceptual diagrams, not product screenshots.
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section container"
        >
          <div className="section-label">
            <span>03 / ALONG THE WAY</span>
            <span>LEARNING BY BUILDING.</span>
          </div>
          <div className="experience-layout">
            <Reveal className="experience-intro">
              <h2>
                Different teams.
                <br />A wider perspective.
              </h2>
              <p>
                Experiences across AI, enterprise software, and the
                infrastructure that connects them.
              </p>
              <span className="dates-note">Internship dates to be added.</span>
            </Reveal>
            <div className="experience-list">
              {experience.map((job, index) => (
                <Reveal key={job.company} className="experience-row">
                  <span className="experience-index">0{index + 1}</span>
                  <div className="experience-details">
                    <div className="company-line">
                      <h3>{job.company}</h3>
                      {job.group && <span>{job.group}</span>}
                    </div>
                    <p className="job-role">{job.role}</p>
                    <p className="job-description">{job.description}</p>
                    <div className="job-tags">
                      {job.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <details>
                      <summary>
                        Experience notes <span>+</span>
                      </summary>
                      <p>
                        Dates, specific responsibilities, and selected
                        achievements will be added after confirmation.
                      </p>
                    </details>
                  </div>
                  <span className="intern-label">INTERNSHIP</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-label">
              <span>04 / MY TOOLKIT</span>
              <span>THE RIGHT TOOL FOR THE PROBLEM.</span>
            </div>
            <div className="section-heading">
              <Reveal>
                <h2>
                  Ideas need
                  <br />
                  good foundations.
                </h2>
              </Reveal>
              <p>
                A toolkit for connecting interfaces,
                <br />
                intelligence, and infrastructure.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Reveal
                  className="skill-group"
                  key={skill.title}
                  delay={(index % 3) * 0.04}
                >
                  <span className="skill-number">0{index + 1} /</span>
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {index === 2 && (
                    <Database
                      className="skill-decoration"
                      size={36}
                      strokeWidth={1}
                    />
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
