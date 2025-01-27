import React from "react";
import "./scss/_myStack.scss";
import SectionHeader from "./SectionHeader";
import htmlIcon from "../assets/html.svg";
import typeScriptIcon from "../assets/Vector.svg";
import reactIcon from "../assets/react.svg";
import sassIcon from "../assets/sass-svgrepo-com.svg";
import tailWindIcon from "../assets/tailwind.svg";
import bootSrapIcon from "../assets/bootstrap.svg";
import figmaIcon from "../assets/figma-svgrepo-com.svg";

import mongoDbIcon from "../assets/mongoDB.svg";
import nodeJSIcon from "../assets/nodeJs.svg";
import expressJsICon from "../assets/expressJs.svg";
import mySqlIcon from "../assets/mySql.svg";

const MyStack = () => {
  return (
    <>
      <SectionHeader
        title="My stack and frameworks"
        subheader="See what technology i use"
      />
      <div className="my-stack-content">
        <div className="stack">
          <p>Frontend / Design </p>
          <div className="icons">
            <img src={htmlIcon} alt="html icon" />
            <img src={typeScriptIcon} alt="html icon" />
            <img src={reactIcon} alt="react icon" />
            <img src={reactIcon} alt="react icon" />
            <img src={sassIcon} alt="sass icon" />
            <img src={tailWindIcon} alt="tailwind icon" />
            <img src={bootSrapIcon} alt="bootstrap icon" />
            <img src={figmaIcon} alt="figma icon" />
          </div>
        </div>
        <div className="stack">
          <p>Backend / DB</p>
          <div className="icons">
            <img src={mongoDbIcon} alt="mongoDb icon" />
            <img src={nodeJSIcon} alt="nodeJs icon" />
            <img src={expressJsICon} alt="expressJs icon" />
            <img src={mySqlIcon} alt="mySgl icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStack;
