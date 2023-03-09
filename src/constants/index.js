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
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
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
    title: "Frontend Web Development",
    icon: web,
  },
  {
    title: "Mobile Development",
    icon: mobile,
  },
  {
    title: "Fullstack Web Development",
    icon: backend,
  },
  {
    title: "Content Creation & Mentorship",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "next",
    icon: next,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer/Mentor",
    company_name: "Pluralcode",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      " Implemented user engagement strategies and integrated Google Analytics for Bullet Nigeria.",
      "Delivered interactive and engaging coding sessions, using project-based learning, pair programming, and group discussions to enhance menteeʻs learning.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "DCOSS Associates LTD",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Developed dynamic and browser-compatible web pages using ReactJS, Vanilla JS, Vanilla CSS, and CSS libraries such as Tailwind. Assisted with the website's SEO and security architecture.",
      "Created brand identity and re-engineered brand components for web and official use, reducing the company's budget by 50%",
      "Coordinated SEO, marketing, and optimization using the company's KPIs",
      "Maintaining the company's online assets by managing website content, monitoring performance, ensuring user-friendliness, implementing and enforcing web security protocols, conducting regular audits, and coordinating with other departments.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Juadeb Designs",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Creating single-page web applications and websites consuming 3rd party APIs",
      "Working with clients on bugs, features, and styling issues related to WordPress sites",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Disciplined, efficient, and all-around awesome guy who understands and delivers on what his clients want,",
    name: "Bello Daniel",
    designation: "MD/P",
    company: "DCOSS Associates Ltd",
    image: "/src/assets/partner-fixed.jpg",
  },
  {
    testimonial:
      "He's an amazing tutor and mentor; he's always patient and looking for ways to ensure mentees understand fundamental concepts.",
    name: "AY",
    designation: "Student",
    company: "Juadeb SM Mentorship Program",
    image: "/src/assets/student.jpg",
  },
  {
    testimonial:
      "Juadeb is an awesome team player, hardworking and reliable part of our team and structure.",
    name: "Cyril",
    designation: "Senior Web Engineer",
    company: "PluralCode",
    image: "/src/assets/pluracode.png",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
