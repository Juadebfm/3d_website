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
    title: "WordPress Development",
    icon: mobile,
  },
  {
    title: "Fullstack Web Development",
    icon: backend,
  },
  {
    title: "Mentorship",
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
      " Implemented user engagement strategies and integrated Google Analytics that enhanced decision making for the project management team of Bullet Nigeria.",
      "Delivered interactive and engaging coding sessions, using project-based learning, and pair programming which resulted in the reduction of the learning curve initially required for the students in 2022 - 2023 cohorts of Pluralcode Academy there-by improving the brand's value as a tech-ed company",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products like admin dashboard to measure product sales and conversion rates.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Part of the design and development team for SAGE Institute of Business and Management. A subsidiary product of Pluracode",
    ],
  },
  {
    title: "Web Developer",
    company_name: "DCOSS Associates LTD",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Developed dynamic and browser-compatible web pages using ReactJS, Nextjs, CSS (Tailwind, BootStrap, SASS) and reduced the company's budget for web development by at least 40% of the initial budget planned",
      "Assisted with the website's SEO and security architecture.",
      "Developed the brand identity and re-designed the brand components of the company for web and official use, reducing the company's budget by another 10%",
      "Maintaining the company's online assets by managing website content, monitoring performance, ensuring user-friendliness, implementing and enforcing web security protocols, conducting regular audits, and coordinating with other departments hence reducing the over-head budget need to run the business",
    ],
  },
  {
    title: "Frontend Web Developer",
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
    name: "Article Summarizer",
    description:
      "Web-based application that help users simplify reading and reduce assimilation time with an open-source article summarizer that transforms lengthy articles into clear, concise and precise summaries.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "RAPID API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Juadebfm/juadeb-text-summarizer",
  },
  {
    name: "React E-Commerce",
    description:
      "A simple react e-commerce SPA, that consumes a REST API (fakestore) and has product selection functions, still in progress, adding checkout and payment gateways soon",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "REST API",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Juadebfm/react_js_ecommerce",
  },
  {
    name: "Kara-Kata",
    description:
      "A ecommerce website built using HTML, CSS and Javascript that has cart functionalities and is fully responsive. A project created using vanilla web development languages. Still in progress",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Sweet Alert",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Juadebfm/Kara_Kata-Ecommerce",
  },
];

export { services, technologies, experiences, testimonials, projects };
