"use client";

import { motion } from "framer-motion";
import { LogoMark } from "./Logo";
import {
  Camera,
  Sparkles,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Receipt,
} from "lucide-react";

const screens = [
  { type: "home" },
  { type: "diagnosis" },
  { type: "tracking" },
  { type: "pro" },
  { type: "pricing" },
] as const;

export function Screenshots() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-[#06112a] to-navy-950" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-zap-500/10 blur-[140px]" />

      <div className="container-zap">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-label">In the App</div>
          <h2 className="h-section">
            Designed for the way{" "}
            <span className="text-gradient-zap">Indians live</span>
          </h2>
          <p className="mt-5 text-white/55 sm:text-lg">
            Beautifully crafted screens that make repairs feel as easy as ordering food.
          </p>
        </div>

        <div className="relative mt-16 -mx-5 sm:-mx-8 lg:mx-0 lg:overflow-hidden lg:mask-fade-x">
          <div className="flex snap-x snap-mandatory items-end gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 sm:px-8 lg:justify-center lg:overflow-visible lg:px-0">
            {screens.map((s, i) => (
              <motion.div
                key={s.type}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{ transform: `translateY(${i % 2 === 0 ? 0 : 16}px)` }}
                className="shrink-0 snap-center"
              >
                <Screen variant={s.type} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* legend */}
        <div className="mt-10 hidden grid-cols-5 gap-2 text-center text-xs text-white/40 sm:grid">
          <span>Home</span>
          <span>AI Diagnosis</span>
          <span>Job tracking</span>
          <span>Pro dashboard</span>
          <span>Pricing</span>
        </div>
        <div className="mt-4 text-center text-xs text-white/40 sm:hidden">
          Swipe to explore →
        </div>
      </div>
    </section>
  );
}

function Screen({ variant }: { variant: (typeof screens)[number]["type"] }) {
  return (
    <div className="relative w-[180px] rounded-[2rem] border border-white/10 bg-gradient-to-b from-navy-700/60 to-navy-950 p-1.5 shadow-premium sm:w-[200px]">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-navy-950 to-[#040816]">
        <div className="h-[380px] px-3 pb-3 pt-6 sm:h-[420px]">
          <div className="mb-3 flex items-center justify-between text-[8px] text-white/40">
            <span>9:41</span>
            <span>●●●</span>
          </div>
          <ScreenContent variant={variant} />
        </div>
      </div>
    </div>
  );
}

function ScreenContent({ variant }: { variant: (typeof screens)[number]["type"] }) {
  if (variant === "home")
    return (
      <div>
        <div className="mb-3 flex items-center gap-1.5">
          <LogoMark className="h-5 w-5" />
          <span className="text-[9px] font-semibold uppercase tracking-widest text-zap-400">
            ZapFix
          </span>
        </div>
        <div className="mb-2 text-[10px] text-white/40">Hello, Aarav</div>
        <div className="mb-3 rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
          <div className="flex items-center gap-2">
            <Camera className="h-3 w-3 text-zap-400" />
            <span className="text-[9px] text-white/80">Scan an appliance</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {["AC", "Wash", "Fridge", "Elec", "Plumb", "Clean"].map((s) => (
            <div
              key={s}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-1.5 text-center text-[8px] text-white/70"
            >
              {s}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-zap-500/30 bg-zap-500/10 p-2.5">
          <div className="text-[9px] font-semibold text-zap-400">Recent</div>
          <div className="mt-1 text-[8px] text-white/70">AC service · Apr 14</div>
        </div>
      </div>
    );

  if (variant === "diagnosis")
    return (
      <div>
        <div className="mb-2 flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-zap-400" />
          <span className="text-[9px] font-semibold uppercase tracking-widest text-zap-400">
            AI Diagnosis
          </span>
        </div>
        <div className="relative mb-3 h-24 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950">
          <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-zap-400 to-transparent" />
          <div className="absolute left-[40%] top-[40%] h-6 w-8 rounded border-2 border-zap-400" />
        </div>
        <div className="space-y-1.5">
          <Bar label="Fault" value="Fan motor" />
          <Bar label="Confidence" value="94%" tone="zap" />
          <Bar label="Severity" value="Medium" />
          <Bar label="Estimate" value="₹2.4–3.2k" />
        </div>
        <button className="mt-3 w-full rounded-lg bg-zap-500 py-2 text-[9px] font-bold text-navy-950">
          Book a Pro
        </button>
      </div>
    );

  if (variant === "tracking")
    return (
      <div>
        <div className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-zap-400">
          Pro on the way
        </div>
        <div className="relative mb-3 h-28 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900">
          <svg viewBox="0 0 200 140" className="absolute inset-0 h-full w-full">
            <path
              d="M10 110 Q 60 60 110 80 T 190 30"
              stroke="#f5b800"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
            <circle cx="10" cy="110" r="4" fill="#f5b800" />
            <circle cx="190" cy="30" r="4" fill="#fff" />
          </svg>
          <MapPin className="absolute right-3 top-2 h-3 w-3 text-zap-400" />
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-zap-500" />
            <div>
              <div className="text-[8px] font-semibold">Rohit · 4.9 ★</div>
              <div className="text-[7px] text-white/50">ETA 8 min</div>
            </div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-2 py-1.5 text-[8px] text-emerald-300">
          <CheckCircle2 className="h-2.5 w-2.5" /> Verified pro assigned
        </div>
      </div>
    );

  if (variant === "pro")
    return (
      <div>
        <div className="mb-2 text-[9px] font-semibold uppercase tracking-widest text-zap-400">
          Pro Dashboard
        </div>
        <div className="mb-2 grid grid-cols-2 gap-1.5">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2">
            <div className="text-[7px] uppercase text-white/40">Today</div>
            <div className="font-display text-sm font-bold">₹4,820</div>
          </div>
          <div className="rounded-lg border border-zap-500/30 bg-zap-500/10 p-2">
            <div className="text-[7px] uppercase text-zap-400">Jobs</div>
            <div className="font-display text-sm font-bold">6</div>
          </div>
        </div>
        <div className="mb-2 flex items-center gap-1 rounded-lg border border-emerald-400/30 bg-emerald-400/5 px-2 py-1 text-[8px] text-emerald-300">
          <TrendingUp className="h-2.5 w-2.5" /> +18% this week
        </div>
        {["AC service · Andheri", "Plumbing · Bandra", "Geyser · Khar"].map((j) => (
          <div
            key={j}
            className="mb-1 flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5 text-[8px]"
          >
            <span className="text-white/80">{j}</span>
            <span className="rounded-full bg-zap-500/20 px-1.5 py-0.5 text-[7px] font-semibold text-zap-300">
              New
            </span>
          </div>
        ))}
      </div>
    );

  // pricing
  return (
    <div>
      <div className="mb-2 flex items-center gap-1">
        <Receipt className="h-3 w-3 text-zap-400" />
        <span className="text-[9px] font-semibold uppercase tracking-widest text-zap-400">
          Final Quote
        </span>
      </div>
      <div className="rounded-xl border border-zap-500/30 bg-gradient-to-br from-zap-500/15 to-transparent p-3">
        <div className="text-[8px] text-white/50">AC fan motor + gas</div>
        <div className="mt-1 font-display text-2xl font-bold text-zap-400">₹2,840</div>
        <div className="text-[7px] text-white/40">All inclusive · 90d warranty</div>
      </div>
      <div className="mt-3 space-y-1.5 text-[8px]">
        {[
          ["Diagnosis", "Free"],
          ["Parts", "₹1,640"],
          ["Labour", "₹900"],
          ["GST", "₹300"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <span className="text-white/50">{k}</span>
            <span className="text-white/90">{v}</span>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full rounded-lg bg-zap-500 py-2 text-[9px] font-bold text-navy-950">
        Pay & Confirm
      </button>
    </div>
  );
}

function Bar({ label, value, tone }: { label: string; value: string; tone?: "zap" }) {
  return (
    <div className="flex items-center justify-between text-[8px]">
      <span className="text-white/50">{label}</span>
      <span className={tone === "zap" ? "font-bold text-zap-400" : "text-white/80"}>
        {value}
      </span>
    </div>
  );
}
