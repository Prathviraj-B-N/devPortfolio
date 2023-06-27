export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/html.png`,
  },
  {
    name: "CSS 3",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/css.png`,
  },
  {
    name: "JavaScript",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/javascript.png`,
  },
  {
    name: "TypeScript",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/typescript.png`,
  },
  {
    name: "React JS",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/reactjs.png`,
  },
  {
    name: "Next JS",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/nextjs.svg`
  },
  {
    name: "Tailwind CSS",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/tailwind.png`,
  },
  {
    name: "Node JS",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/nodejs.png`,
  },
  {
    name: "MongoDB",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/mongodb.png`,
  },
  {
    name: "git",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/git.png`,
  },
  {
    name: "docker",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/tech/docker.png`,
  },
  {
    name: "Java",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/java.png`,
  },
  {
    name: "MySQL",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/mysql.png`,
  },
];

const experiences = [
  {
    title: "BTech",
    company_name: "Sahyadri College of Engg, Mangalore",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/Sayhadrilogo.webp`,
    iconBg: "#ffffff",
    date: "August 2018 - July 2022",
    points: [
      "My First exposure to the World of Development.",
      "Wrote my first line of code.",
      "Created Beginner Projects.",
      "Landed my First internship in 4th semester.",
    ],
  },
  {
    title: "GATE",
    company_name: "All India Rank 1642",
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/gate.png`,
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
    icon: `${process.env.NEXT_PUBLIC_S3URL}/assets/iiit.png`,
    iconBg: "#ffffff",
    date: "August 2022 - present",
    points: [
      "Im Here Right now."
    ],
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
    image:  `${process.env.NEXT_PUBLIC_S3URL}/assets/iiit.png`,
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
    image:  `${process.env.NEXT_PUBLIC_S3URL}/assets/iiit.png`,
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
    image:  `${process.env.NEXT_PUBLIC_S3URL}/assets/iiit.png`,
    source_code_link: "https://github.com/Prathviraj-B-N/XDM-VIEWS",
  },
];

export { technologies, experiences, projects };
