import { IProject } from "../models/IProject";

export const ProjectData: IProject[] = [
  {
    id: 3,
    title: "Silly Stocks",
    desc: "A stock app built with the MERN stack, allowing users to browse stocks, news, crypto and more. Features include user authentication, stock search with suggestions, and the ability to save favorite stocks.",
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
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
      "We learned alot during this project, what to do and what to look out for. Since this was our first fullstack project we where more than satisfied. There is alot to improve and functionallity to be fixed before calling this a finished product. But it layed a good foreground for our knowledge and made me want to improve my development skills more.",
  },
  {
    id: 4,
    title: "Facendia",
    desc: "A task manager built with the MERN stack, designed to help users track daily tasks and  analyze their productivity and behaviors.",
    stack: ["React", "Express.js", "Node.js", "MongoDB"],
    year: "January 2025 - Under development",
    links: ["cock"],
    background: "",
    challenges: [
      {
        header: "APIs:",
        text: "our API turned out to be a scam witch prevented us from getting valid updated data due to other sources having high prices",
      },
      {
        header: "Design",
        text: "Creating unique and appealing designs that stand out in a crowded market.",
      },
      {
        header: "Code structure",
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
        text: "To solve the structure problem we took the initiative to look at open source projects to get a glimpse at how we could structure out project. We tried to find a good standard and it took alot trial and error to before we where satisfied.  ",
      },
    ],
    keyFunctionality: [
      "Sign in sign up",
      "Create, read, update and delete tasks",
      "Dashboard for tracking tasks",
      "Task history check",
    ],
    conclusion:
      "We learned alot during this project, what to do and what to look out for. Since this was our first fullstack project we where more than satisfied. There is alot to improve and functionallity to be fixed before calling this a finished product. But it layed a good foreground for our knowledge and made me want to improve my development skills more.",
  },
];
