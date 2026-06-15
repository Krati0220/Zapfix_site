"use client";

import { motion } from "framer-motion";
import {
  XCircle,
  HelpCircle,
  Banknote,
  RotateCcw,
  ShieldAlert,
  Clock4,
  ArrowRight,
} from "lucide-react";
import { SpotlightCard } from "./interactive/SpotlightCard";

const problems = [
  {
    icon: HelpCircle,
    title: "Random diagnosis",
    body: "Every technician says something different. No standard. No clarity.",
  },
  {
    icon: ShieldAlert,
    title: "No accountability",
    body: "Once they leave, there's no one to call back. Repairs vanish into thin air.",
  },
  {
    icon: Banknote,
    title: "Hidden pricing",
    body: "Final bill always higher than the quote. Surprise charges every time.",
  },
  {
    icon: RotateCcw,
    title: "Repeat visits",
    body: "Same issue. Same call. Same money — only to break again next week.",
  },
  {
    icon: XCircle,
    title: "Unverified technicians",
    body: "Strangers walking into your home with zero background checks.",
  },
  {
    icon: Clock4,
    title: "Delayed repairs",
    body: "Booked at 10, technician shows up at 6 — if at all. Your day is gone.",
  },
];

export function Problems() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-[#08122a] to-navy-950" />
      <div className="pointer-events-none absolute -left-40 top-1/2 -z-10 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="container-zap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="section-label !border-red-400/30 !bg-red-400/10 !text-red-300">
            The Problem
          </div>
          <h2 className="h-section">
            Why home repairs feel{" "}
            <span className="text-gradient-zap">broken</span> today
          </h2>
          <p className="mt-5 text-base text-white/55 sm:text-lg">
            For millions of Indian households, calling a technician means uncertainty,
            inflated bills, and lost trust. We&apos;ve been there too.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <SpotlightCard
              key={p.title}
              delay={i * 0.06}
              glow="rgba(248,113,113,0.15)"
              className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors duration-500 hover:border-white/15"
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-red-400/20 bg-red-400/10 text-red-300"
              >
                <p.icon className="h-5 w-5" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{p.body}</p>
              <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </SpotlightCard>
          ))}
        </div>

        {/* Transition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mt-20 overflow-hidden rounded-[2rem] border border-zap-500/30 bg-gradient-to-br from-zap-500/15 via-zap-500/5 to-transparent p-8 sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-zap-500/30 blur-[80px]" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <div className="mb-3 chip !border-zap-500/40 !bg-zap-500/15 !text-zap-300">
                The shift
              </div>
              <h3 className="font-display text-2xl font-bold sm:text-3xl">
                With ZapFix, repairs become{" "}
                <span className="text-gradient-zap">predictable</span>.
              </h3>
              <p className="mt-2 max-w-xl text-white/60">
                One platform. AI diagnosis. Verified pros. Fixed pricing. Zero guesswork.
              </p>
            </div>
            <a href="#how" className="btn-zap shrink-0">
              See how it works
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
