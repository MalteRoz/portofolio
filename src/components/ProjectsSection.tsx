import React from "react";
import "./scss/_projects.scss";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

import foodScannerImg from "../assets/imgs/FoodScanner.svg";
import sundImg from "../assets/imgs/sundNergarden.png";
import sillyStockImg from "../assets/imgs/silly stocks.png";
import facendiaImg from "../assets/imgs/facendia.png";
import UpperWrapper from "./UpperWrapper";
import LowerWrapper from "./LowerWrapper";
import ProjectCardV2 from "./ProjectCardV2";

const foodScannerStack: any = [
  "React Native",
  "Express.js",
  "Node.js",
  "MongoDB",
];

const sundStack: any = ["React", "SCSS", "HTML5", "TypeScript"];

const sillyStockStack: any = ["React", "Express.js", "Node.js", "MongoDB"];
const facendiaStack: any = ["React", "Express.js", "Node.js", "MongoDB"];

const Projects = () => {
  return (
    <>
      <UpperWrapper>
        <SectionHeader
          title="Projects I’ve Built "
          subheader="I try to explor diffrent industries, solving real problems, and building meaningful solutions."
        />
      </UpperWrapper>
      <LowerWrapper>
        <div className="project-section-container">
          {/* <ProjectCard
            title="FridgeScanner"
            desc="A machine learning app built in React Native where users can scan their fridge and get healthy recipe suggestions based on the ingredients they have at home."
            img={foodScannerImg}
            stack={foodScannerStack}
          />
          <ProjectCard
            title="Sund Nergården"
            desc="A luxurious hotel and restaurant website for Sund Nergården, built with React and SCSS, featuring offerings and a third-party integrated booking system."
            img={sundImg}
            stack={sundStack}
          />

          <ProjectCard
            title="Silly Stocks"
            desc="A stock app built with the MERN stack, allowing users to browse stocks, news, crypto and more. Features include user authentication, stock search with suggestions, and the ability to save favorite stocks."
            img={sillyStockImg}
            stack={sillyStockStack}
          />
          <ProjectCard
            title="Facendia"
            desc="A task manager built with the MERN stack, designed to help users track daily tasks and  analyze their productivity and behaviors."
            img={facendiaImg}
            stack={facendiaStack}
          /> */}
          <ProjectCardV2 />
        </div>
      </LowerWrapper>
    </>
  );
};

export default Projects;
