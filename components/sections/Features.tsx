"use client";

import { motion } from "framer-motion";
import FeatureCard from "./features/FeatureCard";
import { features } from "./features/featureData";
import GlassCard from "@/components/ui/GlassCard";

export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="container px-4 mx-auto relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlassCard variant="highlight" className="inline-block px-6 py-2 mb-4">
            <span className="text-sm font-medium text-primary">Core Features</span>
          </GlassCard>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Discover What Makes ComboHub Unique
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the future of digital shopping and entertainment with our innovative features
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.Icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}