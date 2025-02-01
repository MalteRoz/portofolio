import React from "react";
import NavbarMobile from "./components/NavbarMobile";
import Hero from "./components/Hero";
import MyStack from "./components/MyStackSection";
import Projects from "./components/ProjectsSection";
import FAQ from "./components/FAQSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavbarMobile />
      <Hero />
      <MyStack />
      <Projects />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
