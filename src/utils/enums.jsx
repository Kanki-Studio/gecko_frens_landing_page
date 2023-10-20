import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import characterImage from "src/assets/character.png";
import bowman from "src/assets/bowman.png";

export const social_media = [
  {
    icon: <FaFacebookF />,
    color: "#0358BB",
  },
  {
    icon: <FaTwitter />,
    color: "#0CA4D3",
  },
  {
    icon: <FaYoutube />,
    color: "#B61414",
  },
  {
    icon: <FaLinkedin />,
    color: "#0E3392",
  },
];

export const footer_nav = [
  {
    name: "home",
    to: "/home",
  },
  {
    name: "market",
    to: "/market",
  },
  {
    name: "about",
    to: "/about",
  },
];

export const characters = [
  {
    name: "kraven",
    price: "0.0002",
    type: "legendary",
    number: 100,
    image: characterImage,
  },
  {
    name: "raven",
    price: "0.0002",
    type: "common",
    number: 101,
    image: bowman,
  },
  {
    name: "kraven",
    price: "0.0002",
    type: "legendary",
    number: 102,
    image: characterImage,
  },
  {
    name: "raven",
    price: "0.0002",
    type: "rare",
    number: 103,
    image: bowman,
  },
  {
    name: "kraven",
    price: "0.0002",
    type: "legendary",
    number: 104,
    image: characterImage,
  },
  {
    name: "raven",
    price: "0.0002",
    type: "uncommon",
    number: 105,
    image: bowman,
  },
];
