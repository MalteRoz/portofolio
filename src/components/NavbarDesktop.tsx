import UpperWrapper from "./UpperWrapper";
import { HashLink } from "react-router-hash-link";
import "./scss/_navbarDesktop.scss";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  return (
    <>
      <UpperWrapper>
        <header>
          <nav>
            <Link to={"/"} className="link-style" style={{ cursor: "pointer" }}>
              <div className="nav-text-container-desktop">
                <p className="name-desktop">Malte Rozenbeek</p>
                <p className="job-title-desktop">
                  Fullstack web & mobile developer
                </p>
              </div>
            </Link>
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
