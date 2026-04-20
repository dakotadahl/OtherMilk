export interface Location {
  name: string;
  address: string;
  website: string;
  comingSoon?: boolean;
}

export const locations: Location[] = [
  {
    name: "Studio Ours",
    address: "1401 Fort St, Chattanooga, TN 37402",
    website: "https://studioourscha.com/",
  },
  {
    name: "Butterfly Juice Company",
    address: "9515 Lee Hwy L, Ooltewah, TN 37363",
    website: "https://butterflyjuiceco.com/",
  },
  {
    name: "Chattanooga Culture Kombucha Lounge",
    address: "2310 Vance Ave Suit 206, Chattanooga, TN 37404",
    website: "https://chattanoogaculture.com/",
  },
  {
    name: "Bread and Butter",
    address: "3955 Dayton Blvd, Chattanooga, TN 37415",
    website: "https://butterthebread.com/",
  },
  {
    name: "Main Street Farmer's Market",
    address: "Chestnut Street &, W 20th St, Chattanooga, TN",
    website: "https://mainstfarmersmarket.com/",
  },
  {
    name: "Understory",
    address: "400 E Main St Suite 170, Chattanooga, TN 37408",
    website: "https://understorytea.com/",
  },
  {
    name: "Southern Squeeze",
    address: "1301 Dorchester Rd, Chattanooga, TN 37405",
    website: "https://southernsqueeze.com/",
    comingSoon: true,
  },
];
