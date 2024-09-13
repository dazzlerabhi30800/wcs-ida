import { TiHomeOutline } from "react-icons/ti";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlinePermMedia } from "react-icons/md";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    to: "/",
    dropdown: null,
  },
  {
    id: "about",
    title: "About",
    to: "/about",
    dropdown: null,
  },
  {
    id: "service",
    title: "Service",
    to: "/service",
    dropdown: null,
  },
  {
    id: "pages",
    title: "Pages",
    to: "/pages",
    dropdown: [],
  },
  {
    id: "blog",
    title: "Blog",
    to: "/blogs",
    dropdown: [],
  },
];

export const portfolioData = [
  {
    img: "./images/Random Imgs/img1.jpg",
    text: "Lorem ipsum dolor",
  },
  {
    img: "./images/Random Imgs/img2.jpg",
    text: "Lorem ipsum dolor",
  },
  {
    img: "./images/Random Imgs/img3.jpg",
    text: "Lorem ipsum dolor",
  },
  {
    img: "./images/Random Imgs/img4.jpg",
    text: "Lorem ipsum dolor",
  },
  {
    img: "./images/Random Imgs/img1.jpg",
    text: "Lorem ipsum dolor",
  },
];

export const whyChooseData = [
  {
    title: "Lorem ipsum",
    info: "Lorem ipsum dolor sit amet consectetur. Dictumst placerat odio vitae nunc urna ut nisi.",
  },
  {
    title: "Lorem ipsum",
    info: "Lorem ipsum dolor sit amet consectetur. Dictumst placerat odio vitae nunc urna ut nisi.",
  },
  {
    title: "Lorem ipsum",
    info: "Lorem ipsum dolor sit amet consectetur. Dictumst placerat odio vitae nunc urna ut nisi.",
  },
  {
    title: "Lorem ipsum",
    info: "Lorem ipsum dolor sit amet consectetur. Dictumst placerat odio vitae nunc urna ut nisi.",
  },
];

export const serviceData = [
  {
    icon: <TiHomeOutline />,
    title: "Lorem epsum",
    info: "Lorem ipsum dolor sit amet consectetur. Arcu volutpat ac dolor donec arcu ut. Amet id accumsan mi at.",
  },
  {
    icon: <LuLayoutDashboard />,
    title: "Remodel",
    info: "Lorem ipsum dolor sit amet consectetur. Sed nibh morbi sapien massa pellentesque ac. Ultricies.",
  },
  {
    icon: <MdOutlinePermMedia />,
    title: "Lorem epsum",
    info: "Lorem ipsum dolor sit amet consectetur. Arcu volutpat ac dolor donec arcu ut. Amet id accumsan mi at.",
  },
];
