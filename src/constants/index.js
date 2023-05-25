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
  teeM,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  next,
  dcoss,
  musicPlayer,
  portfolio,
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
    title: "Mentorship",
    icon: creator,
  },
  {
    title: "Web Design",
    icon: web,
  },
  {
    title: "Web Development",
    icon: mobile,
  },
  {
    title: "Fullstack Web Development",
    icon: backend,
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
    company_name: "Pluralcode, Lagos",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Successfully implemented user engagement strategies and integrated Google Analytics, resulting in a 20% increase in user interaction and a 15% improvement in conversion rates for the project management team at Bullet Nigeria",
      "Delivered interactive coding sessions, utilizing project-based learning and pair programming methodologies, resulting in a significant 30% reduction in the learning curve for students in the 2022-2023 cohorts of Pluralcode Academy. This accelerated their skill development and contributed to a 25% increase in student satisfaction ratings",
      "Collaborated closely with cross-functional teams, including designers, product managers, and other developers, to create high-quality products. For example, my contributions to the development of an admin dashboard led to a 40% improvement in sales tracking accuracy and a 20% increase in overall conversion rates",
      "Ensured seamless user experiences by implementing responsive design techniques, resulting in a 25% decrease in bounce rates and a 15% increase in average session duration across various devices and browsers.",
      "Actively participated in code reviews, providing constructive feedback that improved code quality and adherence to best practices, resulting in a 30% reduction in the number of critical bugs and a 20% increase in overall code efficiency.",
      "Played a pivotal role in the design and development of the SAGE Institute of Business and Management platform, contributing to a successful launch with a 90% user adoption rate and a 40% increase in revenue within the first quarter.",
    ],
  },
  {
    title: "Web Developer & IT (Remote)",
    company_name: "DCOSS Associates LTD",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2022 - Present",
    points: [
      "Developed dynamic and browser-compatible web pages using ReactJS, Next.js, and CSS frameworks such as Tailwind and SASS, resulting in a remarkable 40% reduction in the company's web development budget compared to the initial planned budget.",
      "Assisted in implementing effective SEO strategies and enhancing the website's security architecture, resulting in a 15% increase in organic search traffic and a 30% reduction in security vulnerabilities.",
      "Led the brand identity development and redesigned the company's web and official components, achieving a 10% cost reduction in brand-related expenses.",
      "Managed the company's online assets by consistently updating website content, monitoring performance metrics, ensuring user-friendliness, implementing robust web security protocols, conducting regular audits, and coordinating with other departments. These efforts led to a 25% decrease in operational costs associated with maintaining online platforms.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Juadeb Designs, Lagos",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2020 - Present",
    points: [
      "Developed and maintained web applications using React.js and other relevant technologies, delivering high-quality and efficient solutions to clients.",
      "Created single-page web applications and websites that seamlessly integrated with various 3rd party APIs, enhancing functionality and data integration capabilities.",
      "Collaborated closely with clients to address bugs, implement new features, and resolve styling issues on WordPress sites, ensuring client satisfaction and maintaining strong working relationships.",
      "Implemented responsive design principles, ensuring optimal user experience across different devices, and prioritized cross-browser compatibility to reach a wider audience.",
      "Actively participated in code reviews, offering valuable insights and constructive feedback to fellow developers, fostering a collaborative and growth-oriented environment",
    ],
  },
  {
    title: "Sales Representative",
    company_name: "Tommy Trading Co. Kano",
    icon: teeM,
    iconBg: "#383E56",
    date: "2008 - 2009",
    points: [
      "Responsible for managing sales and storekeeping operations at a children's wear and general product company.",
      "Conducted market research to identify customer preferences, trends, and competition in the industry.",
      "Developed effective product marketing strategies to promote sales and maximize revenue.",
      "Actively engaged with customers to understand their needs, provide product recommendations, and ensure customer satisfaction.",
      "Handled store inventory management, including receiving, organizing, and maintaining stock levels.",
      "Assisted in visual merchandising and creating attractive displays to showcase products.",
      "Utilized sales techniques to generate leads, negotiate deals, and achieve sales targets.",
      "Provided excellent customer service, addressing inquiries, resolving complaints, and building long-term relationships with clients.",
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
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1685006046/partner-fixed_aqv3zy.jpg",
  },
  {
    testimonial:
      "He's an amazing tutor and mentor; he's always patient and looking for ways to ensure mentees understand fundamental concepts.",
    name: "AY",
    designation: "Student",
    company: "Juadeb SM Mentorship Program",
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1685006066/student_vi7inf.jpg",
  },
  {
    testimonial:
      "Juadeb is an awesome team player, hardworking and reliable part of our team and structure.",
    name: "Cyril",
    designation: "Senior Web Engineer",
    company: "PluralCode",
    image:
      "https://res.cloudinary.com/juadeb/image/upload/v1685006085/pluracode_llj6qp.png",
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
  {
    name: "DCOSS Official Website",
    description:
      "A responsive website for a treasury management company called DCOSS Associates Limited",
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
    ],
    image: dcoss,
    source_code_link: "https://github.com/Juadebfm/dcoss_fixed",
  },
  {
    name: "Music Player",
    description: "A music player app designed using ReactJS",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "React JS",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: musicPlayer,
    source_code_link: "https://github.com/Juadebfm/juadebfm_music_app",
  },
  {
    name: "Portfolio Website",
    description: "Portfolio Website",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "red-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Juadebfm/Oluwafemi",
  },
];

export { services, technologies, experiences, testimonials, projects };
