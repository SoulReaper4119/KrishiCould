import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "At our fertilizer e-commerce website, our mission is to provide our customers with the highest quality fertilizers delivered straight to their doorsteps. We are committed to offering a seamless online shopping experience, with a wide selection of products, competitive pricing, and exceptional customer service.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Our vision is to provide a seamless and user-friendly online experience that empowers our farmers to make informed decisions about the types of fertilizers that best suit their needs. Ultimately, our vision is to empower farmers to achieve their full potential by providing access to high-quality fertilizers and expert guidance on their use.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Fertilizer has been used in agriculture for thousands of years. However, it was not until the 19th century that the modern fertilizer industry began to take shape. With the rise of the internet and e-commerce, the fertilizer industry has also evolved. Online retailers began to offer fertilizer products to farmers, making it easier to access and purchase the products they need.",
  },
];
