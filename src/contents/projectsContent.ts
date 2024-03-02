import Ploop from "../assets/images/Ploop.png";
import Duckpile from "../assets/images/Duckpile.jpg";
import Portfolio from "../assets/images/Portfolio.png";
import Chexx from "../assets/images/Chexx.jpg";
import Munch from "../assets/images/Munch.jpg";

export default [
  {
    title: "Project Munch",
    description:
      "A full stack social media app for discovering unknown street food spots that cannot be found on popular search engines.",
    skills: [
      "Typescript",
      "C#",
      "React",
      "Tailwind CSS",
      ".NET Core",
      "Postgreql",
      "EF Core",
    ],
    image: Munch,
    links: {
      github: "https://github.com/xM1nh/ProjectMunchClient",
      preview: "",
    },
  },
  {
    title: "Ploop",
    description:
      "A dynamic and interactive social art platform using a modern tech stack. Implemented a microservices architecture, cloud storage with Cloudflare, integrating RabbitMQ for robust communication between services, and GraphQL for efficient data aggregation. Designed and built features for user-generated time-lapse video creation, real-time social interactions (likes, shares, comments), and a unique remixing functionality akin to popular social media platforms.",
    skills: [
      "React",
      "Express",
      "Node.js",
      "Postgresql",
      "Typescript",
      "Redux",
      "RabbitMQ",
      "Graphql",
      "WebSocket",
    ],
    image: Ploop,
    links: {
      github: "https://github.com/xM1nh/ploop",
      preview: "",
    },
  },
  {
    title: "Chexx",
    description:
      "A full stack online multiplayer Gliński's hexagonal chess variant website built with React and .NET Core",
    skills: [
      "Typescript",
      "C#",
      "React",
      ".NET Core",
      "Postgreql",
      "EF Core",
      "SignalR",
      "Redis",
    ],
    image: Chexx,
    links: {
      github: "https://github.com/xM1nh/Chexx-Backend",
      preview: "",
    },
  },
  {
    title: "Duckpile",
    description:
      "A full stack inventory management app built with React and Node. This app is made for my 3-person team during my time working at VcalTV in an effort to move away from Excel-based workflow. During the testing period, the app helped improved efficiency by almost 100% where tasks that had taken 30-60 minutes to do then only took half that time.",
    skills: ["React", "Express", "Node.js", "Postgresql", "Redux"],
    image: Duckpile,
    links: {
      github: "https://github.com/xM1nh/duckpile",
      preview: "",
    },
  },
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio, this site! Responsive website built with React.",
    skills: ["React"],
    image: Portfolio,
    links: {
      github: "https://github.com/xM1nh/personal-portfolio",
      preview: "",
    },
  },
];
