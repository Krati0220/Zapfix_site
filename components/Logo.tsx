import { clsx } from "clsx";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "light" | "dark";
};

/**
 * ZapFix brand mark — matches the reference: yellow lightning-Z bolt with 3
 * speed lines on the left and a white open-end wrench laid across the top-right.
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
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ZapFix logo"
    >
      <defs>
        {/* Bolt: bright yellow top → deeper amber at tail */}
        <linearGradient id="zapBoltGrad" x1="25" y1="12" x2="55" y2="96" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFCC2E" />
          <stop offset="55%" stopColor="#F5B800" />
          <stop offset="100%" stopColor="#E89400" />
        </linearGradient>
        {/* Wrench: clean white with a hint of cool gray for dimension */}
        <linearGradient id="zapWrenchGrad" x1="55" y1="4" x2="92" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D9E0EC" />
        </linearGradient>
        {/* Subtle inner shadow on the bolt for depth */}
        <linearGradient id="zapBoltShade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
      </defs>

      {/* 1 — Speed lines (three yellow horizontal bars, middle longest) */}
      <g fill="#F5B800">
        <rect x="6" y="38" width="20" height="4.2" rx="2.1" />
        <rect x="3" y="49" width="26" height="4.2" rx="2.1" />
        <rect x="9" y="60" width="20" height="4.2" rx="2.1" />
      </g>

      {/* 2 — Lightning Z bolt
             Vertices (clockwise):
             top-left → top-right → diagonal down-left to bottom of top bar →
             jog right to top of bottom bar → diagonal down to tail tip →
             back up-left to inner bottom → left edge to close */}
      <path
        d="M 30 14 L 76 14 L 56 46 L 80 46 L 40 96 L 58 58 L 30 58 Z"
        fill="url(#zapBoltGrad)"
      />
      {/* depth shading on bolt */}
      <path
        d="M 30 14 L 76 14 L 56 46 L 80 46 L 40 96 L 58 58 L 30 58 Z"
        fill="url(#zapBoltShade)"
      />

      {/* 3 — Open-end wrench
             Drawn upright (head at top with V-notch facing up, handle extending down),
             then rotated 32° clockwise around the head so it lays diagonally across
             the top-right of the bolt. */}
      <g transform="rotate(32 68 18)">
        {/* Head with open-end notch carved out of the top */}
        <path
          d="
            M 52 32
            L 52 6
            L 63 6
            L 63 19
            L 73 19
            L 73 6
            L 84 6
            L 84 32
            Z
          "
          fill="url(#zapWrenchGrad)"
        />
        {/* Handle */}
        <rect x="60" y="31" width="16" height="44" rx="3" fill="url(#zapWrenchGrad)" />
        {/* Subtle inner highlight on the head's left prong */}
        <rect x="55" y="9" width="2" height="20" rx="1" fill="#FFFFFF" opacity="0.7" />
      </g>
    </svg>
  );
}
