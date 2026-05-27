"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  Star,
  Clock,
  HeadphonesIcon,
  IndianRupee,
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Background verified",
    body: "Police clearance, ID + address verification before any professional gets on the platform.",
  },
  {
    icon: BadgeCheck,
    title: "Skill certified",
    body: "Every pro is tested and rated for the categories they serve.",
  },
  {
    icon: Star,
    title: "Continuously rated",
    body: "Real-time ratings after each job. Low-rated pros are removed quickly.",
  },
  {
    icon: Clock,
    title: "Punctual arrival",
    body: "Live ETA, on-time guarantee, and uniformed pros — like ordering a cab, but for repairs.",
  },
  {
    icon: IndianRupee,
    title: "Transparent pricing",
    body: "Fixed in-app quote. No haggling, no last-minute surprises.",
  },
  {
    icon: HeadphonesIcon,
    title: "Always-on support",
    body: "One tap to in-app support — before, during, and after every repair.",
  },
];

const profiles = [
  { name: "Rohit Sharma", role: "AC & Refrigeration", rating: 4.9, jobs: 1284, area: "Andheri" },
  { name: "Priya Iyer", role: "Electrical & Wiring", rating: 4.8, jobs: 932, area: "Bandra" },
  { name: "Arun Kumar", role: "Plumbing Expert", rating: 5.0, jobs: 1561, area: "Powai" },
];

export function Professionals() {
  return (
    <section id="pro" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px glow-line" />
      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-zap-500/10 blur-[140px]" />

      <div className="container-zap">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-label">Verified Professionals</div>
          <h2 className="h-section">
            Every pro on ZapFix is{" "}
            <span className="text-gradient-zap">someone you can trust</span> at your door.
          </h2>
          <p className="mt-5 text-white/55 sm:text-lg">
            Built for Indian families — verified, uniformed, punctual, and accountable.
          </p>
        </div>

        {/* Trust pillars */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card-premium"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zap-500/30 bg-zap-500/10">
                <p.icon className="h-5 w-5 text-zap-400" />
              </div>
              <h3 className="font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Profile cards */}
        <div className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <h3 className="font-display text-2xl font-bold">
              Meet a few of our top-rated{" "}
              <span className="text-gradient-zap">ZapPros</span>
            </h3>
            <div className="hidden text-sm text-white/50 sm:block">
              ⭐ 4.8 avg rating across 50,000+ jobs
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {profiles.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800/40 to-transparent p-6 transition-all duration-500 hover:border-zap-500/30 hover:shadow-glow-yellow-sm"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-zap-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-500 to-navy-800 font-display text-lg font-bold">
                      {p.name
                        .split(" ")
                        .map((s) => s[0])
                        .join("")}
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-zap-500 text-navy-950">
                      <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-white/50">{p.role}</div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  <Stat label="Rating" value={`${p.rating}★`} />
                  <Stat label="Jobs" value={p.jobs.toLocaleString("en-IN")} />
                  <Stat label="Area" value={p.area} />
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-[11px] text-emerald-300">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Background + ID verified
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] py-2.5">
      <div className="font-display text-sm font-bold text-white">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-white/40">{label}</div>
    </div>
  );
}
