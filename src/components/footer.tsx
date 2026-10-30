import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { AvailabilityLink } from "./availability-link";
import { profile } from "@/data/portfolio";
export function Footer() {
  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="section-label">
          <span>05 / CONTACT</span>
          <span>A GOOD PLACE TO START</span>
        </div>
        <div className="contact-main">
          <h2>
            Have something in mind?
            <br />
            <span>Let’s build it.</span>
            <ArrowUpRight className="contact-arrow" strokeWidth={1} />
          </h2>
          <div className="contact-aside">
            <span className="status">
              <i />
              {profile.status}
            </span>
            <p>
              Thoughtful ideas. Interesting problems.
              <br />
              I’d love to hear what you’re working on.
            </p>
            <AvailabilityLink
              label="Say hello"
              href={profile.email ? `mailto:${profile.email}` : null}
              className="contact-hello"
            />
          </div>
        </div>
        <div className="contact-links">
          <AvailabilityLink
            label="Email"
            href={profile.email ? `mailto:${profile.email}` : null}
          />
          <AvailabilityLink label="GitHub" href={profile.github} />
          <AvailabilityLink label="LinkedIn" href={profile.linkedin} />
          <AvailabilityLink label="Resume" href={profile.resume} download />
        </div>
        <div className="footer-bottom">
          <Link href="/" className="footer-name">
            Naphat Chartwanchai<span>Software Engineer / AI & Data</span>
          </Link>
          <span>© {new Date().getFullYear()} · Built with intention.</span>
          <a href="#top" className="back-top">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
