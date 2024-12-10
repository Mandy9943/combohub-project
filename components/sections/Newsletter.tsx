"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail("");
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest updates and exclusive offers</p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground text-primary"
              required
            />
            <Button variant="secondary">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}