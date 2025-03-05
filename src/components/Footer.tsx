import React, { useEffect, useState } from "react";
import "./scss/_footer.scss";
import { FiChevronRight } from "react-icons/fi";
import { formatTime } from "../hooks/digitalClock";
import UpperWrapper from "./UpperWrapper";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <UpperWrapper>
        <footer id="contact">
          <div className="footer-upper">
            <p className="connect">Connect</p>
            <p className="time">{formatTime(time)}</p>
          </div>
          <div className="footer-middle">
            <div className="connect-box">
              <a
                href="https://www.linkedin.com/in/malteRozenbeek/"
                target="_blank"
              >
                <p>LinkedIn</p>
              </a>
              <FiChevronRight size={20} />
            </div>
            <div className="connect-box">
              <a href="mailto:malte.rozenbeek@gmail.com">
                <p>malte.rozenbeek@gmail.com</p>
              </a>
              <FiChevronRight size={20} />
            </div>
            <div className="connect-box">
              <a href="https://github.com/MalteRoz" target="_blank">
                <p>Github</p>
              </a>
              <FiChevronRight size={20} />
            </div>
          </div>
          <div className="footer-lower">
            <p>Design & code by Malte Rozenbeek</p>
            <p>© 2025 Malte Rozenbeek. All rights reserved.</p>
          </div>
        </footer>
      </UpperWrapper>
    </>
  );
};

export default Footer;
