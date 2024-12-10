import { ShoppingBag, Gamepad, Coffee, Camera, Palette, Utensils, Music, Book, Shirt, Watch } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Store {
  name: string;
  type: string;
  icon: LucideIcon;
}

interface MallLocation {
  id: number;
  name: string;
  location: string;
  state: string;
  openingYear: number;
  totalStores: number;
  dailyVisitors: number;
  specialties: string[];
  featuredStores: Store[];
  amenities: string[];
  events: string[];
  description: string;
}

export const mallLocations: MallLocation[] = [
  {
    id: 1,
    name: "ComboHub Detroit",
    location: "Downtown Detroit",
    state: "MI",
    openingYear: 2023,
    totalStores: 350,
    dailyVisitors: 8000,
    specialties: ["Automotive Luxury", "Urban Fashion", "Tech Innovation"],
    featuredStores: [
      { name: "Hiddensin Premium", type: "Tobacco & Accessories", icon: ShoppingBag },
      { name: "Detroit Tech Hub", type: "Electronics", icon: Gamepad },
      { name: "Motor City Fashion", type: "Clothing", icon: Shirt }
    ],
    amenities: [
      "Virtual Car Showroom",
      "Interactive History Museum",
      "Rooftop Entertainment Zone",
      "Digital Art Gallery"
    ],
    events: [
      "Weekly Auto Shows",
      "Tech Startup Showcases",
      "Urban Music Festivals"
    ],
    description: "A fusion of Detroit's automotive heritage with cutting-edge digital innovation"
  },
  {
    id: 2,
    name: "ComboHub Chicago",
    location: "Magnificent Mile",
    state: "IL",
    openingYear: 2023,
    totalStores: 400,
    dailyVisitors: 12000,
    specialties: ["Fine Dining", "Art & Culture", "Business Fashion"],
    featuredStores: [
      { name: "Windy City Eats", type: "Food Court", icon: Utensils },
      { name: "Chicago Arts", type: "Gallery", icon: Palette },
      { name: "Business Elite", type: "Fashion", icon: Watch }
    ],
    amenities: [
      "Virtual Food Tours",
      "Digital Art Exhibitions",
      "Business Conference Center",
      "Sky Deck Views"
    ],
    events: [
      "Monthly Food Festivals",
      "Art Gallery Nights",
      "Business Networking Events"
    ],
    description: "Where Chicago's business spirit meets cultural excellence"
  },
  {
    id: 3,
    name: "ComboHub NYC",
    location: "Manhattan",
    state: "NY",
    openingYear: 2023,
    totalStores: 500,
    dailyVisitors: 15000,
    specialties: ["High Fashion", "Entertainment", "International Cuisine"],
    featuredStores: [
      { name: "Broadway Digital", type: "Entertainment", icon: Music },
      { name: "Manhattan Style", type: "Fashion", icon: Shirt },
      { name: "World Kitchen", type: "Dining", icon: Utensils }
    ],
    amenities: [
      "Virtual Broadway Shows",
      "Fashion Week Portal",
      "Global Cuisine Court",
      "Times Square Experience"
    ],
    events: [
      "Digital Fashion Shows",
      "Virtual Broadway Previews",
      "International Food Festivals"
    ],
    description: "The ultimate New York experience in the digital realm"
  },
  {
    id: 4,
    name: "ComboHub LA",
    location: "Beverly Hills",
    state: "CA",
    openingYear: 2023,
    totalStores: 450,
    dailyVisitors: 10000,
    specialties: ["Entertainment", "Celebrity Brands", "Wellness"],
    featuredStores: [
      { name: "Hollywood Studio", type: "Entertainment", icon: Camera },
      { name: "Star Style", type: "Fashion", icon: Shirt },
      { name: "LA Wellness", type: "Health", icon: Coffee }
    ],
    amenities: [
      "Virtual Movie Premieres",
      "Celebrity Meet & Greets",
      "Wellness Center",
      "VR Studio Tours"
    ],
    events: [
      "Movie Preview Nights",
      "Celebrity Brand Launches",
      "Wellness Workshops"
    ],
    description: "Where Hollywood glamour meets digital innovation"
  },
  {
    id: 5,
    name: "ComboHub Miami",
    location: "South Beach",
    state: "FL",
    openingYear: 2023,
    totalStores: 300,
    dailyVisitors: 9000,
    specialties: ["Beach Fashion", "Nightlife", "Latin Culture"],
    featuredStores: [
      { name: "Beach Vibes", type: "Fashion", icon: Shirt },
      { name: "Miami Nights", type: "Entertainment", icon: Music },
      { name: "Sabor Latino", type: "Dining", icon: Utensils }
    ],
    amenities: [
      "Virtual Beach Club",
      "Latin Dance Studio",
      "Ocean View Lounge",
      "Night Club Experience"
    ],
    events: [
      "Beach Fashion Shows",
      "Virtual Dance Nights",
      "Latin Food Festivals"
    ],
    description: "Miami's vibrant culture in a digital paradise"
  },
  {
    id: 6,
    name: "ComboHub Seattle",
    location: "Downtown Seattle",
    state: "WA",
    openingYear: 2023,
    totalStores: 250,
    dailyVisitors: 7000,
    specialties: ["Tech Products", "Coffee Culture", "Outdoor Gear"],
    featuredStores: [
      { name: "Tech Haven", type: "Electronics", icon: Gamepad },
      { name: "Coffee World", type: "Café", icon: Coffee },
      { name: "Adventure Gear", type: "Outdoor", icon: Book }
    ],
    amenities: [
      "Innovation Lab",
      "Virtual Coffee Tours",
      "Outdoor Adventure Center",
      "Tech Demo Space"
    ],
    events: [
      "Tech Launch Events",
      "Coffee Tasting Sessions",
      "Outdoor Gear Demos"
    ],
    description: "Where technology meets Pacific Northwest lifestyle"
  }
];