import React from "react";
import { Menu } from "./Components/Menu";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";
import { Works } from "./Pages/Works";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <Home />
      <Skills />
      <Works />
    </>
  );
}

export default App;
