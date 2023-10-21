import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import characterImage from "src/assets/character.png";
import bowman from "src/assets/bowman.png";
import {
  astro_cheeter,
  astro,
  crystal_geko_trans,
  crystal_geko,
  earth_gecko,
  honey_geko,
  ice_gecko_first,
  ice_gecko_second,
  lizard_1,
  lizard_2_new,
  lizard_2,
  water_geko,
} from "src/assets/characters";

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
    name: "astro cheeter gecko",
    number: 100,
    image: astro_cheeter,
  },
  {
    name: "astro gecko",
    number: 101,
    image: astro,
  },
  {
    name: "crystal gecko #1",
    number: 102,
    image: crystal_geko_trans,
  },
  {
    name: "crystal gecko #2",
    number: 103,
    image: crystal_geko,
  },
  {
    name: "earth gecko",
    number: 104,
    image: earth_gecko,
  },
  {
    name: "honey gecko",
    number: 105,
    image: honey_geko,
  },
  {
    name: "ice gecko #1",
    number: 106,
    image: ice_gecko_first,
  },
  {
    name: "ice gecko #2",
    number: 107,
    image: ice_gecko_second,
  },
  {
    name: "lizard gecko #1",
    number: 108,
    image: lizard_1,
  },
  {
    name: "lizard gecko #2",
    number: 109,
    image: lizard_2_new,
  },
  {
    name: "lizard gecko #3",
    number: 110,
    image: lizard_2,
  },
  {
    name: "water gecko",
    number: 111,
    image: water_geko,
  },
];
