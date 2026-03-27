export interface Recipe {
  title: string;
  description: string;
  time: string;
  difficulty: 'Easy' | 'Medium';
}

export interface Review {
  name: string;
  location: string;
  text: string;
  stars: number;
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
  reviews: Review[];
}

export const products: Product[] = [
  {
    slug: 'pecan-milk',
    name: 'Pecan Milk',
    price: '$14.00',
    subblyProductId: 416895,
    tagline: 'The original. The classic. The Good Stuff.',
    description:
      "Our flagship — silky, naturally sweet pecan milk made fresh weekly in Chattanooga. Four ingredients, zero compromises. Delicious on its own, in your coffee, or anywhere you'd use milk.",
    ingredients: ['Pecans', 'Filtered water', 'Vanilla', 'Sea salt'],
    image: '/images/pecan-milk.jpg',
    nutrition: [
      { label: 'Calories', value: '130' },
      { label: 'Total Fat', value: '11g', daily: '14%' },
      { label: 'Saturated Fat', value: '1g', daily: '5%' },
      { label: 'Sodium', value: '60mg', daily: '3%' },
      { label: 'Total Carbs', value: '5g', daily: '2%' },
      { label: 'Protein', value: '3g' },
      { label: 'Calcium', value: '10mg', daily: '1%' },
      { label: 'Iron', value: '0.7mg', daily: '4%' },
    ],
    recipes: [
      {
        title: 'Golden Milk Latte',
        description:
          'Warm pecan milk with turmeric, cinnamon, ginger, and a touch of honey. The nutty richness of pecans makes this the coziest golden milk you\'ll ever have.',
        time: '5 min',
        difficulty: 'Easy',
      },
      {
        title: 'Overnight Oats',
        description:
          'Rolled oats soaked overnight in pecan milk with chia seeds, maple syrup, and fresh berries. Creamy, no-cook, ready when you are.',
        time: '5 min + overnight',
        difficulty: 'Easy',
      },
      {
        title: 'Pecan Milk Panna Cotta',
        description:
          'A silky, set custard made entirely with pecan milk — topped with seasonal fruit compote. Elegant enough for company, easy enough for Tuesday.',
        time: '20 min + chill',
        difficulty: 'Medium',
      },
    ],
    reviews: [
      {
        name: 'Sarah M.',
        location: 'Chattanooga, TN',
        text: 'I cancelled my oat milk subscription after one bottle. This is the real deal — you can taste how fresh it is.',
        stars: 5,
      },
      {
        name: 'James R.',
        location: 'Signal Mountain, TN',
        text: 'My kids fight over the last glass. We go through two bottles a week now. Sorry not sorry.',
        stars: 5,
      },
      {
        name: 'Priya K.',
        location: 'North Shore, TN',
        text: 'Finally a plant milk that actually froths well. My morning lattes have never been better.',
        stars: 5,
      },
    ],
  },
  {
    slug: 'chocolate-pecan-milk',
    name: 'Chocolate Pecan Milk',
    price: '$14.00',
    subblyProductId: 416902,
    tagline: 'Dessert-level good. Breakfast-level justified.',
    description:
      'Everything you love about our pecan milk, plus single-origin cacao. Rich, creamy, and dangerously drinkable — like a milkshake that\'s actually good for you.',
    ingredients: ['Pecans', 'Filtered water', 'Cacao', 'Vanilla', 'Sea salt'],
    image: '/images/chocolate-pecan-milk.jpg',
    nutrition: [
      { label: 'Calories', value: '160' },
      { label: 'Total Fat', value: '12g', daily: '15%' },
      { label: 'Saturated Fat', value: '1.5g', daily: '8%' },
      { label: 'Sodium', value: '55mg', daily: '2%' },
      { label: 'Total Carbs', value: '9g', daily: '3%' },
      { label: 'Protein', value: '3g' },
      { label: 'Calcium', value: '12mg', daily: '1%' },
      { label: 'Iron', value: '1.2mg', daily: '7%' },
    ],
    recipes: [
      {
        title: 'Chocolate Pecan Smoothie',
        description:
          'Frozen banana, a generous pour of chocolate pecan milk, a spoonful of almond butter, and ice. Thick, frosty, and absurdly good.',
        time: '3 min',
        difficulty: 'Easy',
      },
      {
        title: 'Mexican Hot Chocolate',
        description:
          'Heated chocolate pecan milk with a pinch of cayenne, cinnamon, and a tiny bit of brown sugar. Warming, spicy, deeply comforting.',
        time: '8 min',
        difficulty: 'Easy',
      },
      {
        title: 'Chocolate Chia Pudding',
        description:
          'Chia seeds stirred into chocolate pecan milk, left to set overnight. Top with coconut flakes and cacao nibs for extra crunch.',
        time: '5 min + overnight',
        difficulty: 'Easy',
      },
    ],
    reviews: [
      {
        name: 'Marcus T.',
        location: 'Red Bank, TN',
        text: 'I bought this for my kids and ended up hiding it in the back of the fridge for myself. It\'s that good.',
        stars: 5,
      },
      {
        name: 'Elena W.',
        location: 'Lookout Mountain, TN',
        text: 'Best chocolate milk I\'ve had since I was a kid. And I can actually feel good about drinking it.',
        stars: 5,
      },
      {
        name: 'Devon & Amara',
        location: 'Southside, Chattanooga',
        text: 'We put this in our coffee, our smoothies, and sometimes just drink it straight at midnight. No judgment.',
        stars: 5,
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
