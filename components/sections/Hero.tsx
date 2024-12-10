"use client";

import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { motion } from "framer-motion";
import { Play, ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <img src="/bg.jpg" alt="background" className="object-center h-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/10 to-accent/10" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Logo size={120} className="animate-float" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Welcome to ComboHub
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Your all-in-one digital ecosystem for shopping, entertainment, and
            more
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90"
            >
              <ShoppingBag className="w-5 h-5" />
              Start Shopping
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 gradient-border"
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/90 to-transparent z-10" />
    </section>
  );
}
