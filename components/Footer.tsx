"use client";

import { Download, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 pb-10 pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px glow-line" />
      <div className="container-zap">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-white/55">
              India&apos;s AI-powered home services platform. Built to bring
              trust, transparency, and speed back to everyday repairs.
            </p>
            <a href="#download" className="btn-zap mt-6 !py-3 text-xs">
              <Download className="h-3.5 w-3.5" strokeWidth={2.5} />
              Download APK
            </a>
          </div>

          <FooterCol title="Product">
            <FooterLink href="#how">How it works</FooterLink>
            <FooterLink href="#diagnosis">AI Diagnosis</FooterLink>
            <FooterLink href="#features">Features</FooterLink>
            <FooterLink href="#categories">Services</FooterLink>
            <FooterLink href="#download">Download</FooterLink>
          </FooterCol>

          <FooterCol title="For Pros">
            <FooterLink href="#pro">Join as Pro</FooterLink>
            <FooterLink href="#">Pro app</FooterLink>
            <FooterLink href="#">Earnings & payouts</FooterLink>
            <FooterLink href="#">Pro support</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Press</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="mailto:hello@zapfix.in">hello@zapfix.in</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-white/40">
            © {new Date().getFullYear()} ZapFix Technologies Pvt. Ltd. ·{" "}
            <a href="#" className="hover:text-white">
              Privacy
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-white">
              Terms
            </a>{" "}
            ·{" "}
            <a href="#" className="hover:text-white">
              Refunds
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Social icon={Instagram} href="#" />
            <Social icon={Twitter} href="#" />
            <Social icon={Linkedin} href="#" />
            <Social icon={Youtube} href="#" />
          </div>
        </div>

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

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-zap-400">
        {title}
      </div>
      <ul className="flex flex-col gap-2.5 text-sm text-white/60">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="transition-colors hover:text-white"
      >
        {children}
      </a>
    </li>
  );
}

function Social({
  icon: Icon,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all hover:border-zap-500/40 hover:bg-zap-500/10 hover:text-zap-400"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
