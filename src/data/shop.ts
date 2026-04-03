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
    image: "/images/pecan-milk.jpg",
    href: "/products/pecan-milk",
    price: "$14.00",
  },
  {
    name: "Chocolate Pecan Milk",
    description:
      "Alabama pecans meet organic cacao and Vermont maple syrup. Silky, chocolatey, and decadent.",
    image: "/images/chocolate-pecan-milk.jpg",
    href: "/products/chocolate-pecan-milk",
    price: "$14.00",
  },
  {
    name: "Subscribe & Save",
    description:
      "Fresh pecan milk delivered to your door every week. Never run out, never compromise.",
    image: "/images/lifestyle-banner.jpg",
    href: "/subscribe",
    price: "$50.00/mo",
    badge: "Save 10+%",
  },
];
