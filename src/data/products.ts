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
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Kunafa Chocolate",
    description: "The signature chocolate that started our journey.",
    longDescription: "Our signature Premium Kunafa Chocolate combines the rich taste of premium chocolate with the traditional crunch of kunafa. It has gained immense popularity across Malappuram and is perfect for gifting or personal indulgence.",
    price: 100,
    originalPrice: 120,
    image: "/images/kunafa-chocolate.jpg",
    images: [
      "/images/kunafa-chocolate.jpg",
      "/images/kunafa-classic.jpg"
    ],
    rating: 4.9,
    reviews: 1250,
    badge: "Best Seller",
    badgeColor: "bg-green-600",
    features: [
      "Premium cocoa blend",
      "Authentic kunafa crunch",
      "High market demand",
      "Excellent shelf life"
    ],
    nutrition: {
      calories: "220 per serving",
      servingSize: "50g",
      allergens: "Dairy, Nuts, Soy"
    },
    stock: 500
  },
  {
    id: 2,
    name: "Bites",
    description: "Delicious bite-sized chocolate treats.",
    longDescription: "Perfectly portioned chocolate bites for a quick sweet fix. These are ideal for retail distribution and impulse buys at checkout counters.",
    price: 50,
    originalPrice: 60,
    image: "/images/kunafa-mini.jpg",
    images: [
      "/images/kunafa-mini.jpg"
    ],
    rating: 4.7,
    reviews: 320,
    badge: "Popular",
    badgeColor: "bg-yellow-500",
    features: [
      "Bite-sized convenience",
      "Rich chocolate flavor",
      "Attractive packaging"
    ],
    nutrition: {
      calories: "150 per serving",
      servingSize: "30g",
      allergens: "Dairy, Soy"
    },
    stock: 1000
  },
  {
    id: 3,
    name: "Honey Nuts Mix",
    description: "A healthy and energetic mix of premium nuts and pure honey.",
    longDescription: "A premium blend of roasted almonds, cashews, and pistachios coated in pure natural honey. A nutritious snack option with high retail demand.",
    price: 250,
    originalPrice: 299,
    image: "/images/kunafa-classic.jpg",
    images: [
      "/images/kunafa-classic.jpg"
    ],
    rating: 4.8,
    reviews: 415,
    badge: "Healthy",
    badgeColor: "bg-emerald-500",
    features: [
      "Pure natural honey",
      "Premium roasted nuts",
      "High protein content",
      "No artificial preservatives"
    ],
    nutrition: {
      calories: "180 per serving",
      servingSize: "40g",
      allergens: "Nuts"
    },
    stock: 300
  },
  {
    id: 4,
    name: "Almond Dates Chocolate",
    description: "Premium dates stuffed with roasted almonds and coated in chocolate.",
    longDescription: "A luxurious fusion of Arabian dates, crunchy roasted almonds, and smooth milk chocolate. An elegant product line suitable for premium retail outlets.",
    price: 180,
    originalPrice: 220,
    image: "/images/kunafa-cream.jpg",
    images: [
      "/images/kunafa-cream.jpg"
    ],
    rating: 4.9,
    reviews: 580,
    badge: "Premium",
    badgeColor: "bg-purple-500",
    features: [
      "Premium Arabian dates",
      "Roasted almonds",
      "Rich chocolate coating",
      "Gourmet packaging"
    ],
    nutrition: {
      calories: "160 per serving",
      servingSize: "35g",
      allergens: "Dairy, Nuts, Soy"
    },
    stock: 450
  },
  {
    id: 5,
    name: "Cashew Dates Chocolate",
    description: "Rich dates stuffed with premium cashews in a chocolate shell.",
    longDescription: "Combining the natural sweetness of dates with the buttery crunch of premium cashews, all enveloped in high-quality chocolate. A must-have for confectionery distributors.",
    price: 180,
    originalPrice: 220,
    image: "/images/kunafa-mini.jpg",
    images: [
      "/images/kunafa-mini.jpg"
    ],
    rating: 4.8,
    reviews: 490,
    badge: "New",
    badgeColor: "bg-blue-500",
    features: [
      "Premium cashews",
      "Natural date sweetness",
      "Smooth chocolate finish"
    ],
    nutrition: {
      calories: "165 per serving",
      servingSize: "35g",
      allergens: "Dairy, Nuts, Soy"
    },
    stock: 400
  },
  {
    id: 6,
    name: "Kunafa Dates Chocolate",
    description: "The ultimate fusion: Dates, chocolate, and crispy kunafa.",
    longDescription: "Our innovative creation blending dates and chocolate with the signature crunch of toasted kunafa. An exclusive product offering for our super stockists.",
    price: 200,
    originalPrice: 250,
    image: "/images/kunafa-chocolate.jpg",
    images: [
      "/images/kunafa-chocolate.jpg"
    ],
    rating: 5.0,
    reviews: 890,
    badge: "Signature",
    badgeColor: "bg-red-500",
    features: [
      "Innovative recipe",
      "Signature kunafa crunch",
      "Premium ingredients",
      "High market appeal"
    ],
    nutrition: {
      calories: "190 per serving",
      servingSize: "40g",
      allergens: "Dairy, Nuts, Soy, Gluten"
    },
    stock: 600
  }
];
