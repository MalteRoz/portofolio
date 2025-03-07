import "./scss/_projectCard.scss";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  desc: string;
  stack: [];
  img: string;
}

const ProjectCard = ({ title, desc, stack }: ProjectCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="project-card">
      <div className="project-card-upper">
        <div className="left">
          <div>
            <p className="left-title">{title}</p>
            <p className="left-text">{desc}</p>
          </div>
        </div>
      </div>
      <div className="project-card-lower">
        <div className="stack-container">
          {stack.map((s) => (
            <p className="stack-name">{s}</p>
          ))}
        </div>
        <button onClick={() => navigate("/project/sillystock")}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
