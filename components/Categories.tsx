"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  WashingMachine,
  Refrigerator,
  Zap,
  Wrench,
  Key,
  Sparkles,
  Sofa,
  Paintbrush,
} from "lucide-react";

const categories = [
  { icon: Snowflake, label: "AC Repair", tag: "Most booked" },
  { icon: WashingMachine, label: "Washing Machine" },
  { icon: Refrigerator, label: "Refrigerator" },
  { icon: Zap, label: "Electrical" },
  { icon: Wrench, label: "Plumbing" },
  { icon: Key, label: "Keymaker" },
  { icon: Sparkles, label: "Home Cleaning" },
  { icon: Sofa, label: "Furniture" },
  { icon: Paintbrush, label: "Painting" },
];

export function Categories() {
  return (
    <section id="categories" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px glow-line" />
      <div className="container-zap">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="section-label">Services</div>
          <h2 className="h-section">
            One app for{" "}
            <span className="text-gradient-zap">every home need</span>
          </h2>
          <p className="mt-5 text-white/55 sm:text-lg">
            From a broken AC at midnight to weekend painting — we&apos;ve got the right pro.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {categories.map((c, i) => (
            <motion.a
              href="#download"
              key={c.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex items-center gap-4 overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-navy-800/40 via-navy-900/20 to-transparent p-5 transition-all duration-500 hover:border-zap-500/40 hover:shadow-glow-yellow-sm sm:p-6"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-zap-500/0 blur-2xl transition-all duration-500 group-hover:bg-zap-500/20" />
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-zap-500/30 bg-gradient-to-br from-zap-500/20 to-zap-500/5 transition-all duration-500 group-hover:from-zap-500/30 group-hover:to-zap-500/10">
                <c.icon className="h-6 w-6 text-zap-400 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex-1">
                <div className="font-display text-base font-semibold sm:text-lg">
                  {c.label}
                </div>
                {c.tag && (
                  <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-zap-400">
                    <span className="h-1 w-1 rounded-full bg-zap-400" />
                    {c.tag}
                  </div>
                )}
              </div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="opacity-30 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100"
              >
                <path
                  d="M7 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* marquee bar */}
        <div className="relative mt-14 overflow-hidden mask-fade-x">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-12">
                {[
                  "Same-day repairs",
                  "Verified pros",
                  "Fixed pricing",
                  "Live tracking",
                  "AI diagnosis",
                  "24×7 support",
                ].map((t) => (
                  <div
                    key={t + dup}
                    className="flex items-center gap-3 text-sm font-medium text-white/40"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zap-500" />
                    {t}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
