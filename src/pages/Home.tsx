import React from "react";
import Hero from "../components/Hero";
import MyStack from "../components/MyStackSection";
import Projects from "../components/ProjectsSection";
import FAQ from "../components/FAQSection";

import "./scss/_home.scss";

const Home = () => {
  return (
    <>
      <div className="cooled">
        <Hero />
        <MyStack />
        <Projects />
        <FAQ />
      </div>
    </>
  );
};

export default Home;
