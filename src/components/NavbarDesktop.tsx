import UpperWrapper from "./UpperWrapper";
import { HashLink } from "react-router-hash-link";
import "./scss/_navbarDesktop.scss";

const NavbarDesktop = () => {
  return (
    <>
      <UpperWrapper>
        <header>
          <nav>
            <div className="nav-text-container-desktop">
              <p className="name-desktop">Malte Rozenbeek</p>
              <p className="job-title-desktop">Fullstack web & app developer</p>
            </div>
            <div className="nav-options-desktop">
              <HashLink to="#projects" className="link-style" smooth>
                <li>Projects</li>
              </HashLink>
              <HashLink to="#FAQ" className="link-style" smooth>
                <li>FAQ</li>
              </HashLink>
              <HashLink to="#contact" className="link-style" smooth>
                <li>Contact me👋</li>
              </HashLink>
            </div>
          </nav>
        </header>
      </UpperWrapper>
    </>
  );
};

export default NavbarDesktop;
