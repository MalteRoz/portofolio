import React, { Children } from "react";
import "./scss/_upperWrapper.scss";

interface UpperWrapperProps {
  children: React.ReactNode;
}

const UpperWrapper: React.FC<UpperWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="wrapper-upper">
        <div className="wrapper-upper-content">{children}</div>
      </div>
    </>
  );
};

export default UpperWrapper;
