"use client";

import { useState } from "react";
import { clsx } from "clsx";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "light" | "dark";
};

/**
 * ZapFix brand mark.
 *
 * Loads the logo image from /public. Drop your actual logo file as either:
 *   • public/zapfix-logo.png   (preferred — high resolution)
 *   • public/zapfix-logo.svg   (currently a placeholder I generated)
 *
 * The component prefers the PNG. If the PNG doesn't exist, it falls back to
 * the SVG placeholder so the layout never breaks.
 */
export function Logo({
  className,
  showWordmark = true,
  variant = "light",
}: LogoProps) {
  const fixColor = variant === "light" ? "#FFFFFF" : "#0C1A35";

  return (
    <div className={clsx("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9" />
      {showWordmark && (
        <span
          className="font-display text-[1.55rem] font-extrabold leading-none tracking-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="text-zap-500">Zap</span>
          <span style={{ color: fixColor }}>Fix</span>
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className }: { className?: string }) {
  const [src, setSrc] = useState("/zapfix-logo.png");
  return (
    <span
      className={clsx(
        "relative inline-block overflow-hidden rounded-[22%] align-middle",
        className,
      )}
      aria-label="ZapFix"
    >
      {/* Image is scaled up slightly so the dark JPEG border falls outside
          the rounded clipping mask — effectively cropping the edges. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        onError={() => {
          if (src !== "/zapfix-logo.svg") setSrc("/zapfix-logo.svg");
        }}
        alt="ZapFix"
        className="absolute inset-0 h-full w-full scale-[1.14] object-cover"
        draggable={false}
      />
    </span>
  );
}
