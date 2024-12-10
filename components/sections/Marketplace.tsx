"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: ShoppingBag, value: "10K+", label: "Products" },
  { icon: Star, value: "4.8", label: "Rating" },
  { icon: Users, value: "1M+", label: "Users" },
  { icon: TrendingUp, value: "24/7", label: "Support" }
];

export default function Marketplace() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your One-Stop Shopping Destination
            </h2>
            <p className="text-muted-foreground mb-8">
              Discover a vast marketplace featuring both exclusive ComboHub products and carefully selected third-party sellers. Shop with confidence knowing every vendor is verified and committed to quality.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
            <Button size="lg">Start Shopping</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80"
              alt="Marketplace"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}