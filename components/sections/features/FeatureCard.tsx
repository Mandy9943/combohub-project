"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <GlassCard className="p-6 h-full group hover:scale-[1.02] transition-transform duration-300">
        <div className="relative mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity rounded-xl" />
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{description}</p>
      </GlassCard>
    </motion.div>
  );
}