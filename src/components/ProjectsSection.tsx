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
          <ProjectCardV2 />
        </div>
      </LowerWrapper>
    </>
  );
};

export default Projects;
