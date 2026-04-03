export interface Location {
  name: string;
  address: string;
  hours: string[];
  website: string;
}

export const locations: Location[] = [
  {
    name: "Studio Ours",
    address: "1401 Fort St, Chattanooga, TN 37402",
    hours: ["10am–6pm Fri–Sun"],
    website: "https://studioourscha.com/",
  },
  {
    name: "Butterfly Juice Company",
    address: "9515 Lee Hwy L, Ooltewah, TN 37363",
    hours: ["9am–6pm Tue–Thu", "9am–2pm Fri–Sat"],
    website: "https://butterflyjuiceco.com/",
  },
  {
    name: "Chattanooga Culture Kombucha Lounge",
    address: "2310 Vance Ave Suit 206, Chattanooga, TN 37404",
    hours: ["12pm–6pm Thu", "12pm–10pm Fri–Sat"],
    website: "https://chattanoogaculture.com/",
  },
  {
    name: "Bread and Butter",
    address: "3955 Dayton Blvd, Chattanooga, TN 37415",
    hours: ["7am–7pm Mon–Sat", "8am–4pm Sun"],
    website: "https://butterthebread.com/",
  },
  {
    name: "Southern Squeeze",
    address: "1301 Dorchester Rd, Chattanooga, TN 37405",
    hours: ["8am–6pm Mon–Fri", "9am–4pm Sat"],
    website: "https://southernsqueeze.com/",
  },
  {
    name: "Main Street Farmer's Market",
    address: "Chestnut Street &, W 20th St, Chattanooga, TN",
    hours: ["4pm–6pm Wed"],
    website: "https://mainstfarmersmarket.com/",
  },
  {
    name: "Understory",
    address: "400 E Main St Suite 170, Chattanooga, TN 37408",
    hours: ["10am–7pm Tue–Sat", "10am–4pm Sun"],
    website: "https://understorytea.com/",
  },
];
