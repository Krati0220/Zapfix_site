"use client";

import { motion } from "framer-motion";

const lines = [
  { label: "01", text: "Built for modern Indian homes." },
  { label: "02", text: "Designed to remove repair uncertainty." },
  { label: "03", text: "An AI-first service experience." },
  { label: "04", text: "Technology that brings trust back to home services." },
];

export function Vision() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* cinematic bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-[#08122a] to-navy-950" />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zap-500/15 blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/3 top-1/3 h-[400px] w-[400px] rounded-full bg-navy-500/30 blur-[120px]"
        />
        <div className="absolute inset-0 grid-bg opacity-30 mask-fade-bottom" />
      </div>

      <div className="container-zap relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="section-label">Our Vision</div>
          <h2 className="h-section">
            We&apos;re not building another services app.{" "}
            <br className="hidden sm:block" />
            We&apos;re building the{" "}
            <span className="text-gradient-zap">trust layer</span> for{" "}
            Indian homes.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {lines.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative flex items-start gap-6 border-t border-white/10 py-8 last:border-b sm:gap-10"
            >
              <span className="font-display text-sm font-bold text-zap-400 sm:text-base">
                {l.label}
              </span>
              <span className="flex-1 font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                <span className="shine-text">{l.text}</span>
              </span>
              <span className="hidden self-center text-3xl text-white/20 transition-all duration-500 group-hover:translate-x-2 group-hover:text-zap-400 sm:block">
                →
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="mx-auto max-w-2xl text-base text-white/55 sm:text-lg">
            ZapFix is the bet that millions of Indian households deserve a repair
            experience that is intelligent, accountable, and genuinely on their side.
          </p>
          <a href="#download" className="btn-zap mt-8">
            Be part of the shift
          </a>
        </motion.div>
      </div>
    </section>
  );
}
