"use client";

import { motion } from "framer-motion";
import { Download, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";

/* Custom X (formerly Twitter) brand icon */
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 pb-10 pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px glow-line" />

      {/* Animated background glow */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zap-500/20 blur-[160px]"
      />

      <div className="container-zap relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants}>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-white/55">
              India&apos;s AI-powered home services platform. Built to bring
              trust, transparency, and speed back to everyday repairs.
            </p>
            <a href="#download" className="btn-zap mt-6 !py-3 text-xs">
              <Download className="h-3.5 w-3.5" strokeWidth={2.5} />
              Download APK
            </a>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <FooterCol title="Product">
              <FooterLink href="#how">How it works</FooterLink>
              <FooterLink href="#diagnosis">AI Diagnosis</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#categories">Services</FooterLink>
              <FooterLink href="#download">Download</FooterLink>
            </FooterCol>
          </motion.div>

          {/* For Pros */}
          <motion.div variants={itemVariants}>
            <FooterCol title="For Pros">
              <FooterLink href="#pro">Join as Pro</FooterLink>
              <FooterLink href="#">Pro app</FooterLink>
              <FooterLink href="#">Earnings & payouts</FooterLink>
              <FooterLink href="#">Pro support</FooterLink>
            </FooterCol>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <FooterCol title="Company">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="mailto:support.zapfix@gmail.com">
                support.zapfix@gmail.com
              </FooterLink>
            </FooterCol>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center"
        >
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} ZapFix Technologies Pvt. Ltd. ·{" "}
            <Link href="/privacy-policy" className="transition-colors hover:text-white">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>{" "}
            ·{" "}
            <a href="#" className="hover:text-white transition-colors">
              Refunds
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Social
              icon={Instagram}
              href="https://www.instagram.com/zapfixapp/"
              label="Instagram"
            />
            <SocialCustom
              href="https://x.com/zapfixapp"
              label="X (Twitter)"
            >
              <XIcon className="h-4 w-4" />
            </SocialCustom>
            <Social icon={Linkedin} href="#" label="LinkedIn" />
            <Social icon={Youtube} href="#" label="YouTube" />
          </div>
        </motion.div>

        {/* big wordmark */}
        <div className="mask-fade-bottom mt-12 select-none overflow-hidden">
          <div className="bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-center font-display text-[18vw] font-extrabold leading-none tracking-tighter text-transparent">
            ZapFix.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-zap-400">
        {title}
      </div>
      <ul className="flex flex-col gap-2.5 text-sm text-white/60">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a href={href} className="transition-colors hover:text-white">
        {children}
      </a>
    </li>
  );
}

function Social({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-zap-500/40 hover:bg-zap-500/10 hover:text-zap-400"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function SocialCustom({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-zap-500/40 hover:bg-zap-500/10 hover:text-zap-400"
    >
      {children}
    </a>
  );
}
