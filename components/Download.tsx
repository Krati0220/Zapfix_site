"use client";

import { motion } from "framer-motion";
import { Download as DownloadIcon, Smartphone, ShieldAlert, ArrowRight } from "lucide-react";
import { LogoMark } from "./Logo";
import { Magnetic } from "./interactive/Magnetic";
import { CountUp } from "./interactive/CountUp";

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      {/* bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zap-500/20 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container-zap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-navy-800/60 via-navy-900/40 to-navy-950 p-8 sm:p-14 lg:p-20"
        >
          {/* big background bolt */}
          <div className="pointer-events-none absolute -right-20 -top-20 hidden opacity-[0.08] lg:block">
            <LogoMark className="h-[420px] w-[420px]" />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="section-label">Get the app</div>
              <h2 className="h-section">
                The future of home repairs{" "}
                <span className="text-gradient-zap">is here.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base text-white/60 sm:text-lg">
                Download the ZapFix Android APK and experience AI-powered repairs
                with verified pros and transparent pricing — across India.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Magnetic strength={0.45}>
                  <a href="#" className="btn-zap group gradient-ring !py-4 !px-8 text-base">
                    <DownloadIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" strokeWidth={2.5} />
                    Download APK
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.3}>
                  <a href="#pro" className="btn-ghost !py-4 !px-8 text-base">
                    Join as Pro
                  </a>
                </Magnetic>
              </div>

              {/* disclaimer */}
              <div className="mt-6 flex max-w-md items-start gap-3 rounded-2xl border border-amber-400/20 bg-amber-400/5 p-4">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                <p className="text-xs leading-relaxed text-white/70">
                  Enable <span className="font-semibold text-white">Install from unknown sources</span>{" "}
                  on Android to install the APK. We&apos;re not on Play Store yet — that&apos;s a feature, not a bug.
                </p>
              </div>

              {/* metrics */}
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Metric label="To AI report">
                  &lt; <CountUp to={60} suffix="s" />
                </Metric>
                <Metric label="Diagnosis fee">₹0</Metric>
                <Metric label="Repair warranty">
                  <CountUp to={90} suffix=" day" />
                </Metric>
              </div>
            </div>

            {/* Floating phones */}
            <div className="relative flex h-[420px] items-center justify-center">
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [-3, -3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ rotate: "-6deg" }}
                className="absolute z-0"
              >
                <MiniPhone variant="back" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                className="relative z-10"
              >
                <MiniPhone variant="front" />
              </motion.div>

              {/* floating chip */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="glass absolute -left-2 top-10 flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold"
              >
                <Smartphone className="h-3 w-3 text-zap-400" /> APK 12.4 MB
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                className="glass absolute -right-2 bottom-12 rounded-full px-3 py-1.5 text-[11px] font-semibold text-zap-400"
              >
                Android 8+
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-xl font-bold text-white sm:text-2xl">{children}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/40">{label}</div>
    </div>
  );
}

function MiniPhone({ variant }: { variant: "front" | "back" }) {
  return (
    <div className="w-[200px] rounded-[2rem] border border-white/10 bg-gradient-to-b from-navy-700/70 to-navy-950 p-1.5 shadow-premium">
      <div className="relative h-[400px] overflow-hidden rounded-[1.7rem] bg-gradient-to-b from-navy-950 to-[#040816]">
        <div className="absolute left-1/2 top-2 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
        <div className="px-4 pb-4 pt-8">
          <div className="mb-3 flex items-center gap-2">
            <LogoMark className="h-6 w-6" />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-zap-400">
              ZapFix
            </span>
          </div>
          {variant === "front" ? (
            <>
              <div className="mb-2 rounded-xl border border-zap-500/30 bg-zap-500/10 p-3">
                <div className="text-[9px] font-semibold uppercase text-zap-400">
                  AI Diagnosis
                </div>
                <div className="mt-1 text-xs font-bold">AC Fan Motor</div>
                <div className="mt-0.5 text-[10px] text-white/60">94% confidence</div>
                <div className="absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-zap-400 to-transparent" />
              </div>
              <div className="space-y-1.5">
                <Mini label="Cost" value="₹2,840" tone="zap" />
                <Mini label="Pro" value="Rohit · 4.9★" />
                <Mini label="ETA" value="32 min" />
              </div>
              <button className="mt-3 w-full rounded-xl bg-zap-500 py-2 text-[10px] font-bold text-navy-950">
                Book Now
              </button>
            </>
          ) : (
            <>
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/60">
                Top categories
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {["AC", "Wash", "Fridge", "Plumb", "Elec", "Clean"].map((s) => (
                  <div
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[0.03] py-3 text-center text-[10px] text-white/70"
                  >
                    {s}
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-2.5 text-[9px] text-emerald-300">
                ✓ 12,400 jobs done this month
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Mini({ label, value, tone }: { label: string; value: string; tone?: "zap" }) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white/[0.04] px-2 py-1.5 text-[9px]">
      <span className="text-white/50">{label}</span>
      <span className={tone === "zap" ? "font-bold text-zap-400" : "font-semibold text-white/90"}>
        {value}
      </span>
    </div>
  );
}
