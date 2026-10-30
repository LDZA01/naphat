import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { ProjectArt } from "@/components/project-art";
import { Reveal } from "@/components/motion";
import { Footer } from "@/components/footer";
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title ?? "Project not found",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next =
    projects[
      (projects.findIndex((p) => p.slug === slug) + 1) % projects.length
    ];
  return (
    <>
      <main id="top" className="case-page container">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={16} />
          Selected work
        </Link>
        <div className="section-label">
          <span>{project.category}</span>
          <span>PROJECT / {project.number}</span>
        </div>
        <Reveal>
          <h1 className="case-title">
            {project.title}
            <span className="blue-text">.</span>
          </h1>
          <p className="case-subtitle">{project.summary}</p>
        </Reveal>
        <div className="case-hero-art">
          <ProjectArt kind={project.visual} />
        </div>
        <div className="case-layout">
          <aside className="case-sidebar">
            <span className="eyebrow">AT A GLANCE</span>
            <h3>Focus</h3>
            <p>{project.category.replace(" · ", " & ")}</p>
            <h3>Technology & capabilities</h3>
            <ul>
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3>Documentation</h3>
            <p>
              Initial project profile.
              <br />
              Technical details pending.
            </p>
            <a href="#overview" className="case-study-link">
              Read the story <ArrowUpRight size={15} />
            </a>
          </aside>
          <div className="case-story">
            <section id="overview">
              <span className="eyebrow">01 / OVERVIEW</span>
              <h2>{project.summary}</h2>
              <p>{project.description}</p>
            </section>
            <section>
              <span className="eyebrow">02 / PROBLEM & CONTEXT</span>
              <h2>The starting point.</h2>
              <p>{project.context}</p>
            </section>
            <section>
              <span className="eyebrow">03 / ROLE & RESPONSIBILITIES</span>
              <h2>What I worked on.</h2>
              <p>{project.built}</p>
              <div className="editorial-note">
                To complete: my specific ownership, collaborators, project
                dates, and responsibilities.
              </div>
            </section>
            <section>
              <span className="eyebrow">04 / ARCHITECTURE & TECHNOLOGY</span>
              <h2>The pieces behind the system.</h2>
              <div className="case-stack">
                {project.stack.map((item, index) => (
                  <div key={item}>
                    <span>0{index + 1}</span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="small-copy">
                These are the confirmed capabilities. The visual above is
                conceptual; implementation architecture and additional
                technologies are yet to be documented.
              </p>
            </section>
            <section>
              <span className="eyebrow">05 / ENGINEERING CHALLENGES</span>
              <h2>The questions worth answering.</h2>
              <p className="small-copy">
                Prompts for the full technical write-up:
              </p>
              <ul className="challenge-list">
                {project.questions.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </section>
            <section>
              <span className="eyebrow">06 / DECISIONS & TRADEOFFS</span>
              <h2>The reasoning behind the work.</h2>
              <div className="editorial-note">{project.decisions}</div>
            </section>
            <section>
              <span className="eyebrow">07 / OUTCOME & IMPACT</span>
              <h2>Where the work stands.</h2>
              <p>{project.outcome}</p>
            </section>
            <section>
              <span className="eyebrow">08 / LESSONS LEARNED</span>
              <h2>What comes next.</h2>
              <div className="editorial-note">
                To complete: a specific lesson from implementation, what changed
                during development, and what I would approach differently next
                time.
              </div>
            </section>
          </div>
        </div>
        <Link href={`/projects/${next.slug}`} className="next-project">
          <span className="eyebrow">NEXT PROJECT</span>
          <span>
            {next.title}
            <ArrowUpRight strokeWidth={1} size={44} />
          </span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
