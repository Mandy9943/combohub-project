import type { LucideIcon } from "lucide-react";
import {
  Book,
  Camera,
  Coffee,
  Gamepad,
  Music,
  Palette,
  Shirt,
  ShoppingBag,
  Store,
  Utensils,
  Watch,
} from "lucide-react";

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
      {
        name: "Hiddensin Premium",
        type: "Tobacco & Accessories",
        icon: ShoppingBag,
      },
      { name: "Detroit Tech Hub", type: "Electronics", icon: Gamepad },
      { name: "Motor City Fashion", type: "Clothing", icon: Shirt },
    ],
    amenities: [
      "Virtual Car Showroom",
      "Interactive History Museum",
      "Rooftop Entertainment Zone",
      "Digital Art Gallery",
    ],
    events: [
      "Weekly Auto Shows",
      "Tech Startup Showcases",
      "Urban Music Festivals",
    ],
    description:
      "A fusion of Detroit's automotive heritage with cutting-edge digital innovation",
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
      { name: "Business Elite", type: "Fashion", icon: Watch },
    ],
    amenities: [
      "Virtual Food Tours",
      "Digital Art Exhibitions",
      "Business Conference Center",
      "Sky Deck Views",
    ],
    events: [
      "Monthly Food Festivals",
      "Art Gallery Nights",
      "Business Networking Events",
    ],
    description: "Where Chicago's business spirit meets cultural excellence",
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
      { name: "World Kitchen", type: "Dining", icon: Utensils },
    ],
    amenities: [
      "Virtual Broadway Shows",
      "Fashion Week Portal",
      "Global Cuisine Court",
      "Times Square Experience",
    ],
    events: [
      "Digital Fashion Shows",
      "Virtual Broadway Previews",
      "International Food Festivals",
    ],
    description: "The ultimate New York experience in the digital realm",
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
      { name: "LA Wellness", type: "Health", icon: Coffee },
    ],
    amenities: [
      "Virtual Movie Premieres",
      "Celebrity Meet & Greets",
      "Wellness Center",
      "VR Studio Tours",
    ],
    events: [
      "Movie Preview Nights",
      "Celebrity Brand Launches",
      "Wellness Workshops",
    ],
    description: "Where Hollywood glamour meets digital innovation",
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
      { name: "Sabor Latino", type: "Dining", icon: Utensils },
    ],
    amenities: [
      "Virtual Beach Club",
      "Latin Dance Studio",
      "Ocean View Lounge",
      "Night Club Experience",
    ],
    events: [
      "Beach Fashion Shows",
      "Virtual Dance Nights",
      "Latin Food Festivals",
    ],
    description: "Miami's vibrant culture in a digital paradise",
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
      { name: "Adventure Gear", type: "Outdoor", icon: Book },
    ],
    amenities: [
      "Innovation Lab",
      "Virtual Coffee Tours",
      "Outdoor Adventure Center",
      "Tech Demo Space",
    ],
    events: [
      "Tech Launch Events",
      "Coffee Tasting Sessions",
      "Outdoor Gear Demos",
    ],
    description: "Where technology meets Pacific Northwest lifestyle",
  },
  {
    id: 7,
    name: "Montevideo Shopping",
    location: "Montevideo",
    state: "Uruguay",
    openingYear: 2023,
    totalStores: 180,
    dailyVisitors: 15000,
    specialties: ["Local Retail", "International Brands", "Cultural Shopping"],
    amenities: [
      "Virtual Shopping Assistant",
      "Digital Payment Systems",
      "Interactive Mall Map",
      "Customer Lounge",
    ],
    description:
      "The largest virtual mall in Uruguay's capital, featuring premium international and local brands.",
    featuredStores: [
      { icon: Store, name: "Plaza Mayor", type: "Department Store" },
      { icon: Store, name: "Tienda Inglesa", type: "Supermarket" },
      { icon: Store, name: "Mosca", type: "Fashion Retail" },
    ],
    events: [
      "Weekend Fashion Show",
      "Gourmet Food Festival",
      "Local Artisans Market",
    ],
  },
  {
    id: 8,
    name: "Rivera Shopping",
    location: "Rivera",
    state: "Uruguay",
    openingYear: 2023,
    totalStores: 120,
    dailyVisitors: 8000,
    specialties: ["Local Retail", "International Brands", "Cultural Shopping"],
    amenities: [
      "Virtual Shopping Assistant",
      "Digital Payment Systems",
      "Interactive Mall Map",
      "Customer Lounge",
    ],
    description:
      "A border shopping destination connecting Uruguay and Brazil, known for duty-free shopping.",
    featuredStores: [
      { icon: Store, name: "Free Shop Rivera", type: "Duty Free" },
      { icon: Store, name: "Centro Comercial", type: "Shopping Center" },
      { icon: Store, name: "Fronteira Store", type: "Electronics" },
    ],
    events: ["Border Festival", "International Fair", "Cultural Exchange Week"],
  },
  {
    id: 9,
    name: "Punta Shopping",
    location: "Maldonado",
    state: "Uruguay",
    openingYear: 2023,
    totalStores: 150,
    dailyVisitors: 12000,
    description:
      "Premium shopping experience in Punta del Este, Uruguay's premier tourist destination.",
    featuredStores: [
      { icon: Store, name: "Casapueblo Market", type: "Luxury Retail" },
      { icon: Store, name: "Ocean View Gallery", type: "Fashion" },
      { icon: Store, name: "Sunset Plaza", type: "Entertainment" },
    ],
    events: [
      "Summer Fashion Week",
      "Beach Concert Series",
      "Tourist Season Launch",
    ],
    specialties: ["Beach Retail", "Luxury Shopping", "Tourist Attractions"],
    amenities: [
      "VIP Lounge",
      "Tourist Info Center",
      "Currency Exchange",
      "Beach Shuttle",
    ],
  },
  {
    id: 10,
    name: "Artigas Centro",
    location: "Artigas",
    state: "Uruguay",
    openingYear: 2023,
    totalStores: 90,
    dailyVisitors: 5000,
    description:
      "Northern Uruguay's shopping hub, featuring local and international retailers.",
    featuredStores: [
      { icon: Store, name: "Norte Shopping", type: "Retail Center" },
      { icon: Store, name: "Artigas Market", type: "Local Market" },
      { icon: Store, name: "Plaza Norte", type: "Mixed Retail" },
    ],
    events: ["Local Crafts Fair", "Regional Products Expo", "Cultural Week"],
    specialties: ["Border Shopping", "Local Products", "Duty Free"],
    amenities: [
      "Border Transport",
      "Shopping Guides",
      "Storage Lockers",
      "Rest Areas",
    ],
  },
  {
    id: 11,
    name: "Rocha Mall",
    location: "Rocha",
    state: "Uruguay",
    openingYear: 2023,
    totalStores: 85,
    dailyVisitors: 4500,
    description:
      "Coastal shopping destination featuring local products and beach essentials.",
    featuredStores: [
      { icon: Store, name: "Costa Shop", type: "Beach Retail" },
      { icon: Store, name: "Mercado Local", type: "Local Market" },
      { icon: Store, name: "Rocha Plaza", type: "Mixed Retail" },
    ],
    events: [
      "Coastal Products Fair",
      "Summer Activities",
      "Local Artists Exhibition",
    ],
    specialties: ["Coastal Retail", "Beach Essentials", "Local Crafts"],
    amenities: [
      "Beach Equipment Rental",
      "Tourist Services",
      "Local Art Gallery",
      "Food Court",
    ],
  },
  {
    id: 12,
    name: "Salto Shopping",
    location: "Salto",
    state: "Uruguay",
    openingYear: 2023,
    totalStores: 110,
    dailyVisitors: 7000,
    description:
      "Modern shopping complex in thermal springs region, combining retail and entertainment.",
    featuredStores: [
      { icon: Store, name: "Termas Mall", type: "Shopping Center" },
      { icon: Store, name: "Salto Grande", type: "Department Store" },
      { icon: Store, name: "Plaza Termal", type: "Entertainment" },
    ],
    events: [
      "Thermal Season Festival",
      "Regional Dance Show",
      "Gastronomic Weekend",
    ],
    specialties: ["Thermal Tourism", "Regional Products", "Entertainment"],
    amenities: [
      "Thermal Spa Access",
      "Tourist Information",
      "Event Space",
      "Relaxation Areas",
    ],
  },
];
