import React from "react";
import UpperWrapper from "./UpperWrapper";
import "./scss/_navbarDesktop.scss";

const NavbarDesktop = () => {
  return (
    <>
      <UpperWrapper>
        <header>
          <nav>
            <div className="nav-text-container-desktop">
              <p className="name-desktop">Malte Rozenbeek</p>
              <p className="job-title-desktop">
                Fullstack webb & app developer
              </p>
            </div>
            <div className="nav-options-desktop">
              <li>Projects</li>
              <li>FAQ</li>
              <li>Contact Me👋</li>
            </div>
          </nav>
        </header>
      </UpperWrapper>
    </>
  );
};

export default NavbarDesktop;
