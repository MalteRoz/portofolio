import SectionHeader from "./SectionHeader";
import FAQAccordion from "./FAQAccordion";
import "./scss/_faqSection.scss";
import UpperWrapper from "./UpperWrapper";
import LowerWrapper from "./LowerWrapper";
import { Tooltip } from "@mui/material";

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

const FAQ = () => {
  return (
    <>
      <section id="FAQ">
        <UpperWrapper>
          <SectionHeader
            title="Have questions?"
            biggerSubheader="Get answers."
          />
        </UpperWrapper>{" "}
        <LowerWrapper>
          <section className="FAQ-section">
            {/* <FAQAccordion
            question="How did i find tech?"
            answer="My passion for technology started with gaming on PS3 and later on PC, where I became interested in optimizing performance. This led to an internship at Betspawn during middle school, where I had my first encounter with coding."
            answer2="After stepping away from gaming and coding for a while, I rediscovered my interest in my last year of high school through JavaScript courses on Codecademy. A few years later, I decided to take learning seriously, and now I’m pursuing a Full Stack Web Developer diploma at Medieinstitutet—with much more to come."
          /> */}
            <FAQAccordion
              question="What's it like working with me? "
              answer="I'm a team player and like to gather as many perspectives as possible before I dive into a task. I focus on making sure both my own and others' ideas are heard. Communication and transparency are key if a group is going to succeed, and I always strive to create an open and collaborative environment."
            />
            <FAQAccordion question="My stack and frameworks">
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
            </FAQAccordion>
            <FAQAccordion question="How's my working progress">
              <div className="wp-container">
                <p>
                  I'm big on planning and setting everything up before diving in
                  to ensure a smooth process throughout the project.
                </p>
                <p>
                  Changes will always come up during development, but having a
                  well-structured plan makes it easier to get an initial picture
                  of how the end product should behave and look. I focus on
                  keeping my work structured and minimalistic.
                </p>
                <p>My problem-solving method follows five steps:</p>
                <div className="step-list">
                  <li>Understanding the problem</li>
                  <li>Writing a step-by-step list in plain English </li>
                  <li>Turning that list into pseudocode </li>
                  <li>Implementing the code</li>
                  <li>Testing the final solution</li>
                </div>
                <p>
                  This method isn't just for coding it can be applied to many
                  types of problem-solving. Try it yourself! 😊
                </p>
              </div>
            </FAQAccordion>
            <FAQAccordion
              question="Right now and the future"
              answer="As I mentioned earlier, I am currently a student and will be finishing my studies by May 2026. Right now, my focus is on learning as much as possible, finding my style, and refining my skills. I am currently working on expanding my knowledge in backend development to ensure safe data storage for users."
              answer2="I am also looking for an internship this summer and next autumn. I hope to learn a lot during these periods, especially about how the industry works and, of course, the technologies used at companies. If you have any tips for my upcoming internships, feel free to reach out via the link at the bottom of the page!"
              answer3="After graduating from Medieinstitutet, I dream of landing a full-stack mobile developer job, but I would like to see if the web development path suits me first."
            />
            <FAQAccordion
              question="What else goes on in my life? "
              answer="Football is a big passion of mine – I’m out on the pitch as soon as I get the chance! When I’m not dribbling or scoring goals, I’m keeping fit with some fun training or hanging out with my girlfriend, friends and family. We love to cook together, enjoy good meals and toast with a cold beer or a glass of wine."
            />
          </section>
        </LowerWrapper>
      </section>
    </>
  );
};

export default FAQ;
