import React from "react";
import "./global.css";
import { Menu } from "./Components/Menu";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import { Works } from "./Pages/Works";
import Timeline from "./Pages/Timeline";

const App = () => {
  return (
    <>
      <Menu />
      <div className="APP">
        <Home />
        <hr />
        <Skills />
        <hr />
        <Works />
        <hr />
        <Timeline />
      </div>
    </>
  );
};

export default App;
