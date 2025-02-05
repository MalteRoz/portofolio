import React, { useState } from "react";
import { IoReorderTwo } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./scss/_navbarMobile.scss";
import UpperWrapper from "./UpperWrapper";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    if (isOpen === false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <UpperWrapper>
        <header>
          <nav>
            <div className="nav-text-container">
              <p className="name">Malte Rozenbeek</p>
              <p className="job-title">Fullstack web & app developer</p>
            </div>
            <IoReorderTwo size={24} onClick={toggleNavbar} />
          </nav>
        </header>
        <div className={`expanded-nav ${isOpen ? "open" : ""}`}>
          <div className="close-container">
            <IoClose size={24} onClick={toggleNavbar} />
          </div>
          <div className="nav-options">
            <li>Projects</li>
            <li>FAQ</li>
            <li>Contact Me👋</li>
          </div>
        </div>
      </UpperWrapper>
    </>
  );
};

export default NavbarMobile;
