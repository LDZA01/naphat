"use client";
import Link from "next/link";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
const subscribeTheme = (callback: () => void) => {
  window.addEventListener("portfolio-theme", callback);
  return () => window.removeEventListener("portfolio-theme", callback);
};
const getTheme = () => document.documentElement.dataset.theme === "dark";
const serverTheme = () => false;
export function Navigation() {
  const dark = useSyncExternalStore(subscribeTheme, getTheme, serverTheme);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    const frame = requestAnimationFrame(scroll);
    window.addEventListener("scroll", scroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  function toggleTheme() {
    const value = !dark;
    document.documentElement.dataset.theme = value ? "dark" : "light";
    try {
      localStorage.setItem("naphat-theme", value ? "dark" : "light");
    } catch {}
    window.dispatchEvent(new Event("portfolio-theme"));
  }
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="wordmark" aria-label="Naphat home">
          n<span className="wordmark-dot">.</span>
          <span className="wordmark-name">
            naphat<span className="muted"> / engineer</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="desktop-nav">
          {["About", "Experience", "Projects"].map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              className="nav-link"
            >
              {label}
            </Link>
          ))}
          <Link href="/#contact" className="nav-contact">
            Let’s talk <ArrowUpRight size={14} />
          </Link>
        </nav>
        <div className="nav-controls">
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="mobile-nav"
        >
          {["About", "Experience", "Projects", "Contact"].map((label) => (
            <Link
              key={label}
              href={`/#${label.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {label}
              <ArrowUpRight size={20} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
