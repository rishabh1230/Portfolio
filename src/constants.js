// Skill sections logo
import htmlLogo from './assets/techlogo/html.png';
import bootstrapLogo from './assets/techlogo/bootstrap.png';
import javascriptLogo from './assets/techlogo/javascript.png';
import reactjsLogo from './assets/techlogo/reactjs.png';
import tailwindcssLogo from './assets/techlogo/tailwindcss.png';
import nodejsLogo from './assets/techlogo/nodejs.png';
import expressjsLogo from './assets/techlogo/express.png';
import mongodbLogo from './assets/techlogo/mongodb.png';
import cLogo from './assets/techlogo/c.png';
import cppLogo from './assets/techlogo/cpp.png';
import javaLogo from './assets/techlogo/java.png';
import pythonLogo from './assets/techlogo/python.png';
import gitLogo from './assets/techlogo/git.png';
import githubLogo from './assets/techlogo/github.png';
import vscodeLogo from './assets/techlogo/vscode.png';
import postmanLogo from './assets/techlogo/postman.png';
import figmaLogo from './assets/techlogo/figma.png';
import netlifyLogo from './assets/techlogo/netlify.png';
import cssLogo from './assets/techlogo/css.png';
import dockerLogo from './assets/techlogo/docker.png';
import sqlLogo from './assets/techlogo/sql.jpg';
import nestjsLogo from './assets/techlogo/nestjslogo.webp';
import prismaLogo from './assets/techlogo/prisma.webp';
import rabbitmqLogo from './assets/techlogo/rabbitmq.png';
import pqsqlLogo from './assets/techlogo/pgsql.png';
import redisLogo from './assets/techlogo/redis.webp';
import typescriptLogo from './assets/techlogo/typscript.png';
import websocketLogo from './assets/techlogo/websockets.png';
import springBootLogo from './assets/techlogo/springboot.png';

//Education section logos

import thsLogo from './assets/educationlogo/ths.webp';
import abesLogo from './assets/educationlogo/abes.jpg';
import ddpsLogo from './assets/educationlogo/ddps.jpeg';

//project section images
import framvaultImage from './assets/projlogo/frameVault.png';
import relocAIImage from './assets/projlogo/relocAI.jpeg';
import skillsyncImage from './assets/projlogo/skillsync.png';
import ayursutraImage from './assets/projlogo/Ayurshutra.png';
import ledgerlensImage from './assets/projlogo/leadgerlens.png';
import virtualMouseImage from './assets/projlogo/virtualmouse.png';


//experience section logos
import flashverseLogo from './assets/flashverse_logo.jpg';
import oppiaLogo from './assets/oppialogo.jpg';



export const SkillsInfo = [
  {
    title: 'Frontend and Database',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'SQL', logo: sqlLogo },
      { name: 'PgSQL', logo: pqsqlLogo },
      { name: 'Redis', logo: redisLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'NestJS', logo: nestjsLogo },
      { name: 'RMQ', logo: rabbitmqLogo },
      { name: 'Web Sockets', logo: websocketLogo },
      { name: 'Spring Boot', logo: springBootLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'Type Script', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Prisma', logo: prismaLogo },
      { name: 'Docker', logo: dockerLogo },
    ],
  },
];


export const education = [
    {
      id: 0,
      img: abesLogo,
      school: "ABES Engineering College",
      date: "2023-2027",
      grade: "7.51 CGPA (current)",
      desc: "I am currently in 6th Semester",
      degree: "B.Tech",
    },
    {
      id: 1,
      img: ddpsLogo,
      school: "DDPS School",
      date: "2023",
      grade: "75%",
      desc: "I completed my XII from DDPS School from CBSE board.",
      degree: "XII (CBSE)- PCM",
    },
    {
      id: 2,
      img: thsLogo,
      school: "Tender Hearts School",
      date: "2021",
      grade: "91%",
      desc: "I completed my X class from Tender Hearts School from CBSE board.",
      degree: "X(CBSE)",
    },
  ];

  export const projects = [
    {
      id: 0,
      title: "SkillSync – Collaboration & Hackathon Platform",
      description:
        ["A distributed microservices platform with 6+ services (Auth, User, Project, Chat, Hackathon, Notification) using API Gateway and event-driven architecture. Implemented JWT-based centralized authentication and asynchronous messaging RabbitMQ, handling requests with 30% improved response efficiency.",
          "Enabled real-time collaboration via WebSockets and optimized performance using Redis caching and rate limiting.",
       "Designed an event-driven smart collaboration engine that triggers notifications, feed prioritization, and collaboration suggestions based on user activity in near real-time."
        ],
      image: skillsyncImage,
      tags: ["NestJs", "Microservices","PostgreSQL","Prisma", "RabbitMQ", "WebSockets", "Redis","Docker", "JWT"],
      github: "https://github.com/rishabh1230/SkillSync",
      webapp: "https://github.com/rishabh1230/SkillSync",
    },
    {
      id: 1,
      title: "FrameVault Web App",
      description:
        ["Full-stack e-commerce platform for curated cinema content with secure Google OAuth authentication and production-ready UI.",
          "Engineered end-to-end purchase and payment workflows using Stripe and PayPal, with integrated order tracking and delivery pipelines that manages 10+ orders",
          "Modular backend architecture with RESTful APIs, improving code maintainability and reducing feature integration time during 100+ unit tests."
        ],
      image: framvaultImage,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Stripe", "RajorPay", "TMDB API", "Google OAuth", "Tailwind CSS"],
      github: "https://github.com/rishabh1230/FrameVault",
      webapp: "https://frame-vault-old.vercel.app/",
    },
    {
      id: 2,
      title: "RelocAI – Smart Relocation Intelligence Platform",
      description:
        ["AI-driven mobile application that recommends personalized places in a new city by analyzing user lifestyle preferences and historical location data.",
          "Engineered a backend pipeline integrating Google Places and Distance Matrix APIs for geospatial filtering and distance-aware recommendations upto 5 KM+ distance.",
          "AI-based ranking engine using Gemini to generate match scores and contextual reasoning, improving recommendation relevance and personalization used and voted by 50+ users in a hackathon.",
        ],
      image: relocAIImage,
      tags: ["Node.js", "React Native(Expo)", "Express", "Google Places API", "Google Distance Matrix API", "Gemini API"],
      github: "https://github.com/rishabh1230/RelocAI-Smart-Relocation-Intelligence-Platform",
      webapp: "https://www.youtube.com/watch?v=qmkvW4GEPQo&t=7s",
    },
    {
      id: 3,
      title: "Ayursutra-Hopital-Management-System",
      description:
        ["AyurSutra is a full-stack healthcare management platform designed to streamline hospital operations, enhance patient experience, and enable efficient coordination between doctors, patients, and administrators.",
          "It provides a scalable digital solution for appointment booking, authentication, and healthcare workflow management using modern web technologies."
        ],
      image: ayursutraImage,
      tags: ["React JS", "Node.js", "firebase", "Express", "Tailwind CSS","JWT", "Google OAuth",],
      github: "https://github.com/rishabh1230/Ayursutra--Hopital-Management-System",
      webapp: "https://ayushsutra-docter.vercel.app/login",
    },
    {
      id: 4,
      title: "Virtual Mouse using Hand Gesture Recognition",
      description:
        ["A Virtual Mouse System that allows users to control the computer mouse using hand gestures captured through a webcam. This project uses Computer Vision and Hand Tracking techniques to enable touchless human–computer interaction.",],
      image: virtualMouseImage,
      tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      github: "https://github.com/rishabh1230/Virtual_Mouse",
      webapp: "https://github.com/rishabh1230/Virtual_Mouse",
    },
    {
      id: 5,
      title: "LedgerLens-AI-Financial-Intelligence-Platform",
      description:
      ["LedgerLens is a backend, AI-powered financial intelligence and research platform designed to convert complex corporate filings and ledger data into structured, actionable insights.",
        "It combines Retrieval-Augmented Generation (RAG) for intelligent querying with cryptographic hash chaining to ensure data integrity.",
      ],
      image: ledgerlensImage,
      tags: ["NestJS", "Node.js", "prisma", "postgreSQL", "RAG","JWT", "Gemini API",],
      github: "https://github.com/rishabh1230/-LedgerLens-AI-Financial-Intelligence-Platform",
      webapp: "https://github.com/rishabh1230/-LedgerLens-AI-Financial-Intelligence-Platform",
    },
];

export const experience = [
  {
    id: 0,
    company: "FlashVerse",
    position: "Software Development Intern",
    date: "Nov 2025 - Present",
    description: ["Architected and deployed 5+ backend microservices for user management, content workflows, and notification systems, improving modularity and service isolation.",
      "Built a secure Auth Service using JWT and RBAC, handling multiple authentication requests with 150ms average latency.",
      "Developed a User Service supporting profile management and follow-unfollow relationships, optimizing query performance by 30% via indexing and schema design.",
      "Refactored onboarding and notification pipelines, cutting delivery delays and improving system reliability.",
      "Identified and resolved 15+ critical backend issues, enhancing system stability and reducing production errors.",
    ],
    img: flashverseLogo,
  },
  {
    id: 1,
    company: "Oppia",
    position: "Open Source Contributor",
    date: "Mar 2026 - Present",
    description: ["Worked on the frontend of Oppia as an Open Source Contributor, focusing on AngularJS component improvements and UI bug fixes. Fixed the long username overflow issue in dropdown components to improve responsiveness and user experience. Also contributed to resolving simultaneous editing change handling to ensure smoother real-time collaboration and better state consistency across edits." ],
    img: oppiaLogo,
  },
];