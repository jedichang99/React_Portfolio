import React from "react";
import "./styles.css";
import Header from "./header";
import Hero from "./hero";
import About from "./about";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Footer from "./footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
