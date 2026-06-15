"use client";

import { motion } from "framer-motion";
import { SpotlightCard } from "./interactive/SpotlightCard";
import {
  Radar,
  Sparkles,
  UserCheck,
  Receipt,
  MessageSquare,
  History,
  Gift,
  PackageCheck,
  Bell,
} from "lucide-react";

const features = [
  {
    icon: Radar,
    title: "Real-time job matching",
    body: "Smart routing pairs you with the closest, best-rated pro in seconds.",
  },
  {
    icon: Sparkles,
    title: "AI issue diagnosis",
    body: "Photo or video in, fault + fix + price out. Before anyone even arrives.",
  },
  {
    icon: UserCheck,
    title: "Verified professionals",
    body: "Background-checked, skill-tested, and continuously rated.",
  },
  {
    icon: Receipt,
    title: "Transparent pricing",
    body: "City-fair fixed quotes, no haggling, no surprise add-ons.",
  },
  {
    icon: MessageSquare,
    title: "In-app chat",
    body: "Talk to your pro before, during, and after the job — all in one place.",
  },
  {
    icon: History,
    title: "Service history",
    body: "Every repair, receipt, and part — saved forever.",
  },
  {
    icon: Gift,
    title: "Receipts & rewards",
    body: "Digital invoices and loyalty rewards for every booking you make.",
  },
  {
    icon: PackageCheck,
    title: "Inventory for pros",
    body: "Track parts, request stock, and never lose a job to missing tools again.",
  },
  {
    icon: Bell,
    title: "Maintenance reminders",
    body: "Smart nudges before your AC dies in May or your geyser breaks in December.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-[#08122a] to-navy-950" />
      <div className="container-zap">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="section-label">Platform Features</div>
          <h2 className="h-section">
            Every tool for a{" "}
            <span className="text-gradient-zap">predictable repair</span>
          </h2>
          <p className="mt-5 text-white/55 sm:text-lg">
            Built end-to-end for both sides of the marketplace — buyers and pros.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f, i) => (
            <SpotlightCard
              key={f.title}
              delay={(i % 4) * 0.05}
              className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition-colors duration-500 hover:border-zap-500/30"
            >
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 12 }}
                className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zap-500/30 bg-zap-500/10 transition-colors duration-500 group-hover:bg-zap-500/20"
              >
                <f.icon className="h-4.5 w-4.5 text-zap-400" />
              </motion.div>
              <h3 className="font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-[13px] leading-relaxed text-white/55">
                {f.body}
              </p>
              {/* hover shimmer */}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-zap-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
