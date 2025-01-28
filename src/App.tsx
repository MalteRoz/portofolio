import React from "react";
import NavbarMobile from "./components/NavbarMobile";
import Hero from "./components/Hero";
import MyStack from "./components/MyStack";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <NavbarMobile />
      <Hero />
      <MyStack />
      <Projects />
    </>
  );
};

export default App;
