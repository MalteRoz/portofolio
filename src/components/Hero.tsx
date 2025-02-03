import React from "react";
import "./scss/_hero.scss";
import linkedInIcon from "../assets/devicon_linkedin.svg";
import githubIcon from "../assets/akar-icons_github-fill.svg";
import gmailIcon from "../assets/logos_google-gmail.svg";
import LowerWrapper from "./LowerWrapper";

const Hero = () => {
  return (
    <LowerWrapper>
      <div className="hero-container">
        <div className="upper">
          <div className="img"></div>
        </div>
        <div className="lower">
          <div className="hero-text-container">
            <p className="title">Turning Ideas into Impact</p>
            <p className="text">
              I’m a developer with a passion for crafting intuitive web and app
              experiences. From concept to deployment, I focus on delivering
              clean, scalable solutions that make a meaningful impact.
            </p>
          </div>
        </div>
        <div className="contact-icons">
          <img src={linkedInIcon} alt="linkedin icon" className="linkedin" />
          <img src={githubIcon} alt="github icon" className="github" />
          <img src={gmailIcon} alt="gmail icon" className="gmail" />
        </div>
      </div>
    </LowerWrapper>
  );
};

export default Hero;
