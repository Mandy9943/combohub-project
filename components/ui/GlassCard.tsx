"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "highlight";
}

export default function GlassCard({ 
  children, 
  className,
  variant = "default",
  ...props 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "relative overflow-hidden rounded-xl backdrop-blur-md border border-white/10",
        variant === "default" && "bg-white/5",
        variant === "highlight" && "bg-white/10",
        "hover:bg-white/[0.15] transition-all duration-300",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/5 before:to-transparent before:opacity-50",
        className
      )}
    
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}