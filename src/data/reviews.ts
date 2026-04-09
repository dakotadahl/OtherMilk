export interface Review {
  name: string;
  text: string;
  stars: number;
}

export const reviews: Review[] = [
  {
    name: "Haley B.",
    text: "Wildly delicious with all your faves - coffee, cereal, tea, protein shakes, baked goods, popsicles! I've purchased both the regular and chocolate pecan milk and both are genius. Equally, I love this local business for creating a reuse program with their glass bottles and for avoiding all the icky gums and filler ingredients. It's perfect!",
    stars: 5,
  },
  {
    name: "Kelly Payton",
    text: "I love Othermilk! I've been getting one bottle a week and making protein shakes with it, it's the perfect non dairy option with no bad stuff in it. And Liz is the best! She really cares about sourcing quality ingredients and puts so much care into this product, and it shows!",
    stars: 5,
  },
  {
    name: "Cameron M.",
    text: "Tasty terrific product and the kindest most thoughtful owner who puts so much intentionality into every single decision made at Other. If you're looking for an amazing milk alternative and the bonus of supporting an incredible local business, you've found it!",
    stars: 5,
  },
  {
    name: "Kody D.",
    text: "milk made from pecans is a dream come true. absolutely astonishing, decadent product. everything's better with the plain pecan in it, and the chocolate pecan will blow your mind. I love both in my protein shakes!",
    stars: 5,
  },
];
