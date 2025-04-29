import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

export const navLinks = [
  {
    name: "Products",
    path: "#products",
    subItems: [
      {
        name: "Electronics",
        path: "#electronics",
        subItems: [
          {
            name: "Phones",
            path: "#phones",
            subItems: [
              {
                name: "Android",
                path: "#android",
                subItems: [
                  {
                    name: "Samsung",
                    path: "#samsung",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Technology",
    path: "#technology",
    subItems: [
      {
        name: "Our Tech",
        path: "#ourTech",
        subItems: [
          { name: "Platform", path: "#platform" },
          { name: "AI Features", path: "#ai" },
          { name: "Security", path: "#security" },
        ],
      },
    ],
  },
  { name: "Learn", path: "#learn" },
  { name: "Support", path: "#support" },
  {
    name: "About Us",
    path: "#about",
    subItems: [
      {
        name: "company",
        path: "#company",
        subItems: [
          { name: "Our Story", path: "#story" },
          { name: "Team", path: "#team" },
          { name: "Careers", path: "#careers" },
        ],
      },
    ],
  },
];

export const socialIcons = [
  { name: "Facebook", icon: FaFacebook, link: "#" },
  { name: "Twitter", icon: FaXTwitter, link: "#" },
  { name: "Instagram", icon: FaInstagram, link: "#" },
  { name: "LinkedIn", icon: FaLinkedin, link: "#" },
  { name: "Youtube", icon: FaYoutube, link: "#" },
];
