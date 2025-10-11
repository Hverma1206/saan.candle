// import candleVanilla from "@/assets/candle-vanilla.jpg";
import blueberry1 from "@/assets/blueberry-1.jpg";
import urli1 from "@/assets/urli-1.jpg";
import laddu1 from "@/assets/laddu-candle-1.jpg";
import rasmalai1 from "@/assets/rasmala-1.jpg";
// import candleLavender from "@/assets/candle-lavender.jpg";
// import candleRose from "@/assets/candle-rose.jpg";
// import candleSandalwood from "@/assets/candle-sandalwood.jpg";
// import candleOcean from "@/assets/candle-ocean.jpg";
// import candleCinnamon from "@/assets/candle-cinnamon.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Blueberry Bliss",
    price: 249,
    image: blueberry1,
    description: "Warm blueberry with hints of vanilla",
  },
  {
    id: 2,
    name: "Urli",
    price: 199,
    image: urli1,
    description: "Calming lavender with subtle herbal notes",
  },
  {
    id: 3,
    name: "Laddu Candle",
    price: 99,
    image: laddu1,
    description: "Warm and sweet notes of traditional Indian laddu.",
  },
  // {
  //   id: 4,
  //   name: "Sandalwood Serenity",
  //   price: 36.99,
  //   image: candleSandalwood,
  //   description: "Rich sandalwood with warm amber undertones",
  // },
  // {
  //   id: 5,
  //   name: "Ocean Breeze",
  //   price: 30.99,
  //   image: candleOcean,
  //   description: "Fresh ocean air with citrus and sea salt",
  // },
  // {
  //   id: 6,
  //   name: "Cinnamon Spice",
  //   price: 29.99,
  //   image: candleCinnamon,
  //   description: "Warming cinnamon with clove and nutmeg",
  // },
];
