"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GlassCard from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import {
  Cigarette,
  Clock,
  CreditCard,
  MapPin,
  Shield,
  Store,
} from "lucide-react";
import { useState } from "react";
import { mallLocations } from "./mallData";

const hiddensinFeatures = [
  { icon: Shield, label: "Verified Authentic Products" },
  { icon: Clock, label: "24/7 Premium Service" },
  { icon: CreditCard, label: "Secure VIP Transactions" },
];

const countries = ["United States", "Uruguay"];

export default function MallNetwork() {
  const [selectedCountry, setSelectedCountry] = useState("United States");
  const [selectedMall, setSelectedMall] = useState(
    mallLocations.find((mall) => mall.state === "United States") ||
      mallLocations[0]
  );

  const filteredMalls = mallLocations.filter((mall) =>
    selectedCountry === "United States"
      ? mall.state !== "Uruguay"
      : mall.state === "Uruguay"
  );

  return (
    <section className="py-24 relative">
      <div className="container px-4 mx-auto">
        {/* Hiddensin Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <GlassCard className="p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/20 to-transparent" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Cigarette className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Hiddensin
                  </h3>
                  <p className="text-muted-foreground">
                    Premium Tobacco Products
                  </p>
                </div>
              </div>
              <p className="text-lg mb-8 max-w-2xl">
                Experience the finest selection of premium tobacco products.
                Available exclusively at select ComboHub locations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {hiddensinFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-background/50"
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                View Premium Collection
              </Button>
            </div>
          </GlassCard>
        </motion.div>

        {/* Mall Network Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nationwide Mall Network
          </h2>
          <p className="text-muted-foreground">
            Explore our virtual shopping centers across multiple countries
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <GlassCard className="col-span-1 p-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Select Country</h3>
              <div className="flex gap-2">
                {countries.map((country) => (
                  <Button
                    key={country}
                    variant={
                      selectedCountry === country ? "default" : "outline"
                    }
                    onClick={() => {
                      setSelectedCountry(country);
                      const firstMallInCountry = mallLocations.find((mall) =>
                        country === "United States"
                          ? mall.state !== "Uruguay"
                          : mall.state === "Uruguay"
                      );
                      if (firstMallInCountry) {
                        setSelectedMall(firstMallInCountry);
                      }
                    }}
                    className={
                      selectedCountry === country
                        ? "bg-gradient-to-r from-primary to-accent"
                        : ""
                    }
                  >
                    {country}
                  </Button>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Our Locations</h3>
            <div className="space-y-4">
              {filteredMalls.map((mall) => (
                <motion.div
                  key={mall.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedMall.id === mall.id
                      ? "bg-gradient-to-r from-primary/20 to-accent/20 text-foreground"
                      : "hover:bg-background/50"
                  }`}
                  onClick={() => setSelectedMall(mall)}
                >
                  <div className="flex items-center gap-3">
                    <Store className="w-5 h-5" />
                    <div>
                      <h4 className="font-medium">{mall.name}</h4>
                      <p className="text-sm opacity-90">
                        {mall.location}, {mall.state}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="col-span-1 lg:col-span-2 p-8">
            <div className="h-full flex flex-col">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-3 rounded-lg">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {selectedMall.name}
                  </h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {selectedMall.location}, {selectedMall.state}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Card className="p-4 bg-background/50">
                  <h4 className="font-medium mb-1">Total Stores</h4>
                  <p className="text-2xl font-bold">
                    {selectedMall.totalStores}+
                  </p>
                </Card>
                <Card className="p-4 bg-background/50">
                  <h4 className="font-medium mb-1">Daily Visitors</h4>
                  <p className="text-2xl font-bold">
                    {selectedMall.dailyVisitors.toLocaleString()}+
                  </p>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-medium mb-4">Featured Stores</h4>
                  <div className="space-y-3">
                    {selectedMall.featuredStores.map((store, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <store.icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{store.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {store.type}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Upcoming Events</h4>
                  <ul className="space-y-2">
                    {selectedMall.events.map((event, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground mb-8">
                {selectedMall.description}
              </p>
              <div className="mt-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Visit Virtual Mall
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
