"use client";

import { motion } from "framer-motion";
import { LogoMark } from "./Logo";
import { CheckCircle2, Sparkles, User, Wrench, Zap } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      {/* Outer phone shell */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative rounded-[3rem] border border-white/10 bg-gradient-to-b from-navy-800 to-navy-950 p-2 shadow-premium"
      >
        <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent opacity-50" />
        {/* Inner screen */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-navy-950 to-[#040816]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

          <div className="relative h-[600px] px-5 pb-6 pt-10">
            {/* Status bar */}
            <div className="mb-5 flex items-center justify-between text-[10px] font-medium text-white/60">
              <span>9:41</span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-3 rounded-sm bg-white/40" />
                <span className="h-2 w-1 rounded-sm bg-white/40" />
                <span className="h-2 w-4 rounded-sm bg-white/60" />
              </span>
            </div>

            {/* App header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <LogoMark className="h-7 w-7" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Hello</div>
                  <div className="text-sm font-semibold">Aarav</div>
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-zap-400 to-zap-700 ring-2 ring-zap-500/30">
                <User className="h-4.5 w-4.5 text-navy-950" strokeWidth={2.5} />
              </div>
            </div>

            {/* AI diagnosis card */}
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="relative mb-4 overflow-hidden rounded-2xl border border-zap-500/30 bg-gradient-to-br from-zap-500/15 to-transparent p-4"
            >
              <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-zap-500/20 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-zap-300">
                <Sparkles className="h-2.5 w-2.5" />
                AI
              </div>
              <div className="mb-2 text-[10px] uppercase tracking-widest text-zap-400">
                Diagnosis Complete
              </div>
              <div className="mb-3 text-sm font-semibold leading-tight">
                AC Compressor Fault Detected
              </div>
              <div className="space-y-1.5">
                <Row label="Confidence" value="94%" tone="zap" />
                <Row label="Severity" value="Medium" />
                <Row label="Est. Cost" value="₹2,400 – 3,200" />
              </div>
              {/* scan line */}
              <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-zap-300 to-transparent" />
            </motion.div>

            {/* Quick actions */}
            <div className="mb-4 grid grid-cols-2 gap-2">
              <ActionCard icon={Wrench} label="Book Pro" />
              <ActionCard icon={Zap} label="Re-scan" />
            </div>

            {/* Verified pro */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="mb-2 text-[10px] uppercase tracking-widest text-white/40">
                Top match nearby
              </div>
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-400 to-navy-700 ring-2 ring-white/10">
                  <User className="h-5 w-5 text-white/90" strokeWidth={2.2} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-navy-900 bg-emerald-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold">Rohit S.</div>
                  <div className="flex items-center gap-1 text-[10px] text-white/50">
                    <CheckCircle2 className="h-3 w-3 text-zap-400" />
                    Verified · 4.9 ★ · 1.2 km
                  </div>
                </div>
                <button className="rounded-full bg-zap-500 px-3 py-1 text-[10px] font-bold text-navy-950">
                  Book
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Side reflection */}
      <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
    </div>
  );
}

function Row({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "zap";
}) {
  return (
    <div className="flex items-center justify-between text-[10px]">
      <span className="text-white/50">{label}</span>
      <span
        className={
          tone === "zap"
            ? "font-bold text-zap-400"
            : "font-medium text-white/90"
        }
      >
        {value}
      </span>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zap-500/15">
        <Icon className="h-3.5 w-3.5 text-zap-400" />
      </div>
      <span className="text-[11px] font-medium">{label}</span>
    </div>
  );
}
