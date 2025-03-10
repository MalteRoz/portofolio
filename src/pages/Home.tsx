import Hero from "../components/Hero";
import Projects from "../components/ProjectsSection";
import FAQ from "../components/FAQSection";

import "./scss/_home.scss";
import GoToTop from "../components/GoToTop";

const Home = () => {
  return (
    <>
      <div className="cooled">
        <Hero />
        <Projects />
        {/* <MyStack /> */}
        <FAQ />
        <GoToTop />
      </div>
    </>
  );
};

export default Home;
