"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { clsx } from "clsx";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#diagnosis", label: "AI Diagnosis" },
  { href: "#features", label: "Features" },
  { href: "#categories", label: "Services" },
  { href: "#pro", label: "For Pros" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href="#pro" className="btn-ghost py-2.5 text-xs">
            Join as Pro
          </a>
          <a href="#download" className="btn-zap py-2.5 text-xs">
            <Download className="h-3.5 w-3.5" strokeWidth={2.5} />
            Download APK
          </a>
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
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
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
