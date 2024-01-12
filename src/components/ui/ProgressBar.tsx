"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      ref={barRef}
      style={{ scaleX: scrollYProgress }}
      className="h-2 w-full bg-yellow-500 rounded-r-[20rem] sticky origin-top-left top-0 left-0 z-50 "
    />
  );
};

export default ProgressBar;
