import { IProject } from "../models/IProject";
import { ProjectData } from "../data/projetsData";
import { Link } from "react-router-dom";
import "./scss/_projectCard.scss";

const ProjectCardV2 = () => {
  const data: IProject[] = ProjectData;

  return (
    <>
      <div className="test">
        {data.map((d) => {
          return (
            <div className="project-card" key={d.id}>
              <div className="project-card-upper">
                <p className="project-card-title">{d.title}</p>
                <p className="project-card-text">{d.desc}</p>
              </div>
              <div className="project-card-lower">
                <div className="stack-container">
                  {d.stackIcons.map((s, i) => {
                    return <img src={s} key={i} />;
                    // <p key={i}>{s}</p>;
                  })}
                </div>
              </div>
              <Link to={"/project/" + d.title} className="link-style see-more">
                See more
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCardV2;
