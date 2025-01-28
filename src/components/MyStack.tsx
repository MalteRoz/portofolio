import React from "react";
import "./scss/_myStack.scss";
import { Tooltip } from "@mui/material";

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
        subheader="See what technology I use"
      />
      <div className="my-stack-content">
        {/* Frontend / Design Stack */}
        <div className="stack">
          <p>Frontend / Design</p>
          <div className="icons">
            <Tooltip title="HTML5">
              <img src={htmlIcon} alt="HTML icon" />
            </Tooltip>
            <Tooltip title="TypeScript">
              <img src={typeScriptIcon} alt="TypeScript icon" />
            </Tooltip>
            <Tooltip title="React">
              <img src={reactIcon} alt="React icon" />
            </Tooltip>
            <Tooltip title="React Native">
              <img src={reactIcon} alt="React Native icon" />
            </Tooltip>
            <Tooltip title="SASS">
              <img src={sassIcon} alt="SASS icon" />
            </Tooltip>
            <Tooltip title="Tailwind CSS">
              <img src={tailWindIcon} alt="Tailwind CSS icon" />
            </Tooltip>
            <Tooltip title="Bootstrap">
              <img src={bootSrapIcon} alt="Bootstrap icon" />
            </Tooltip>
            <Tooltip title="Figma">
              <img src={figmaIcon} alt="Figma icon" />
            </Tooltip>
          </div>
        </div>

        {/* Backend / Database Stack */}
        <div className="stack">
          <p>Backend / DB</p>
          <div className="icons">
            <Tooltip title="MongoDB">
              <img src={mongoDbIcon} alt="MongoDB icon" />
            </Tooltip>
            <Tooltip title="Node.js">
              <img src={nodeJSIcon} alt="Node.js icon" />
            </Tooltip>
            <Tooltip title="Express.js">
              <img src={expressJsICon} alt="Express.js icon" />
            </Tooltip>
            <Tooltip title="MySQL">
              <img src={mySqlIcon} alt="MySQL icon" />
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStack;
