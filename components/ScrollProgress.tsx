"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        background: "linear-gradient(90deg, #f5b800 0%, #fcd34d 40%, #f5b800 100%)",
      }}
      className="fixed left-0 right-0 top-0 z-[200] h-[2px]"
    />
  );
}
