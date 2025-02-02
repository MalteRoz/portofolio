import React from "react";
import "./scss/_lowerWrapper.scss";

interface LowerWrapperProps {
  children: React.ReactNode;
}

const LowerWrapper: React.FC<LowerWrapperProps> = ({ children }) => {
  return (
    <>
      <div className="wrapper-lower">
        <div className="wrapper-lower-content">{children}</div>
      </div>
    </>
  );
};

export default LowerWrapper;
