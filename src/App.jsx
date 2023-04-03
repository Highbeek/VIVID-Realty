import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyle";
import Hero from "./components/Hero";
import { SliderData } from "./data/SliderData";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
};

export default App;
