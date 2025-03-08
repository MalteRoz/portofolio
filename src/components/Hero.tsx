import { forwardRef } from "react";
import "./scss/_hero.scss";
import linkedInIcon from "../assets/devicon_linkedin.svg";
import githubIcon from "../assets/akar-icons_github-fill.svg";
import gmailIcon from "../assets/logos_google-gmail.svg";
import LowerWrapper from "./LowerWrapper";
import { Tooltip } from "@mui/material";
import SplitText from "./ui/SplitText";
import AnimatedContent from "./ui/AnimatedContent";

const Hero = () => {
  return (
    <LowerWrapper>
      <div className="hero-container">
        <AnimatedContent>
          <div className="upper">
            <div className="img"></div>
          </div>
        </AnimatedContent>
        <div className="lower">
          <AnimatedContent delay={250}>
            <div className="hero-text-container">
              <div className="text-cont">
                <SplitText
                  text="Turning Ideas into Impact"
                  delay={50}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>
              <p className="text">
                I’m a developer with a passion for crafting intuitive web and
                mobile experiences. From concept to deployment, I focus on
                delivering clean, scalable solutions that make a meaningful
                impact.
              </p>
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent delay={500}>
          <div className="contact-icons">
            <Tooltip title="Send me a message!">
              <a
                href="https://www.linkedin.com/in/malteRozenbeek/"
                target="_blank"
              >
                <img
                  src={linkedInIcon}
                  alt="linkedin icon"
                  className="linkedin"
                />
              </a>
            </Tooltip>
            <Tooltip title="See my selected projects and code!">
              <a href="https://github.com/MalteRoz" target="_blank">
                <img src={githubIcon} alt="github icon" className="github" />
              </a>
            </Tooltip>
            <Tooltip title="Or be formal and send me an email!">
              <a
                href="https://www.linkedin.com/in/malteRozenbeek/"
                target="_blank"
              >
                <img src={gmailIcon} alt="gmail icon" className="gmail" />
              </a>
            </Tooltip>
          </div>
        </AnimatedContent>
      </div>
    </LowerWrapper>
  );
};

export default forwardRef(Hero);
