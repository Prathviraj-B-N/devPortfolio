import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  gate,
  IIIT,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  java,
  mysql,
  sahyadri
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "MTech @ IIIT Bangalore",
    icon: backend,
  },
  {
    title: "Web3 & DevOps",
    icon: creator,
  },
];

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs
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
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "BTech",
    company_name: "Sahyadri College of Engg, Mangalore",
    icon: sahyadri,
    iconBg: "#ffffff",
    date: "August 2018 - July 2022",
    points: [
      "My First exposure to the World of Development.",
      "Wrote my first line of code.",
      "Created Begginer Projects.",
      "Landed my First internship in 4th semester.",
    ],
  },
  {
    title: "GATE",
    company_name: "All India Rank 1642",
    icon: gate,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "In search of more Knowledge I started preparing for GATE.",
      "1 year and 12 Subjects Later I Cleared it.",
    ],
  },
  {
    title: "MTech",
    company_name: "IIIT Bangalore",
    icon: IIIT,
    iconBg: "#ffffff",
    date: "August 2022 - present",
    points: [
      "Im Here Right now."
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Crowd Contract",
    description:
      "MERN Stack web3 solution for crowd funding. Smart Contract deployed on Goerli Testnet ensures peer to peer transaction without any requirement of middlemen",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "DevOps",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
      {
        name: "Web3",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Prathviraj-B-N/crowdContract",
  },
  {
    name: "Consent Management System",
    description:
      "Platform where Doctors can request and manage patient's consent. Although Data is stored in Individual hospitals , Doctor can view them all at one place without compromising patients privacy",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "SpringBoot",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/orgs/Healthcare-Application-Development/repositories",
  },
  {
    name: "XDMViews",
    description:
      "Cross Data Model Views is a framework to create Views between multiple sources of related data like json , csv , Relational DB and XML. Supports Join and Union operation.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "DataModelling",
        color: "green-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/Prathviraj-B-N/XDM-VIEWS",
  },
];

export { services, technologies, experiences, testimonials, projects };
