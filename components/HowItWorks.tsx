"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Brain,
  UserCheck,
  CheckCircle2,
  Briefcase,
  MapPin,
  Wrench,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { clsx } from "clsx";

const customerSteps = [
  {
    icon: Camera,
    title: "Upload photo / video",
    body: "Snap a quick photo or short clip of your appliance issue.",
  },
  {
    icon: Brain,
    title: "AI diagnoses the issue",
    body: "Our model identifies the fault, severity, and likely root cause in seconds.",
  },
  {
    icon: UserCheck,
    title: "Match a verified pro",
    body: "We match you with the nearest background-verified technician — at a fixed price.",
  },
  {
    icon: CheckCircle2,
    title: "Repair done. Tracked.",
    body: "Live tracking, in-app chat, warranty + service history, all in one place.",
  },
];

const proSteps = [
  {
    icon: Briefcase,
    title: "Quick onboarding",
    body: "Verify your ID, skills, and bank details. Get verified in under 24 hours.",
  },
  {
    icon: MapPin,
    title: "Receive nearby jobs",
    body: "AI-matched jobs land in your dashboard — no chasing customers or hunting leads.",
  },
  {
    icon: Wrench,
    title: "Inventory & tools",
    body: "Manage parts, request stock, and get smart suggestions before every job.",
  },
  {
    icon: Wallet,
    title: "Earn transparently",
    body: "Daily payouts, clear commissions, and incentives for high-rated work.",
  },
];

type Mode = "customer" | "pro";

export function HowItWorks() {
  const [mode, setMode] = useState<Mode>("customer");
  const steps = mode === "customer" ? customerSteps : proSteps;

  return (
    <section id="how" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px glow-line" />
      <div className="container-zap">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-label">How it works</div>
          <h2 className="h-section">
            Built for both sides — <br className="hidden sm:block" />
            <span className="text-gradient-zap">customers and pros</span>
          </h2>
          <p className="mt-5 text-white/55 sm:text-lg">
            Whether you need a fix or you fix things for a living, ZapFix removes
            the friction.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md">
            <TabButton active={mode === "customer"} onClick={() => setMode("customer")}>
              For Customers
            </TabButton>
            <TabButton active={mode === "pro"} onClick={() => setMode("pro")}>
              For Professionals
            </TabButton>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <StepCard step={step} index={i + 1} />
                  {/* connector arrow to next step */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-[-14px] top-10 hidden h-px w-7 bg-gradient-to-r from-zap-500/60 to-transparent lg:block"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#download" className="btn-zap">
            {mode === "customer" ? "Download APK" : "Join as a Pro"}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
        active ? "text-navy-950" : "text-white/70 hover:text-white",
      )}
    >
      {active && (
        <motion.span
          layoutId="how-tab-bg"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          className="absolute inset-0 -z-10 rounded-full bg-zap-500"
        />
      )}
      {children}
    </button>
  );
}

function StepCard({
  step,
  index,
}: {
  step: { icon: React.ComponentType<{ className?: string }>; title: string; body: string };
  index: number;
}) {
  return (
    <div className="card-premium h-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-zap-500/30 bg-gradient-to-br from-zap-500/20 to-zap-500/5">
          <step.icon className="h-5 w-5 text-zap-400" />
        </div>
        <div className="font-display text-2xl font-extrabold text-white/10">
          {index.toString().padStart(2, "0")}
        </div>
      </div>
      <h3 className="font-display text-lg font-bold leading-tight">{step.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{step.body}</p>
    </div>
  );
}
