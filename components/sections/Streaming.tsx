"use client";

import { motion } from "framer-motion";
import { Play, Film, Tv, Radio } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  { icon: Film, title: "Movies", count: "1000+" },
  { icon: Tv, title: "TV Shows", count: "500+" },
  { icon: Radio, title: "Live Events", count: "24/7" }
];

export default function Streaming() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80"
              alt="Streaming Platform"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entertainment at Your Fingertips
            </h2>
            <p className="text-muted-foreground mb-8">
              Stream your favorite movies, TV shows, and live events. Enjoy exclusive content and premieres, all integrated with your shopping experience.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {categories.map((category, index) => (
                <Card key={index} className="p-4 text-center">
                  <category.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{category.title}</div>
                  <div className="text-sm text-muted-foreground">{category.count}</div>
                </Card>
              ))}
            </div>
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" />
              Start Watching
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}