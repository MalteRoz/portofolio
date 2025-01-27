import React from "react";
import "./scss/_SectionHeader.scss";

interface SectionHeaderProps {
  title: string;
  subheader: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subheader }) => {
  return (
    <div className="section-header-container">
      <p className="section-title">{title}</p>
      <p className="section-subheading">{subheader}</p>
    </div>
  );
};

export default SectionHeader;
