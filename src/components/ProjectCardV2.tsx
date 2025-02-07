import React from "react";
import { IProject } from "../models/IProject";
import { ProjectData } from "../data/projetsData";
import { Link } from "react-router-dom";

const ProjectCardV2 = () => {
  const data: IProject[] = ProjectData;

  return (
    <>
      {data.map((d) => {
        return (
          <div className="project-card" key={d.id}>
            <div className="project-card-upper">
              <div className="project-card-text-container">
                <div>
                  <p className="project-card-title">{d.title}</p>
                  <p className="project-card-text">{d.desc}</p>
                </div>
              </div>
            </div>
            <div className="project-card-lower">
              {d.stack.map((s) => {
                return (
                  <div className="stack-container">
                    <p>{s}</p>
                  </div>
                );
              })}
              <Link to={"/project/" + d.title}>See more</Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCardV2;

// logic på kod
// id på korten kopplas och skickar med som en useParam till ProjectCards som tar datan och skriver infon som matchar med id:t
