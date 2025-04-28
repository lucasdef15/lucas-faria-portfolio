import React from "react";
import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
    </>
  );
};

export default App;
