export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeColor: string;
  features: string[];
  nutrition: {
    calories: string;
    servingSize: string;
    allergens: string;
  };
  stock: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Pistachio Kunafa",
    description: "Traditional kunafa with rich cheese filling and crushed pistachios",
    longDescription: "Our signature Classic Pistachio Kunafa is made using generations-old recipes, featuring crispy shredded phyllo dough layered with premium Akkawi cheese and generously topped with the finest Iranian pistachios. Each bite offers a perfect balance of crispy texture and creamy filling.",
    price: 299,
    originalPrice: 399,
    image: "/images/kunafa-classic.jpg",
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
    badgeColor: "bg-green-600",
    features: [
      "Made with premium Iranian pistachios",
      "Freshly baked daily",
      "Serves 4-6 people",
      "24-hour freshness guarantee",
      "Vegetarian friendly"
    ],
    nutrition: {
      calories: "450 per serving",
      servingSize: "100g",
      allergens: "Dairy, Nuts"
    },
    stock: 15
  },
  {
    id: 2,
    name: "Cream Layer Kunafa",
    description: "Layered cream kunafa with generous pistachio topping",
    longDescription: "Indulge in our luxurious Cream Layer Kunafa, featuring delicate layers of buttery phyllo pastry alternating with rich clotted cream (Ashta). Topped with crushed pistachios and a drizzle of rose syrup, this dessert is perfect for special occasions.",
    price: 349,
    originalPrice: 449,
    image: "/images/kunafa-cream.jpg",
    rating: 4.8,
    reviews: 95,
    badge: "Popular",
    badgeColor: "bg-yellow-500",
    features: [
      "Extra creamy texture",
      "Rose syrup drizzle",
      "Clotted cream layers",
      "Gold leaf garnish option",
      "Premium packaging"
    ],
    nutrition: {
      calories: "520 per serving",
      servingSize: "100g",
      allergens: "Dairy, Nuts"
    },
    stock: 8
  },
  {
    id: 3,
    name: "Mini Kunafa Cups",
    description: "Perfect individual portions for parties and gatherings",
    longDescription: "Our Mini Kunafa Cups are the ideal party dessert! Each cup contains a perfectly portioned serving of our traditional kunafa, making them easy to serve and perfect for events. Available in packs of 12 or 24.",
    price: 199,
    originalPrice: 249,
    image: "/images/kunafa-mini.jpg",
    rating: 4.7,
    reviews: 76,
    badge: "Party Pack",
    badgeColor: "bg-amber-500",
    features: [
      "Individual servings",
      "Easy to serve",
      "Perfect for events",
      "Variety pack available",
      "Microwave safe cups"
    ],
    nutrition: {
      calories: "280 per cup",
      servingSize: "1 cup",
      allergens: "Dairy, Nuts"
    },
    stock: 25
  },
  {
    id: 4,
    name: "Chocolate Pistachio Kunafa",
    description: "Fusion dessert with rich chocolate drizzle and pistachios",
    longDescription: "Experience the ultimate fusion dessert! Our Chocolate Pistachio Kunafa combines traditional Middle Eastern flavors with Belgian chocolate. Each piece is drizzled with dark chocolate and topped with premium pistachios for a unique taste experience.",
    price: 379,
    originalPrice: 499,
    image: "/images/kunafa-chocolate.jpg",
    rating: 4.9,
    reviews: 112,
    badge: "New",
    badgeColor: "bg-red-500",
    features: [
      "Belgian chocolate drizzle",
      "Fusion dessert",
      "Rich cocoa flavor",
      "Perfect for chocolate lovers",
      "Gourmet presentation"
    ],
    nutrition: {
      calories: "480 per serving",
      servingSize: "100g",
      allergens: "Dairy, Nuts, Soy"
    },
    stock: 12
  },
];
