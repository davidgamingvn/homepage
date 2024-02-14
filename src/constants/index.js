import css from "../assets/tech/css.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Muze",
    description: "Music generative AI using Tensorflow and PyTorch with hyeprparameter tuning and model training using Ray.",
    link: "https://github.com/Chickeninvader/muze",
    technologies: ["Python", "Tensorflow", "PyTorch", "Ray", "Docker"],
    image: "src\\assets\\projects\\muze.jpg",
  },
  {
    name: "WeatherHack",
    description: "Submission for sunhacks ASU, a weather app that integrates Firebase and OPenWeatherMap API to provide real-time weather updates and translations.",
    link: "https://github.com/davidgamingvn/weatherhack",
    technologies: ["JavaScript", "React", "Firebase", "Google Cloud"],
    image: "src\\assets\\projects\\weatherhack.jpg",
  },
  {
    name: "Dall-E Clone",
    description: "Full-stack MERN app that uses OpenAI's Dall-E API to generate images based on user input and preferences, using Cloudinary for image storage and retrieval.",
    link: "https://github.com/davidgamingvn/dall-e-clone",
    technologies: ["MongoDB", "React", "OpenAI", "Cloudinary"],
    image: "src\\assets\\projects\\dall-e-clone.jpg",
  },
  {
    name: "Socket Banking",
    description: "Python socket programming project that simulates a banking system with a server and multiple clients, with support for multiple accounts and transactions implementing checkpointing-rollback algorithms for distributed systems.",
    link: "https://github.com",
    technologies: ["Python", "Cryptography", "Distributed Systems"],
    image: "src\\assets\\projects\\socket-banking.jpg",
  },
  {
    name: "JavaFX Shopping Platform",
    description: "Full-stack JavaFX app that simulates an online shopping platform with support for user authentication, product management, and cart management.",
    link: "https://github.com/davidgamingvn/JavaFX-Shopping-Platform",
    technologies: ["Java", "JavaFX", "MySQL", "CSS"],
    image: "src\\assets\\projects\\javafx-shop.jpg",
  }
]

export { technologies, projects };
