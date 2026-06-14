"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronRight, BookOpen, Mail } from "lucide-react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { clsx } from "clsx";

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  badge: string;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
  otherLegal?: { label: string; href: string };
}

export function LegalPage({
  title,
  badge,
  lastUpdated,
  intro,
  sections,
  otherLegal,
}: LegalPageProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const sorted = visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveId(sorted[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setTocOpen(false);
  };

  const titleWords = title.split(" ");

  return (
    <div className="min-h-screen bg-navy-950">
      <ScrollProgress />
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden pb-14 pt-28 sm:pb-20 sm:pt-36">
        {/* Animated background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070f24] via-[#08122a] to-navy-950" />
        <div className="spotlight" />
        <div className="absolute inset-0 -z-10 grid-bg mask-fade-bottom opacity-20" />

        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-1/4 top-1/3 -z-10 h-[500px] w-[500px] rounded-full bg-zap-500/20 blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-1/4 -top-10 -z-10 h-[600px] w-[600px] rounded-full bg-navy-500/25 blur-[150px]"
        />

        <div className="container-zap relative">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/50 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to ZapFix
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-label"
          >
            <BookOpen className="h-3.5 w-3.5" />
            {badge}
          </motion.div>

          {/* Title — word-by-word */}
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: "easeOut" }}
                className="mr-3 inline-block"
              >
                {i === titleWords.length - 1 ? (
                  <span className="text-gradient-zap">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Last updated + cross-link */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-5 flex flex-wrap items-center gap-4"
          >
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/40">
              {lastUpdated}
            </span>
            {otherLegal && (
              <Link
                href={otherLegal.href}
                className="text-xs text-zap-400/70 underline underline-offset-2 transition-colors hover:text-zap-400"
              >
                {otherLegal.label} →
              </Link>
            )}
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/55"
          >
            {intro}
          </motion.div>
        </div>
      </section>

      {/* Glow divider */}
      <div className="relative h-px">
        <div className="glow-line absolute inset-0" />
      </div>

      {/* ─── Main content ─── */}
      <section className="relative py-12 sm:py-18">
        <div className="container-zap">
          <div className="lg:grid lg:grid-cols-[270px_1fr] lg:gap-14 xl:gap-20">

            {/* ── Desktop sticky TOC ── */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="sticky top-28">
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-zap-400">
                  Table of Contents
                </p>
                <nav className="flex flex-col gap-0.5">
                  {sections.map((section) => {
                    const isActive = activeId === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={clsx(
                          "group flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13px] transition-all duration-300",
                          isActive
                            ? "border border-zap-500/25 bg-zap-500/10 text-zap-400"
                            : "border border-transparent text-white/40 hover:bg-white/[0.04] hover:text-white/70",
                        )}
                      >
                        <span
                          className={clsx(
                            "shrink-0 font-mono text-[9px] font-bold transition-colors duration-300",
                            isActive
                              ? "text-zap-500"
                              : "text-white/20 group-hover:text-white/40",
                          )}
                        >
                          {section.number}
                        </span>
                        <span className="flex-1 leading-snug">{section.title}</span>
                        {isActive && (
                          <motion.span layoutId="toc-chevron" className="shrink-0">
                            <ChevronRight className="h-3 w-3 text-zap-400" />
                          </motion.span>
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Contact card */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-8 rounded-2xl border border-zap-500/20 bg-gradient-to-br from-zap-500/8 to-transparent p-4"
                >
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-zap-400">
                    <Mail className="h-3 w-3" />
                    Questions?
                  </div>
                  <p className="text-xs leading-relaxed text-white/50">
                    Contact our team at{" "}
                    <a
                      href="mailto:support.zapfix@gmail.com"
                      className="text-zap-400 transition-colors hover:text-zap-300"
                    >
                      support.zapfix@gmail.com
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.aside>

            {/* ── Mobile TOC accordion ── */}
            <div className="mb-8 lg:hidden">
              <button
                onClick={() => setTocOpen(!tocOpen)}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/70 transition-colors hover:text-white"
              >
                <span>Table of Contents</span>
                <ChevronRight
                  className={clsx(
                    "h-4 w-4 transition-transform duration-300",
                    tocOpen && "rotate-90",
                  )}
                />
              </button>
              <AnimatePresence>
                {tocOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <nav className="mt-2 flex flex-col gap-0.5 rounded-2xl border border-white/10 bg-navy-900/50 p-3">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={clsx(
                            "flex items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-all",
                            activeId === section.id
                              ? "text-zap-400"
                              : "text-white/50 hover:text-white",
                          )}
                        >
                          <span className="font-mono text-[9px] text-white/30">
                            {section.number}
                          </span>
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── Section cards ── */}
            <div className="flex flex-col gap-5">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="group scroll-mt-28 overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:border-white/[0.12] sm:p-8"
                >
                  {/* Section header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zap-500/30 bg-zap-500/10 font-mono text-[11px] font-bold text-zap-400 transition-all duration-300 group-hover:border-zap-500/50 group-hover:bg-zap-500/15">
                      {section.number}
                    </div>
                    <h2 className="font-display text-xl font-bold sm:text-2xl">
                      {section.title}
                    </h2>
                  </div>

                  {/* Bottom shimmer line on hover */}
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zap-500/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="space-y-4 text-[14px] leading-relaxed text-white/60">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              {/* Bottom acknowledgement */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-zap-500/20 bg-gradient-to-br from-zap-500/10 via-zap-500/5 to-transparent p-6 sm:p-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-zap-500/20 blur-[60px]" />
                <p className="relative text-sm leading-relaxed text-white/65">
                  By accessing or using ZapFix, you acknowledge that you have read,
                  understood, and agreed to this document and all its terms.
                </p>
                <Link
                  href="/"
                  className="btn-zap mt-5 inline-flex"
                >
                  Return to ZapFix
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Content helper components (exported for use in page files) ─── */

export function LP({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] leading-relaxed text-white/60">{children}</p>;
}

export function LH({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="pt-2 font-display text-[15px] font-semibold text-white">
      {children}
    </h4>
  );
}

export function LUL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2">{children}</ul>;
}

export function LLI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14px] text-white/60">
      <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-zap-400" />
      <span>{children}</span>
    </li>
  );
}

export function LStrong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

export function LLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zap-400 underline underline-offset-2 transition-colors hover:text-zap-300"
    >
      {children}
    </a>
  );
}
