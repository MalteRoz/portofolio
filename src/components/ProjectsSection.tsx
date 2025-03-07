import "./scss/_projects.scss";
import SectionHeader from "./SectionHeader";

import UpperWrapper from "./UpperWrapper";
import LowerWrapper from "./LowerWrapper";
import ProjectCardV2 from "./ProjectCardV2";

const Projects = () => {
  return (
    <>
      <section id="projects">
        <UpperWrapper>
          <SectionHeader
            title="Projects I’ve Built "
            subheader="I try to explor diffrent industries, solving real problems, and building meaningful solutions."
          />
        </UpperWrapper>
        <LowerWrapper>
          <div className="project-section-container">
            <ProjectCardV2 />
          </div>
        </LowerWrapper>
      </section>
    </>
  );
};

export default Projects;
