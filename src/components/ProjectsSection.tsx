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
            title="Selected work"
            biggerSubheader="And projects."
            // subheader="See my selected projects where i put my knowledge and edge in to different industries"
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
