import { ShoppingBag, Play, MapPin, Users, Gift, TabletSmartphone } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface Feature {
  Icon: LucideIcon;
  title: string;
  description: string;
} 

export const features: Feature[] = [
  {
    Icon: ShoppingBag,
    title: "E-commerce Marketplace",
    description: "Shop from thousands of vendors and exclusive products"
  },
  {
    Icon: Play,
    title: "Streaming Platform",
    description: "Enjoy movies, series, and live shows"
  },
  {
    Icon: MapPin,
    title: "Virtual Mall Network",
    description: "Explore shopping centers across the nation"
  },
  {
    Icon: Users,
    title: "Social Shopping",
    description: "Connect with friends and share experiences"
  },
  {
    Icon: Gift,
    title: "Rewards Program",
    description: "Earn points and unlock exclusive benefits"
  },
  {
    Icon: TabletSmartphone,
    title: "Mobile Integration",
    description: "Seamless experience across all devices"
  }
];