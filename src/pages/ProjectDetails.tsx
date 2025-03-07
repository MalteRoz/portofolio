import { useEffect, useState } from "react";
import { IProject } from "../models/IProject";
import { ProjectData } from "../data/projetsData";
import { Link, useParams } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import LowerWrapper from "../components/LowerWrapper";
import "./scss/_projectDetails.scss";
import FAQAccordion from "../components/FAQAccordion";

const ProjectDetails = () => {
  const [projectData, setProjectData] = useState<IProject>();
  const { title } = useParams();
  const data: IProject[] = ProjectData;

  useEffect(() => {
    const sortData = () => {
      const coolEd = data.find((d) => d.title === title);
      setProjectData(coolEd);
    };

    sortData();
  });

  return (
    <>
      <LowerWrapper>
        <Link to={"/"} className="goback-container link-style">
          <HiOutlineChevronLeft size={20} />
          <p>go back</p>
        </Link>
        <div className="project-page-container">
          <div className="project-page-upper">
            <div className="title-desc-container">
              <p className="project-page-title">{projectData?.title}</p>
              <p>{projectData?.desc}</p>
            </div>

            <div className="project-page-year-functionallity-container">
              <div className="year-links-container">
                <div className="year">
                  <p>Year:</p>
                  <p>{projectData?.year}</p>
                </div>
                <div className="line"></div>
                <div className="web-links">
                  <p>Links:</p>
                  <a href={projectData?.links?.[0]}>
                    {projectData?.links?.[0]}
                  </a>
                </div>
              </div>

              <div className="project-page-key-functionallity">
                <p className="project-page-sub-title">Key Functionallity</p>
                {projectData?.keyFunctionality.map((k, index) => {
                  return (
                    <li key={index}>
                      <span>{k}</span>
                    </li>
                  );
                })}
              </div>
            </div>

            <div className="project-page-stack">
              {projectData?.stackIcons.map((s) => {
                return (
                  <div className="stack-container">
                    {/* <p>{s}</p> */}
                    <img src={s} alt="" />
                  </div>
                );
              })}
            </div>
          </div>

          <FAQAccordion
            question="Background"
            answer={projectData?.background || ""}
          />

          <FAQAccordion question="Challenges">
            <div className="project-page-challenges">
              {projectData?.challenges.map((c, index) => {
                return (
                  <div>
                    <li key={index}>
                      <span>{c.header}</span>
                      {c.text}
                    </li>
                  </div>
                );
              })}
            </div>
          </FAQAccordion>

          <FAQAccordion question="Solutions">
            <div className="project-page-solution">
              {projectData?.solutions.map((s, index) => {
                return (
                  <div>
                    <p className="project-page-solution-header">{s.header}</p>
                    <p>{s.text}</p>
                  </div>
                );
              })}
            </div>
          </FAQAccordion>

          <FAQAccordion question="Conclusion">
            <div className="project-page-conclusion">
              {projectData?.conclusion.map((c, index) => {
                return (
                  <>
                    <p>{c}</p>
                  </>
                );
              })}
            </div>
          </FAQAccordion>
        </div>
      </LowerWrapper>
    </>
  );
};

export default ProjectDetails;
