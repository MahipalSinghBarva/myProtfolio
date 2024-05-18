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
  tesla,
  shopify,
  oliviaestore,
  estatedeck,
  showtime,
  threejs,
  youtube,
  icicilogo,
  bfllogo,
  bpcllogo,
  finance,
  Fevoff,
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
    title: "System Design",
    icon: web,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "Full Stack MERN Developer",
    icon: backend,
  },
  {
    title: "Data Structures and Algorithms",
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
    name: "Reactjs",
    icon: reactjs,
  },
  {
    name: "redux",
    icon: redux,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "nodejs",
    icon: nodejs,
  },
  {
    name: "mongodb",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "threejs",
    icon: threejs,
  },

  // {
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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

const experiences = [
  {
    title: "Relationship Manager - Team Lead",
    company_name: "ICICI Bank Ltd",
    icon: icicilogo,
    iconBg: "#383E56",
    date: "April 2022 - July 2023",
    points: [
      "Handled 23 Branches and 7 people of team members",
      "Mentor and guide the sales team to meet the organization requirements.", 
      "Analyze business trends and sales figures to formulate new strategies.", 
      "Initiate innovative promotional schemes to enhance visibility of BIL & PL in bank branches.",
      "Recommend modifications to current product and processes."
    ],
  },
  {
    title: "Sales Manager",
    company_name: "Fullerton India Credit Company Ltd",
    icon: finance,
    iconBg: "#E6DEDD",
    date: "Oct 21 - Mar 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Assistant Manager",
    company_name: "Bajaj Finserv Ltd.",
    icon: bfllogo,
    iconBg: "#383E56",
    date: "May 2019 - May 2021",
    points: [
      "Rural Term Loan - Salaried & Doctor Loan Assessing whether applicants qualify for loans based on the information they haveprovided in their application forms",
      "Setting credit policies, credit lines, procedures and standards in conjunction with senior managers. Evaluate a person’s credit worthiness.",
      "Reviewing loan agreements on a regular basis to ensure nothing has changed",
      "Handling customer complaints in a professional manner"
    ],
  },
  {
    title: "Sales Manager",
    company_name: "Bharat Petroleum Corporation Limited",
    icon: bpcllogo,
    iconBg: "#E6DEDD",
    date: "March 2017 - Feb 2019",
    points: [
      "Formally named as “Umang”,BPCL through this initiative would bring to the ruralpopulation, a wide range of services round the clock. Theseinclude assisted ecommerce,money transfer, cash withdrawal, mobile/DTH recharges and utility billpayments.",
      "Through the Umang initiative, BPCL will give ruralcustomers, access to a vast range of products and services ata very affordable price." ,
      "BPCL provide all type banking services, E-mitra services and all Online Government services E-commerces services etc."
    ],
  },
];

const projects = [
  {
    name: "Fevoff",
    description:
      "Developed and implemented scalable admin and userinterface using MERN stack technologies, resulting in a streamlined user experience for managing backend resources. Engineered and deployed a scalable admin and user interface, resulting in a 30% improvement in backend resource management efficiency.",
    tags: [
      {
        name: "reactJs",
        color: "text-blue-500",
      },
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "nodeJs",
        color: "text-red-500",
      },
    ],
    image: Fevoff,
    source_code_link: "https://github.com/MahipalSinghBarva/Fevoff_MERNStack",
    project_link:"https://fevoff.vercel.app/"
  },
  {
    name: "Olivia_EStore",
    description:
      "Designed and constructed a high-performing MERN stack e-commerce platform, streamlining MongoDB utilization for processing large-scale customer data sets. Engineered fluid front-end components using React.js and Redux for optimal user interactions.",
    tags: [
      {
        name: "reactJs",
        color: "text-blue-500",
      },
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "nodeJs",
        color: "text-red-500",
      },
    ],
    image: oliviaestore,
    source_code_link: "https://github.com/MahipalSinghBarva/Olivia_EStore_MERN",
    project_link:"https://olivia-estore.netlify.app/"
  },
  {
    name: "Estate_Deck",
    description:
      "Web application that enables users to search for Suitable propriety using ReactJS.",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "restapi",
        color: "text-white",
      },
      {
        name: "scss",
        color: "text-blue-300",
      },
    ],
    image: estatedeck,
    source_code_link: "https://github.com/MahipalSinghBarva/estatedeck",
    project_link:"https://estatedeck.pages.dev/"
  },
  {
    name: "ShowTime",
    description:
      "Implemented responsive design principles for Showtime movie search application using ReactJS, resulting in a 20% increase in user engagement and a seamless experience across various devices. Utilized ContextAPI to efficiently manage state and data flow.",
    tags: [
      {
        name: "ReactJS",
        color: "text-blue-500",
      },
      {
        name: "ContextAPI",
        color: "text-white",
      },
      {
        name: "SASS",
        color: "text-blue-300",
      },
    ],
    image: showtime,
    source_code_link: "https://github.com/MahipalSinghBarva/showtime",
    project_link:"https://my-showtime.netlify.app/"
  },
  {
    name: "Youtube_Clone",
    description:
      "Designed and implemented a dynamic user interface for YoutubeClone_ReactJS, leveraging HTML, CSS, and ReactJS to ensure responsiveness across multiple devices.",
    tags: [
      {
        name: "reactjs",
        color: "text-blue-500",
      },
      {
        name: "css",
        color: "text-white",
      },
      {
        name: "APIs",
        color: "text-red-700",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/MahipalSinghBarva/youtubeClone",
    project_link:"https://youtubeclone-by-mahipalsingh.netlify.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
