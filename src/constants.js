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


//Education section logos

import thsLogo from './assets/educationlogo/ths.webp';
import abesLogo from './assets/educationlogo/abes.jpg';;

//project section images
import ecommerceImage from './assets/projlogo/ecommerce.webp';
import movieRecImage from './assets/projlogo/movierec.png';
import portfolioImage from './assets/projlogo/portfolio.jpg';
import videotubeImage from './assets/projlogo/videotube.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
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
      desc: "I am currently in 5th Semester",
      degree: "B.Tech",
    },
    {
      id: 1,
      img: thsLogo,
      school: "Tender Hearts School",
      date: "2023",
      grade: "84.6%",
      desc: "I completed my XII from Tender Hearts School from CBSE board.",
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
      title: "VideoTube",
      description:
        "A video Shareing app works like youtube build the backend completly by myself working on frontend.",
      image: videotubeImage,
      tags: ["Node", "Express","MongoDB", "PostMan", "Cloudinary"],
      github: "https://github.com/rishabh1230/VideoTube",
      webapp: "https://github.com/rishabh1230/VideoTube",
    },
    {
      id: 1,
      title: "Benkart",
      description:
        "A Full Stack Ecommerce App build using MERN stack including all feature like add to cart and order. Also handles price drop alerts via SMS, mail and notifications",
      image: ecommerceImage,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/rishabh1230/benkart",
      webapp: "https://github.com/rishabh1230/benkart",
    },
    {
      id: 2,
      title: "Movie Recommendation System",
      description:
        "A data Science Project build using python libraries like numpy, pandas, matplotlib. The data modification and recommendation design done.",
      image: movieRecImage,
      tags: ["Python", "Numpy", "Pandas", "matplotlib"],
      github: "https://github.com/rishabh1230/benkart",
      webapp: "https://github.com/rishabh1230/benkart",
    },
    {
      id: 3,
      title: "Portfolio",
      description:
        "Designed a portfolio for myself in React js",
      image: portfolioImage,
      tags: ["React JS", "Node.js", "NPM"],
      github: "",
      webapp: "https://github.com/rishabh1230/benkart",
    },
];