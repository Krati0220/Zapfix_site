"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { Magnetic } from "./interactive/Magnetic";
import { CountUp } from "./interactive/CountUp";
import { Tilt } from "./interactive/Tilt";

const floatingTags = [
  { label: "AC Cooling Issue", side: "left", x: "4%", y: "10%", delay: 0 },
  { label: "Water Leakage", side: "right", x: "4%", y: "6%", delay: 0.4 },
  { label: "Motor Fault Detected", side: "right", x: "0%", y: "52%", delay: 0.8 },
  { label: "AI Diagnosis Complete", side: "left", x: "0%", y: "60%", delay: 1.2 },
  { label: "Transparent Pricing", side: "right", x: "8%", y: "86%", delay: 1.6 },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Gentle parallax: phone drifts up, copy drifts down as you scroll past.
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden pb-24 pt-32 sm:pt-36 lg:pt-40"
    >
      {/* Background layers */}
      <div className="spotlight" />
      <motion.div
        style={{ opacity: heroFade }}
        className="absolute inset-0 -z-10 grid-bg mask-fade-bottom opacity-50"
      />
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-1/4 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-zap-500/15 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.08, 1, 1.08], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-1/4 top-0 -z-10 h-[600px] w-[600px] rounded-full bg-navy-700/40 blur-[140px]"
      />

      {/* Floating particles */}
      {[
        { size: 3, left: "12%", top: "18%", dur: 7, delay: 0 },
        { size: 2, left: "25%", top: "55%", dur: 9, delay: 1.2 },
        { size: 4, left: "78%", top: "22%", dur: 6, delay: 0.5 },
        { size: 2, left: "60%", top: "70%", dur: 8, delay: 2 },
        { size: 3, left: "88%", top: "48%", dur: 11, delay: 0.8 },
        { size: 2, left: "45%", top: "12%", dur: 7.5, delay: 1.5 },
      ].map((p, i) => (
        <motion.span
          key={i}
          animate={{ y: [0, -16, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          className="pointer-events-none absolute -z-10 rounded-full bg-zap-400"
        />
      ))}

      <div className="container-zap relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Left */}
          <motion.div style={{ y: copyY }} className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="section-label"
            >
              <Sparkles className="h-3.5 w-3.5" />
              India&apos;s first AI-powered repair platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="h-display"
            >
              <span className="text-gradient-white block">Home Repairs.</span>
              <span className="block">
                Now Powered by{" "}
                <span className="relative inline-block">
                  <span className="text-gradient-zap">AI.</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-zap-500/40 blur-[6px]" />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
            >
              Upload a photo or video of your appliance issue and get{" "}
              <span className="text-white">instant AI-powered diagnosis</span>,
              transparent pricing, and verified professionals at your door.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Magnetic strength={0.45}>
                <a href="#download" className="btn-zap group gradient-ring">
                  <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" strokeWidth={2.5} />
                  Download APK
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.5} />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href="#pro" className="btn-ghost">
                  Join as Pro
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/45"
            >
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Android APK available now
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-zap-400" />
                Verified professionals
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-zap-400" />
                AI-powered diagnosis
              </span>
            </motion.div>

            {/* trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex items-center gap-6 border-t border-white/10 pt-6"
            >
              <Stat label="Diagnosis accuracy">
                <CountUp to={98} suffix="%" />
              </Stat>
              <div className="h-8 w-px bg-white/10" />
              <Stat label="Verified pros">
                <CountUp to={4.9} decimals={1} suffix="★" />
              </Stat>
              <div className="h-8 w-px bg-white/10" />
              <Stat label="To AI report">
                &lt; <CountUp to={60} suffix="s" />
              </Stat>
            </motion.div>
          </motion.div>

          {/* Right: phone + floating tags */}
          <motion.div style={{ y: phoneY }} className="relative flex items-center justify-center">
            {/* glow */}
            <div className="absolute h-[420px] w-[420px] rounded-full bg-zap-500/20 blur-[100px]" />
            <div className="absolute h-[300px] w-[300px] rounded-full bg-navy-500/30 blur-[80px]" />

            <Tilt max={12} scale={1.03}>
              <PhoneMockup />
            </Tilt>

            {/* Floating tags */}
            {floatingTags.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.8 + t.delay * 0.2, duration: 0.6 }}
                style={
                  t.side === "left"
                    ? { left: t.x, top: t.y }
                    : { right: t.x, top: t.y }
                }
                className="pointer-events-none absolute hidden lg:block"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                  className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-medium text-white/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-zap-400 shadow-glow-yellow-sm" />
                  {t.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy-950" />
    </section>
  );
}

function Stat({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold text-white">{children}</div>
      <div className="text-[11px] uppercase tracking-wider text-white/40">{label}</div>
    </div>
  );
}
