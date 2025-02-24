import { IProject } from "../models/IProject";
import reactIcon from "../assets/react.svg";
import mongoDbIcon from "../assets/mongoDB.svg";
import nodeJSIcon from "../assets/nodeJs.svg";
import expressJsICon from "../assets/expressJs.svg";

export const ProjectData: IProject[] = [
  {
    id: 1,
    title: "Food Scanner",
    desc: "A machine learning app built in React Native where users can scan their fridge and get healthy recipe suggestions based on the ingredients they have at home.",
    stack: ["React Native", "Express.js", "Node.js", "MongoDB"],
    stackIcons: [
      `${reactIcon}`,
      `${mongoDbIcon}`,
      `${nodeJSIcon}`,
      `${expressJsICon}`,
    ],
    year: "August 2024",
    links: ["https://github.com/ChristofferNo/foodScanner2.0"],
    background:
      "Me and a friend was fooling around and tried to come up with cool startup idees and we came along this one and it felt like a fun project to try and build. We are currently finishing our fist BETA version and then we are going to send it out for users to try. After that our plan is to gather the feedback and hire a UI/UX designer to get good wireframes for the app",
    challenges: [
      {
        header: "APIs:",
        text: "our API turned out to be a scam witch prevented us from getting valid updated data due to other sources having high prices",
      },
      {
        header: "Design:",
        text: "Creating unique and appealing designs that stand out in a crowded market.",
      },
      {
        header: "Code structure:",
        text: "Due to this being our first project we was devided on how we should structure the files in the project.",
      },
    ],
    solutions: [
      {
        header: "Self created mockdata ",
        text: "We created mockadata to simulate the former structure of the used api. It made the page not as living but we could use the same initall code to somewhat finish the page.",
      },
      {
        header: "Crash course and long planning hours",
        text: "Since our course dont involve UX/UI designing we had to improvise and apdapt to the situation. We all agreed to take a crash course in figma to get the basics going so that we could form a respectable sketch. We spend good time planing the project to ensure smooth codeing. This made us more secure in figma and soon enough we had a design we could be happy with. ",
      },
      {
        header: "Open source projects and trial and error",
        text: "To solve the structure problem we took the initiative to look at open source projects to get a glimpse at how we could structure our project. We tried to find a good standard and it took alot trial and error to before we where satisfied.  ",
      },
    ],
    keyFunctionality: ["Scan fridge and get recipe ", "Sign in sign up"],
    conclusion:
      "This mobile app project, though still in development, is proving to be an excellent learning experience. I'm gaining practical skills in React Native for building the user interface and mobile-specific functionality, as well as Express.js and Node.js for developing the backend API and server-side logic.",
  },
  {
    id: 2,
    title: "Sund Nergården",
    desc: "A luxurious getaway featuring a hotel and restaurant. The site showcase the hotel's offerings, including its food and drink menus, luxurious rooms, and unique glamping options. Third party booking system integrated.",
    stack: ["React", "SCSS", "TS", "HTML"],
    stackIcons: [],
    year: "August 2024",
    links: ["https://demosundnergarden.netlify.app/"],
    background:
      "Me and a friend found a hotell that had a outdated Wordpress page that was poorly made for mobile devices and poor performance but had good potential. We begain to make wireframes and then proceded to make the website for the hotell with the information and pictures from there old site.",
    challenges: [
      {
        header: "Animations",
        text: "make sutiable animations without making the page to flashy or switch from the luxurious theme",
      },
      {
        header: "Design",
        text: "creating unique and appealing designs that effectively showcase the hotel's diverse offerings.",
      },
    ],
    solutions: [
      {
        header: "Inspiration and market standard",
        text: "Our design process involved researching hotel websites globally. We noted that Swedish hotels often prioritize high-quality imagery and video, while Spanish hotels tend to favor animations.  We sought a middle ground, for example incorporating a subtle spin animation on the booking button to create a more interactive and user-friendly experience that encourages bookings.",
      },
      {
        header: "Inspiration and market standard Vol 2",
        text: "As said above we made sure to do endless hours with research to make sure we meet our customers standard. Thru the design process i think we made 3 wireframes so alot of trial and error was behind our third design. This iterative approach, building upon earlier versions, proved invaluable, allowing us to overcome initial challenges as creative blocks to create a successful final design.",
      },
    ],
    keyFunctionality: [
      "Display hotel facilities",
      "Show restaurant",
      "Third part booking system",
    ],
    conclusion:
      "Working on this frontend project honed my ability to collaborate with clients, understand their needs, and implement requested changes. It was also a perfect project to train your figma skills because the site hade a good amount of both information and pictures we could use",
  },
  {
    id: 3,
    title: "Silly Stocks",
    desc: "A stock app built with the MERN stack, allowing users to browse stocks, news, crypto and more. Features include user authentication, stock search with suggestions, and the ability to save favorite stocks.",
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
    stackIcons: [],
    year: "November 2024",
    links: ["https://sillystocks.netlify.app"],
    background:
      "I built this project with my classmates where we all tried this as our first react project where we wanted to use APIs to build a bigger application. We started with some wireframes in figma and then turned it into a application. Unfortunately we could not get our backend to work on netlify.",
    challenges: [
      {
        header: "APIs:",
        text: "our API turned out to be a scam witch prevented us from getting valid updated data due to other sources having high prices",
      },
      {
        header: "Design:",
        text: "Creating unique and appealing designs that stand out in a crowded market.",
      },
      {
        header: "Code structure:",
        text: "Due to this being our first project we was devided on how we should structure the files in the project.",
      },
    ],
    solutions: [
      {
        header: "Self created mockdata ",
        text: "We created mockadata to simulate the former structure of the used api. It made the page not as living but we could use the same initall code to somewhat finish the page.",
      },
      {
        header: "Crash course and long planning hours",
        text: "Since our course dont involve UX/UI designing we had to improvise and apdapt to the situation. We all agreed to take a crash course in figma to get the basics going so that we could form a respectable sketch. We spend good time planing the project to ensure smooth codeing. This made us more secure in figma and soon enough we had a design we could be happy with. ",
      },
      {
        header: "Open source projects and trial and error",
        text: "To solve the structure problem we took the initiative to look at open source projects to get a glimpse at how we could structure our project. We tried to find a good standard and it took alot trial and error to before we where satisfied.  ",
      },
    ],
    keyFunctionality: [
      "Sign in sign up",
      "Save stocks",
      "Look at related stocks and crypto",
      "Browse top picks",
    ],
    conclusion:
      "We learned a lot during this project, what to do and what to look out for. Since this was our first full stack project we where more than satisfied. There is a lot to improve and functionality to be fixed before calling this a finished product. But it laid a good foreground for our knowledge and made me want to improve my development skills more.",
  },
  {
    id: 4,
    title: "Facendia",
    desc: "A task manager built with the MERN stack, designed to help users track daily tasks and  analyze their productivity and behaviors.",
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
    stackIcons: [],
    year: "January 2025 - Under development",
    links: ["https://github.com/MalteRoz/Facendia"],
    background:
      "I have built this project to learn basic CRUD methods and how to deploy both frontend and backend to the cloud. The project started as a simpler version with TypeScript, HTML and localStorage. Since I was happy with the design and basic flow, I chose to create a version 2 using React and the MERN stack. Now I'm planning version 3 with updated technology and more robust code.  I posted version 2 on Reddit to get user feedback and got 27 users in the first three days before shutting it down to focus on the development of version 3. I'm happy with the feedback and look forward to implementing it in the next version",
    challenges: [
      {
        header: "Backend",
        text: "first solo `Fullstack` project so knowledge was limited",
      },
      {
        header: "Deployment",
        text: "had problems deploying the backend online",
      },
    ],
    solutions: [
      {
        header: "Endless youtube videos",
        text: "To get forward with the project i needed to get a good first introduction to Node.Js and Express.Js so i watched alot of videos and tried to remake the end product. While i did som backend work at Silly Stocks this was alot more challanging but there was code i could use from that project to get going with the backend. I did alot of misstakes but they made the code better and better.",
      },
    ],
    keyFunctionality: [
      "Sign in sign up",
      "Create, read, update and delete tasks",
      "Dashboard for tracking tasks",
      "Task history check",
    ],
    conclusion:
      "I'm building a more comprehensive task manager that goes beyond a typical to-do app.  This project has significantly improved my understanding of structured version control and sharpened my skills with Node.js and Express.  It's also proving to be an good learning experience for building modular React code and implementing secure data handling.",
  },
];
