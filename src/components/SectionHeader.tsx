import React from "react";
import "./scss/_SectionHeader.scss";

interface SectionHeaderProps {
  title: string;
  subheader?: string;
  biggerSubheader?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subheader,
  biggerSubheader,
}) => {
  return (
    <div className="section-header-container">
      <p className="section-title">{title}</p>
      <p className="section-subheading">{subheader}</p>
      <p className="section-bigger-subheader">{biggerSubheader}</p>
    </div>
  );
};

export default SectionHeader;
