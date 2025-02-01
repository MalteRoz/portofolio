import React, { useEffect, useState } from "react";
import "./scss/_footer.scss";
import { FiChevronRight } from "react-icons/fi";
import { formatTime } from "../functions/digitalClock";

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
      <footer>
        <div className="footer-upper">
          <p className="connect">Connect</p>
          <p className="time">{formatTime(time)}</p>
        </div>
        <div className="footer-middle">
          <div className="connect-box">
            <p>LinkedIn</p>
            <FiChevronRight size={20} />
          </div>
          <div className="connect-box">
            <p>malte.rozenbeek@gmail.com</p>
            <FiChevronRight size={20} />
          </div>
          <div className="connect-box">
            <p>Github</p>
            <FiChevronRight size={20} />
          </div>
        </div>
        <div className="footer-lower">
          <p>Design & code by Malte Rozenbeek</p>
          <p>© 2025 Malte Rozenbeek. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
