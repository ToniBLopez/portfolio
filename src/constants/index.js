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
  harvard,
  itacademy,
  platzi,
  expirydates,
  socialmedia,
  bingogame,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Fullstack Developer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer - Projects",
    company_name: "Platzi",
    icon: platzi,
    iconBg: "#383E56",
    date: "Nov 2021 - Nov 2022",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Advanced knowledge of databases, with queries and data management.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer - Bootcamp",
    company_name: "IT Academy",
    icon: itacademy,
    iconBg: "#E6DEDD",
    date: "March 2022 - May 2022",
    points: [
      "Deepening in detail in the bases of the programming languages HTML, CSS, and Javascript.",
      "Carrying out group projects using the git version control system and developing soft and hard skills in teamwork.",
      "Cultivate self-taught learning and increase the ability to solve problems autonomously.",
      "Pressure management in work environments with deadlines.",
    ],
  },
  {
    title: "CS50x - Online Course",
    company_name: "HarvardX",
    icon: harvard,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "A broad and robust understanding of computer science and programming.",
      "How to think algorithmically and solve programming problems efficiently.",
      "Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
      "Familiarity in a number of languages, including C, Python, SQL, and JavaScript plus CSS and HTML.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Toni proved me wrong.',
    name: "Lara Herrero",
    designation: "CIO",
    company: "Hays",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Toni does.",
    name: "Chris Miller",
    designation: "Software Engineer",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Toni optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Expiry Dates",
    description:
      "Web application for the company Ametller Origen that helps to keep track of products that are going to expire soon, helping to facilitate their registration and review to ensure that stores do not have expired products for sale.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "materialUI",
        color: "white-text-gradient",
      },
      {
        name: "webpack",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: expirydates,
    source_code_link: "https://github.com/ToniBLopez/AO-expiry-dates",
    live_link: "https://expirydates.fly.dev",
    figma_link: "https://www.figma.com/file/UFwTMR5ZfRx4pFKIZtYexg/AO-Expiry-Dates-App?type=design&node-id=0%3A1&mode=design&t=YNE1A5Net1TCsXWA-1",
  },
  {
    name: "Social Media",
    description:
      "Social network made with MERN stack that allows you to upload posts, read comments, give and receive likes, access other people's public profiles and follow and unfollow whoever you want. This social network has the necessary bases so that it can be developed and improved, which is why it serves as the base project for a social network deployed to the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "materialUI",
        color: "white-text-gradient",
      },
      {
        name: "webpack",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "bcrypt",
        color: "pink-text-gradient",
      },
      {
        name: "yup&formik",
        color: "orange-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://gitlab.com/ToniBLopez/social-media-web-app",
    live_link: "https://socialmediaproject.fly.dev/",
    figma_link: "https://www.figma.com/file/GvhFMjkPIVvp92fT2k7kdO/Social-Media-App?type=design&node-id=0%3A1&mode=design&t=t3vhcUzwu2EakutI-1",
  },
  {
    name: "Bingo Game",
    description:
      "A great live game web app, that enables to play whith other real persons in real time. You can test this game app opening more than one window and play with another player at the same time.",
    // "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "express.js",
        color: "orange-text-gradient",
      },
      {
        name: "materialUI",
        color: "white-text-gradient",
      },
      {
        name: "webpack",
        color: "blue-text-gradient",
      },
    ],
    image: bingogame,
    source_code_link: "https://gitlab.com/ToniBLopez/live-bingo-game",
    live_link: "https://bingogame.fly.dev/",
    figma_link: "",
  },
]

export { services, technologies, experiences, testimonials, projects }