"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 50 }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative ${className}`}
    >
      <Image
        src="/logo.png"
        alt="ComboHub Logo"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </motion.div>
  );
}