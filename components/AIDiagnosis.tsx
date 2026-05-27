"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Activity, Cpu, ScanLine } from "lucide-react";

export function AIDiagnosis() {
  return (
    <section
      id="diagnosis"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      {/* bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-[#06112a] to-navy-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zap-500/15 blur-[140px]" />

      <div className="container-zap">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label">
              <Sparkles className="h-3.5 w-3.5" />
              AI Diagnosis
            </div>
            <h2 className="h-section">
              ChatGPT for{" "}
              <span className="text-gradient-zap">home repairs</span>
            </h2>
            <p className="mt-5 text-base text-white/60 sm:text-lg">
              Our model is trained on thousands of appliance fault patterns. Point
              your camera, and it instantly identifies the part at fault, severity,
              urgency, and a fair repair cost — before a technician even arrives.
            </p>

            <ul className="mt-8 space-y-4">
              <BulletItem
                icon={ScanLine}
                title="Vision-based fault detection"
                body="Computer vision picks up rust, leakage, broken components, and burn marks instantly."
              />
              <BulletItem
                icon={Activity}
                title="Confidence-scored results"
                body="Every diagnosis comes with a confidence score and an explanation you can trust."
              />
              <BulletItem
                icon={Cpu}
                title="Smart pricing"
                body="Fair, transparent estimates based on real market data for your city."
              />
            </ul>
          </motion.div>

          {/* RIGHT: AI diagnostic UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy-800/60 to-navy-950/80 p-6 backdrop-blur-xl shadow-premium">
              {/* corner accents */}
              <Corner pos="tl" />
              <Corner pos="tr" />
              <Corner pos="bl" />
              <Corner pos="br" />

              {/* Top bar */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zap-500/15">
                    <Sparkles className="h-3.5 w-3.5 text-zap-400" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    ZapFix AI · Live Scan
                  </span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Analyzing
                </div>
              </div>

              {/* Appliance wireframe area */}
              <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/80 to-navy-950">
                {/* Wireframe AC unit */}
                <svg
                  viewBox="0 0 400 260"
                  className="absolute inset-0 h-full w-full"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="wf" x1="0" y1="0" x2="400" y2="260">
                      <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {/* AC body */}
                  <rect
                    x="60"
                    y="60"
                    width="280"
                    height="120"
                    rx="14"
                    stroke="url(#wf)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="70"
                    y="70"
                    width="260"
                    height="100"
                    rx="8"
                    stroke="rgba(255,255,255,0.1)"
                    strokeDasharray="2 4"
                  />
                  {/* louvres */}
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <line
                      key={i}
                      x1="80"
                      x2="320"
                      y1={88 + i * 10}
                      y2={88 + i * 10}
                      stroke="rgba(255,255,255,0.15)"
                    />
                  ))}
                  {/* indicator dot */}
                  <circle cx="310" cy="170" r="3" fill="#f5b800" />
                </svg>

                {/* Scan line */}
                <div className="absolute inset-x-0 top-0 h-1.5 animate-scan rounded-full bg-gradient-to-r from-transparent via-zap-400 to-transparent shadow-glow-yellow-sm" />

                {/* Detection box */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute left-[55%] top-[58%] flex items-start"
                >
                  <div className="relative h-16 w-20 rounded-md border-2 border-zap-400 shadow-glow-yellow-sm">
                    <span className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-zap-400" />
                    <span className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-zap-400" />
                    <span className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-zap-400" />
                    <span className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-zap-400" />
                  </div>
                  <div className="ml-2 mt-1 rounded-md border border-zap-500/30 bg-navy-950/80 px-2 py-1 text-[10px] font-semibold text-zap-300 backdrop-blur-sm">
                    Fan motor · 94%
                  </div>
                </motion.div>

                {/* corner data overlays */}
                <div className="absolute left-3 top-3 text-[9px] font-mono uppercase tracking-widest text-white/40">
                  IR · 192×192
                </div>
                <div className="absolute right-3 bottom-3 text-[9px] font-mono uppercase tracking-widest text-zap-400/70">
                  v2.4 · live
                </div>
              </div>

              {/* Result rows */}
              <div className="mt-5 space-y-3">
                <ResultBar label="Cooling efficiency" value={28} tone="red" />
                <ResultBar label="Compressor health" value={62} tone="amber" />
                <ResultBar label="Refrigerant level" value={45} tone="amber" />
                <ResultBar label="Filter status" value={88} tone="green" />
              </div>

              {/* Recommendation card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-5 flex items-center justify-between rounded-2xl border border-zap-500/30 bg-zap-500/10 p-4"
              >
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-zap-400">
                    Recommendation
                  </div>
                  <div className="mt-1 text-sm font-semibold">
                    Fan motor replacement + gas top-up
                  </div>
                  <div className="text-xs text-white/60">
                    Est. cost · ₹2,400 – ₹3,200 · 90-day warranty
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zap-500 text-navy-950">
                  <Zap className="h-5 w-5" strokeWidth={2.5} />
                </div>
              </motion.div>
            </div>

            {/* floating chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="glass absolute -left-4 top-10 hidden rounded-full px-3 py-1.5 text-[11px] font-medium md:block"
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
              98% accuracy
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="glass absolute -right-4 bottom-16 hidden rounded-full px-3 py-1.5 text-[11px] font-medium md:block"
            >
              ⚡ &lt; 60s diagnosis
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BulletItem({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-zap-500/30 bg-zap-500/10">
        <Icon className="h-4 w-4 text-zap-400" />
      </div>
      <div>
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-1 text-sm text-white/55">{body}</p>
      </div>
    </li>
  );
}

function ResultBar({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "red" | "amber" | "green";
}) {
  const colors = {
    red: "from-red-400 to-red-500",
    amber: "from-amber-400 to-zap-500",
    green: "from-emerald-400 to-emerald-500",
  };
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-[11px]">
        <span className="text-white/60">{label}</span>
        <span className="font-semibold text-white">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${colors[tone]}`}
        />
      </div>
    </div>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const map = {
    tl: "left-3 top-3 border-l-2 border-t-2",
    tr: "right-3 top-3 border-r-2 border-t-2",
    bl: "left-3 bottom-3 border-l-2 border-b-2",
    br: "right-3 bottom-3 border-r-2 border-b-2",
  } as const;
  return <span className={`absolute h-4 w-4 border-zap-500/40 ${map[pos]}`} />;
}
