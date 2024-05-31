import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Brand1 from "../public/brand-1.png"
import Brand2 from "../public/brand-2.png"
import Brand3 from "../public/brand-3.png"
import Brand4 from "../public/brand-4.png"
import Brand5 from "../public/brand-5.png"

export const SOCIAL_ICONS = [
  <Facebook size={18} />,
  <Twitter size={18} />,
  <Linkedin size={18} />,
  <Instagram size={18} />,
];

export const NAV_MENU = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Shop",
    link: "#",
    hasShopMenu: true,
    subMenu: [
      {
        img: "/img-1.webp",
        item: "Latest",
        price: "$10- $50",
        link: "/latest",
        descp:
          "Tailor-made fashion Trend books, essential for interpreting the trends of the coming seasons.",
      },
      {
        img: "/img-2.webp",
        item: "New Arrival",
        price: "$10- $60",
        link: "/new-arrival",
        descp:
          "Our new arrivals clothing includes everything from casual wear to formal attire ensuring you to create your favourite new outfit for any events",
      },
      {
        img: "/img-4.webp",
        item: "Trendy",
        price: "$20- $50",
        link: "/trendy",
        descp:
          "Tailor-made fashion Trend books, essential for interpreting the trends of the coming seasons.",
      },
    ],
  },
  {
    text: "Pages",
    link: "#",
    subMenu: [
      {
        item: "Team",
        link: "/team",
      },
      {
        item: "Product",
        link: "/product",
      },
      {
        item: "Faq",
        link: "/faq",
      },
      {
        item: "Testimonal",
        link: "/testimonial",
      },
    ],
  },
  {
    text: "Blog",
    link: "#",
    subMenu: [
      {
        item: "Blog Standard",
        link: "/blog",
      },
      {
        item: "Blog Grid",
        link: "/blog",
      },
      {
        item: "Faq",
        link: "/faq",
      },
      {
        item: "Blog Details",
        link: "/blog",
      },
    ],
  },
];

export const BRAND_ICONS = [Brand1, Brand2, Brand3, Brand4, Brand5, Brand1, Brand2, Brand3, Brand4, Brand5]
