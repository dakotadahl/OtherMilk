export interface Recipe {
  title: string;
  description: string;
  time: string;
  difficulty: "Easy" | "Medium";
}

export interface NutritionFact {
  label: string;
  value: string;
  daily?: string;
}

export interface Product {
  slug: string;
  name: string;
  price: string;
  subblyProductId: number;
  tagline: string;
  description: string;
  ingredients: string[];
  image: string;
  nutrition: NutritionFact[];
  recipes: Recipe[];
}

export const products: Product[] = [
  {
    slug: "pecan-milk",
    name: "Pecan Milk",
    price: "$14.00",
    subblyProductId: 416895,
    tagline: "Our do-it-all alt milk",
    description:
      "Your go-to for lattes and cappuccinos, the milk for your cereal in the morning (or at midnight), the milk for that banana bread loaf–this is the daily driver: the Regular Pecan Milk. It’s three simple ingredients: Alabama pecans, organic maple syrup from Vermont, and a touch of Redmond’s Real sea salt to lift it all up at the end–it’ll be your shelfie staple.",
    ingredients: [
      "Filtered water",
      "Pecans",
      "Organic Maple Syrup",
      "Sea salt",
    ],
    image: "/images/pecan-milk.webp",
    nutrition: [
      { label: "Calories", value: "130" },
      { label: "Total Fat", value: "11g", daily: "14%" },
      { label: "Saturated Fat", value: "1g", daily: "5%" },
      { label: "Sodium", value: "60mg", daily: "3%" },
      { label: "Total Carbs", value: "5g", daily: "2%" },
      { label: "Protein", value: "3g" },
      { label: "Calcium", value: "10mg", daily: "1%" },
      { label: "Iron", value: "0.7mg", daily: "4%" },
    ],
    recipes: [
      {
        title: "Golden Milk Latte",
        description:
          "Warm pecan milk with turmeric, cinnamon, ginger, and a touch of honey. The nutty richness of pecans makes this the coziest golden milk you'll ever have.",
        time: "5 min",
        difficulty: "Easy",
      },
      {
        title: "Overnight Oats",
        description:
          "Rolled oats soaked overnight in pecan milk with chia seeds, maple syrup, and fresh berries. Creamy, no-cook, ready when you are.",
        time: "5 min + overnight",
        difficulty: "Easy",
      },
      {
        title: "Pecan Milk Panna Cotta",
        description:
          "A silky, set custard made entirely with pecan milk — topped with seasonal fruit compote. Elegant enough for company, easy enough for Tuesday.",
        time: "20 min + chill",
        difficulty: "Medium",
      },
    ],
  },
  {
    slug: "chocolate-pecan-milk",
    name: "Chocolate Pecan Milk",
    price: "$14.00",
    subblyProductId: 416902,
    tagline: "You deserve a treat",
    description:
      "Our most decadent profile; Alabama pecans meet organic cacao, brought together with organic Vermont maple syrup, and a pinch of Redmond’s Real Salt. Silky, chocolatey, and luxurious.",
    ingredients: [
      "Filtered water",
      "Pecans",
      "Organic Maple Syrup",
      "Organic Cacao Powder",
      "Sea salt",
    ],
    image: "/images/chocolate-pecan-milk.webp",
    nutrition: [
      { label: "Calories", value: "160" },
      { label: "Total Fat", value: "12g", daily: "15%" },
      { label: "Saturated Fat", value: "1.5g", daily: "8%" },
      { label: "Sodium", value: "55mg", daily: "2%" },
      { label: "Total Carbs", value: "9g", daily: "3%" },
      { label: "Protein", value: "3g" },
      { label: "Calcium", value: "12mg", daily: "1%" },
      { label: "Iron", value: "1.2mg", daily: "7%" },
    ],
    recipes: [
      {
        title: "Chocolate Pecan Smoothie",
        description:
          "Frozen banana, a generous pour of chocolate pecan milk, a spoonful of almond butter, and ice. Thick, frosty, and absurdly good.",
        time: "3 min",
        difficulty: "Easy",
      },
      {
        title: "Mexican Hot Chocolate",
        description:
          "Heated chocolate pecan milk with a pinch of cayenne, cinnamon, and a tiny bit of brown sugar. Warming, spicy, deeply comforting.",
        time: "8 min",
        difficulty: "Easy",
      },
      {
        title: "Chocolate Chia Pudding",
        description:
          "Chia seeds stirred into chocolate pecan milk, left to set overnight. Top with coconut flakes and cacao nibs for extra crunch.",
        time: "5 min + overnight",
        difficulty: "Easy",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
