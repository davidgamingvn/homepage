import agviz from "../assets/projects/agviz.jpg";
import algoviz from "../assets/projects/algoviz.jpg";
import apath from "../assets/projects/apath.jpg";
import copperlens from "../assets/projects/copperlens.jpg";
import dall_e from "../assets/projects/dall-e-clone.jpg";
import firmnifest from "../assets/projects/firmnifest.jpg";
import frontier from "../assets/projects/frontier.jpg";
import javafx_shop from "../assets/projects/javafx-shop.jpg";
import learnix from "../assets/projects/learnix.jpg";
import muze from "../assets/projects/muze.jpg";
import scheduler from "../assets/projects/scheduler.jpg";
import socket_banking from "../assets/projects/socket-banking.jpg";
import teamup from "../assets/projects/teamup.jpg";
import weatherhack from "../assets/projects/weatherhack.jpg";

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  location: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  technologies: string[];
  image: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Blue Cross Blue Shield of Arizona",
    duration: "Feb 2025 – Present",
    description: [
      "Manage and optimize ETL pipelines across platforms to ensure data integrity for both providers and customers.",
      "Utilise Azure Data Factory, Azure Functions, and Azure DevOps to orchestrate and monitor data workflows.",
      "Maintain internal APIs using Postman API with C# and .NET, ensuring seamless integration across systems.",
      "Implement real-time data streaming pipelines from MS SQL Server to Azure CosmosDB using Confluent Kafka.",
      "Migrate batch processing jobs from network locations to Azure blobs using Azure Kubernetes Services.",
    ],
    location: "Phoenix, AZ, USA",
  },
  {
    id: 2,
    title: "Software Development Intern",
    company: "fetchrocket",
    duration: "Jul 2024 - Oct 2024",
    description: [
      "Developing an AI tool for summarizing academic materials.",
      "Utilized Pinecone for vector search, MySQL for database management.",
      "Integrated Google Gemini and OpenAI APIs for text summarization.",
      "Developed new 'Quiz' features for the application that helps students review materials through quiz flashcards.",
    ],
    location: "Safety Harbor, FL, USA",
  },
  {
    id: 3,
    title: "Software Engineer Intern",
    company: "Ralli",
    duration: "Apr 2024 - Nov 2024",
    description: [
      "Contributing to the Ralli mobile app using Flutter and FlutterFlow.",
      "Implemented a CI/CD pipeline with Ruby on AWS and integrated RunSignUp API.",
      "Migrated user data from Firebase to PostgreSQL for improved data management.",
    ],
    location: "Austin, TX, USA",
  },
  {
    id: 4,
    title: "Research Assistant",
    company: "Arizona State University",
    duration: "Jan 2024 - Oct 2024",
    description: [
      "Built a system for privacy-preserving calendar slot computation using MPC and PSI.",
      "Developed backend infrastructure with Python and Django.",
      "Demonstrated advanced cryptographic techniques and enhancing secure multi-party collaboration.",
    ],
    location: "Tempe, AZ, USA",
  },
  {
    id: 5,
    title: "Sports Program Manager",
    company: "Arizona State University",
    duration: "Aug 2021 - Oct 2024",
    description: [
      "Managed ASU’s sports programs, increasing participant engagement by 25%.",
      "Coordinated events, conducted performance evaluations.",
      "Led cross-functional teams to streamline sports-related activities.",
    ],
    location: "Tempe, AZ, USA",
  },
  {
    id: 6,
    title: "Sports Program Supervisor",
    company: "Arizona State University",
    duration: "Aug 2021 - Jul 2022",
    description: [
      "Officiated various sports and managed logistics for clubs.",
      "Ensured access to equipment and practice spaces.",
      "Supported smooth operations for ASU’s sports program.",
    ],
    location: "Tempe, AZ, USA",
  },
];

const projects: Project[] = [
  {
    name: "FrontierMap",
    description:
      "Mobile and web application that helps Frontier ISP users optimize their home network setup by identifying the best locations for wifi extenders using AR scanning and least optimal distance algorithms.",
    link: "https://frontiermap.tech",
    technologies: [
      "UIKit",
      "OpenCV",
      "Numpy",
      "Docker",
      "Google Cloud Run",
      "NextJS",
      "TailwindCSS",
      "Vercel",
    ],
    image: frontier,
  },
  {
    name: "Scheduler",
    description:
      "AI assisted tool that helps students better manage their time doing homeworks by populating their schedule based on their skills, needs, and time constraints.",
    link: "https://devpost.com/software/scheduler-zmlngu",
    technologies: [
      "NextJS",
      "MongoDB",
      "Atlas Vector Search",
      "Intel Tiber Cloud",
      "Auth0",
    ],
    image: scheduler,
  },
  {
    name: "TeamUp",
    description:
      "Web application that helps hackers at hackathons to form teams based on individual skills, goals, and experiences.",
    link: "https://github.com/Blank-FS/team-up",
    technologies: ["NextJS", "MongoDB", "Netlify", "Auth0"],
    image: teamup,
  },
  {
    name: "Learnix",
    description:
      "Web application that helps students learn and practice Linux fundamentals through an interactive terminal session and MDX rendered learning content.",
    link: "http://35.225.39.137/",
    technologies: [
      "Vite + React",
      "Flask",
      "Auth0",
      "MongoDB",
      "Docker",
      "GCP",
      "Terraform",
    ],
    image: learnix,
  },
  {
    name: "CopperLens",
    description:
      "Web application that provides a platform for users to share and discover latest knowledge and news about the Arizona mining industry. Submission for ASU's SparkChallenge Hackathon, with a focus on sustainability and innovation.",
    link: "https://sparkchallenge-nextjs-frontend-583938538589.us-central1.run.app/",
    technologies: ["NextJS", "Flask", "Langchain", "PineconeDB", "GCP"],
    image: copperlens,
  },
  {
    name: "APath",
    description:
      "Web application that helps users edit and cater their resume to specific jobs and career goals.",
    link: "https://frontend-583938538589.us-central1.run.app",
    technologies: ["NextJS", "Django", "Docker", "GCP"],
    image: apath,
  },
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

export { experiences, projects };
