import React from "react";
import "./global.css";
import { Menu } from "./Components/Menu";
import { Home } from "./Pages/Home";
import { Skills } from "./Pages/Skills";
// import { Works } from "./Pages/Works";
import Timeline from "./Pages/Timeline";
import { Contact } from "./Pages/Contact";

const App = () => {
  return (
    <>
      <Menu />
      <div className="APP">
        <Home />
        {/* <hr /> */}
        <Skills />
        {/* <hr /> */}
        {/* <Works /> */}
        {/* <hr /> */}
        <Timeline />
        <Contact />
        <footer className="footer">
          <div className="container footer__linha">
            <span className="footer__copy">© 2026 João Antônio</span>
            |
            <a href="#home" className="footer__topo">
              voltar ao topo ↑
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;