export interface ShopItem {
  name: string;
  description: string;
  image: string;
  href: string;
  price?: string;
  badge?: string;
}

export const shopItems: ShopItem[] = [
  {
    name: "Pecan Milk",
    description:
      "Our do-it-all alt milk. Three simple ingredients: Alabama pecans, organic maple syrup, and sea salt.",
    image: "/images/pecan-milk.webp",
    href: "/products/pecan-milk",
    price: "$14.00",
  },
  {
    name: "Chocolate Pecan Milk",
    description:
      "Alabama pecans meet organic cacao and Vermont maple syrup. Silky, chocolatey, and decadent.",
    image: "/images/chocolate-pecan-milk.webp",
    href: "/products/chocolate-pecan-milk",
    price: "$14.00",
  },
  {
    name: "Weekly Milk",
    description:
      "Fresh pecan milk, ready to drink every week. Choose your flavor, adjust quantity, pause anytime.",
    image: "/images/lifestyle.webp",
    href: "/subscribe",
    price: "$50.00/mo",
  },
];
