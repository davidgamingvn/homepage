import css from "../assets/tech/css.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import threejs from "../assets/tech/threejs.svg";

import agviz from "../assets/projects/agviz.jpg";
import algoviz from "../assets/projects/algoviz.jpg";
import dall_e from "../assets/projects/dall-e-clone.jpg";
import firmnifest from "../assets/projects/firmnifest.jpg";
import javafx_shop from "../assets/projects/javafx-shop.jpg";
import muze from "../assets/projects/muze.jpg";
import socket_banking from "../assets/projects/socket-banking.jpg";
import weatherhack from "../assets/projects/weatherhack.jpg";
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

const experiences = [
  {
    title: "AI Development Intern",
    company: "fetchrocket",
    duration: "Jul 2024 - Present",
    description: `Developing an AI tool for summarizing academic materials. Utilized Pinecone for vector search, MySQL for database management, and integrated Google Gemini and OpenAI APIs for text summarization. Enhanced application performance by documenting bugs and reviewing code on GitHub.`,
    location: "Safety Harbor, FL, USA",
  },
  {
    title: "Software Engineer Intern",
    company: "Ralli",
    duration: "Apr 2024 - Present",
    description: `Contributing to the Ralli mobile app using Flutter and FlutterFlow. Implemented a CI/CD pipeline with Ruby on AWS and integrated RunSignUp API. Migrated user data from Firebase to PostgreSQL for improved data management.`,
    location: "Austin, TX, USA",
  },
  {
    title: "Research Assistant",
    company: "Arizona State University",
    duration: "Jan 2024 - Present",
    description: `Built a system for privacy-preserving calendar slot computation using MPC and PSI. Developed backend infrastructure with Python and Django, demonstrating advanced cryptographic techniques and enhancing secure multi-party collaboration.`,
    location: "Tempe, AZ, USA",
  },
  {
    title: "Sports Program Manager",
    company: "Arizona State University",
    duration: "Aug 2021 - Present",
    description: `Managed ASU’s sports programs, increasing participant engagement by 25%. Coordinated events, conducted performance evaluations, and led cross-functional teams to streamline sports-related activities.`,
    location: "Tempe, AZ, USA",
  },
  {
    title: "Sports Program Supervisor",
    company: "Arizona State University",
    duration: "Aug 2021 - Jul 2022",
    description: `Officiated various sports and managed logistics for clubs. Ensured access to equipment and practice spaces, supporting smooth operations for ASU’s sports program.`,
    location: "Tempe, AZ, USA",
  },
];

const projects = [
  {
    name: "FirmniFest",
    description:
      "Mobile application that displays daily motivational quotes that helps you manifest your personal goals.",
    link: "https://play.google.com/store/apps/details?id=com.firmnifest.neville_affirmation_app&hl=en",
    technologies: ["Flutter", "Firebase", "Bloc", "Kotlin"],
    image: firmnifest,
  },
  {
    name: "AgVis",
    description:
      "Agricultural visualization and analysis tool using public data provided by Merced County, CA to help mangage surplus resources.",
    link: "https://agvis.biz",
    technologies: ["NextJS", "React", "Typescript", "TailwindCSS", "Flask"],
    image: agviz,
  },
  {
    name: "Muze",
    description:
      "Music generative AI using Tensorflow and PyTorch with hyeprparameter tuning and model training using Ray.",
    link: "https://github.com/Chickeninvader/muze",
    technologies: ["Python", "Tensorflow", "PyTorch", "Ray", "Docker"],
    image: muze,
  },

  {
    name: "WeatherHack",
    description:
      "Submission for sunhacks ASU, a weather app that integrates Firebase and OPenWeatherMap API to provide real-time weather updates and translations.",
    link: "https://www.weatherhack.study/",
    technologies: ["JavaScript", "React", "Firebase", "Google Cloud"],
    image: weatherhack,
  },
  {
    name: "Dall-E Clone",
    description:
      "Full-stack MERN app that uses OpenAI's Dall-E API to generate images based on user input and preferences, using Cloudinary for image storage and retrieval.",
    link: "https://github.com/davidgamingvn/dall-e-clone",
    technologies: ["MongoDB", "React", "OpenAI", "Cloudinary"],
    image: dall_e,
  },
  {
    name: "AlgoViz",
    description:
      "Flutter app that visualizes popular sorting and pathfinding algorithms.",
    link: "https://github.com/davidgamingvn/algo_visualizer",
    technologies: ["Flutter", "Dart", "Data Structures and Algorithms"],
    image: algoviz,
  },
  {
    name: "Socket Banking",
    description:
      "Python socket programming project that simulates a banking system with a server and multiple clients, with support for multiple accounts and transactions implementing checkpointing-rollback algorithms for distributed systems.",
    link: "https://github.com/davidgamingvn/CSE434SocketProject",
    technologies: ["Python", "Cryptography", "Distributed Systems"],
    image: socket_banking,
  },
  {
    name: "JavaFX Shopping Platform",
    description:
      "Full-stack JavaFX app that simulates an online shopping platform with support for user authentication, product management, and cart management.",
    link: "https://github.com/davidgamingvn/JavaFX-Shopping-Platform",
    technologies: ["Java", "JavaFX", "MySQL", "CSS"],
    image: javafx_shop,
  },
];

export { projects, technologies, experiences };
