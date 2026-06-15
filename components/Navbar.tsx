"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Magnetic } from "./interactive/Magnetic";
import { clsx } from "clsx";

// Ordered to match scroll sequence:
// Hero → Problems → HowItWorks(#how) → AIDiagnosis(#diagnosis) →
// Professionals(#pro) → Features(#features) → Categories(#categories) →
// Screenshots → Download → Vision → Footer
const links = [
  { href: "#how", id: "how", label: "How it works" },
  { href: "#diagnosis", id: "diagnosis", label: "AI Diagnosis" },
  { href: "#pro", id: "pro", label: "For Pros" },
  { href: "#features", id: "features", label: "Features" },
  { href: "#categories", id: "categories", label: "Services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // Sticky-bg toggle
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav link whose section is currently in view
  useEffect(() => {
    const ids = links.map((l) => l.id);
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (targets.length === 0) return;

    // Track current ratios so we can pick the most-visible section
    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        }
        // Pick the section with the highest visibility ratio
        let bestId: string | null = null;
        let bestRatio = 0;
        for (const [id, r] of ratios) {
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }
        // Near the very top, clear active so nothing is highlighted on the hero
        if (window.scrollY < 200) {
          setActive(null);
          return;
        }
        if (bestId) setActive(bestId);
      },
      {
        // Trigger as a section crosses the upper-middle of the viewport
        rootMargin: "-25% 0px -50% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "mx-auto mt-3 flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:mt-4 sm:px-5 sm:py-3",
          scrolled
            ? "border border-white/10 bg-navy-950/80 backdrop-blur-xl shadow-premium"
            : "border border-transparent bg-transparent",
          "mx-3 sm:mx-6 lg:mx-auto",
        )}
      >
        <a href="#top" className="flex items-center gap-2">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-zap-400"
                    : "text-white/70 hover:text-white",
                )}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-x-4 -bottom-0.5 h-px rounded-full bg-zap-400/80"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#pro" className="btn-ghost py-2.5 text-xs">
            Join as Pro
          </a>
          <Magnetic strength={0.4}>
            <a href="#download" className="btn-zap py-2.5 text-xs">
              <Download className="h-3.5 w-3.5" strokeWidth={2.5} />
              Download APK
            </a>
          </Magnetic>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 backdrop-blur-md lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-3 mt-2 rounded-3xl border border-white/10 bg-navy-950/95 p-5 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => {
                const isActive = active === l.id;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={clsx(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "text-zap-400"
                        : "text-white/80 hover:text-white",
                    )}
                  >
                    <span>{l.label}</span>
                    {isActive && (
                      <span className="h-1 w-1 rounded-full bg-zap-400" />
                    )}
                  </a>
                );
              })}
              <div className="mt-3 flex flex-col gap-2">
                <a href="#pro" onClick={() => setOpen(false)} className="btn-ghost">
                  Join as Pro
                </a>
                <a href="#download" onClick={() => setOpen(false)} className="btn-zap">
                  <Download className="h-4 w-4" />
                  Download APK
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
