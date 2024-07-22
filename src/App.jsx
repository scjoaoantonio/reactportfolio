import React from "react";
import "./global.css";
import { Menu } from "./Components/Menu";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import { Works } from "./Pages/Works";

const App = () => {
  return (
    <>
      <Menu />
      <div className="APP">
        <Home />
        <hr />
        <Skills />
        <hr />
      </div>
      <Works />
    </>
  );
};

export default App;
