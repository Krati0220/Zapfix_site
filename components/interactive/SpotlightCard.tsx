"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
} from "framer-motion";
import { clsx } from "clsx";

/**
 * A drop-in card wrapper that combines three interactions:
 *   1. a scroll-reveal entrance,
 *   2. a subtle 3D tilt toward the cursor, and
 *   3. a radial "spotlight" glow that follows the pointer.
 *
 * Pass the card's visual classes via `className` — they're applied to the
 * tilting surface so existing styling carries over unchanged.
 */
export function SpotlightCard({
  children,
  className,
  delay = 0,
  tilt = true,
  glow = "rgba(245,184,0,0.16)",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  tilt?: boolean;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 150, damping: 20 });
  const sy = useSpring(my, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(sy, [0, 1], tilt ? [5, -5] : [0, 0]);
  const rotateY = useTransform(sx, [0, 1], tilt ? [-5, 5] : [0, 0]);
  const glareX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(my, [0, 1], ["0%", "100%"]);
  const background = useMotionTemplate`radial-gradient(220px circle at ${glareX} ${glareY}, ${glow}, transparent 65%)`;

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }
  function reset() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={clsx("group/spot relative h-full", className)}
      >
        {children}
        <motion.span
          aria-hidden
          style={{ background, borderRadius: "inherit" }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        />
      </motion.div>
    </motion.div>
  );
}
