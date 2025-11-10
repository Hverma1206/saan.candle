// import candleVanilla from "@/assets/candle-vanilla.jpg";
import blueberry2 from "@/assets/blueberry/IMG_20250928_230443.jpg";
import blueberry1 from "@/assets/blueberry/IMG_20250928_230605.jpg";
import urli1 from "@/assets/urli-1.jpg";
import laddu1 from "@/assets/laddu-candle-1.jpg";
import rasmalai1 from "@/assets/rasmala-1.jpg";
import laxmigamenesh1 from "@/assets/laxmi-ganesh/IMG_20250924_212659.jpg";
import laxmigamenesh2 from "@/assets/laxmi-ganesh/IMG_20250924_212729.jpg";
import laxmigamenesh3 from "@/assets/laxmi-ganesh/IMG_20250924_214559.jpg";
import kaju1 from "@/assets/kaju-katli/IMG20250922134823.jpg"
import kaju2 from "@/assets/kaju-katli/IMG20250922134946.jpg"
import kaju3 from "@/assets/kaju-katli/IMG_20250922_232949.jpg"
import kaju4 from "@/assets/kaju-katli/IMG_20250922_233116.jpg"
import tulip1Pink from "@/assets/tulip-jar/IMG_20251006_080105.jpg"
import tulip2Pink from "@/assets/tulip-jar/IMG_20251006_080105.jpg"


// import candleLavender from "@/assets/candle-lavender.jpg";
// import candleRose from "@/assets/candle-rose.jpg";
// import candleSandalwood from "@/assets/candle-sandalwood.jpg";
// import candleOcean from "@/assets/candle-ocean.jpg";
// import candleCinnamon from "@/assets/candle-cinnamon.jpg";

export interface PricingTier {
  quantity: number;
  price: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images?: string[];
  description: string;
  pricing?: PricingTier[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Blueberry Bliss",
    price: 249,
    image: blueberry1,
    images: [blueberry1, blueberry2],
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
  {
    id: 4,
    name: "Rasmalai",
    price: 99,
    image: rasmalai1,
    description: "Delightful kesar aroma inspired by the classic Indian dessert Rasmalai.",
    pricing: [
      { quantity: 1, price: 99 },
      { quantity: 2, price: 196 },
      { quantity: 4, price: 389 },
    ],
  },
  {
    id: 5,
    name: "Laxmi Ganesh Pair Candles",
    price: 599,
    image: laxmigamenesh1,
    images: [laxmigamenesh1, laxmigamenesh2, laxmigamenesh3],
    description: "Celebrate the festive season with our special combo pack featuring Laxmi and Ganesh themed candles.",
    pricing: [
      { quantity: 1, price: 499 },
      { quantity: 2, price: 950 },
    ],
  },
  {
id: 6,
name: "Kaju Katli Scented Candle Set",
price: 109,
image: kaju1,
images: [kaju1, kaju2, kaju3, kaju4],
description: "Experience the rich and nutty aroma of Kaju Katli with our exquisitely crafted scented candle set, perfect for adding a touch of elegance to any space.",
pricing: [
{ quantity: 4, price: 109 },
{ quantity: 8, price: 194 },
],
  },
  {
    id: 7,
    name: "Pink Tulip Jar Candle",
    price: 299,
    image: tulip1Pink,
    images: [tulip1Pink, tulip2Pink],
    description: "Brighten your space with the fresh and floral scent of pink tulips, beautifully encased in an elegant jar candle.",
    pricing: [
      { quantity: 1, price: 299 },
    ],
  },
{id : 8,
  name : "Crystal' Jar Candle",
     price: 299,
    image: tulip1Pink,
    images: [tulip1Pink, tulip2Pink],
    description: "Brighten your space with the fresh and floral scent of pink tulips, beautifully encased in an elegant jar candle.",
    pricing: [
      { quantity: 1, price: 299 },
    ],
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
