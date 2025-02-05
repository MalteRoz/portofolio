import React from "react";
import "./scss/_projectCard.scss";

interface ProjectCardProps {
  title: string;
  desc: string;
  stack: [];
  img: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  desc,
  img,
  stack,
}) => {
  return (
    <div className="project-card">
      <div className="project-card-upper">
        <div className="left">
          <div>
            <p className="left-title">{title}</p>
            <p className="left-text">{desc}</p>
          </div>
        </div>
        {/* <div className="right">
          <img src={img} alt="" />
        </div> */}
      </div>
      <div className="project-card-lower">
        <div className="stack-container">
          {stack.map((s) => (
            <p className="stack-name">{s}</p>
          ))}
        </div>
        <button>Read more</button>
      </div>
    </div>
  );
};

export default ProjectCard;
