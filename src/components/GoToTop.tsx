import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import "../components/scss/_goToTop.scss";
import { Tooltip } from "@mui/material";

const GoToTop = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isScrolled && (
        <Tooltip title="Go To Top">
          <div className="icon-wrapper" onClick={scrollToTop}>
            <FiChevronRight className="go-to-top-icon" size={24} />
          </div>
        </Tooltip>
      )}
    </>
  );
};

export default GoToTop;
