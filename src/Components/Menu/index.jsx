import { useEffect, useState } from "react";
import "./index.css";
import "../../global.css";

import GITHUB from "../../img/icons/github.png";
import EMAIL from "../../img/icons/email.png";
import LINKEDIN from "../../img/icons/linkedin.png";
import Logo from "../../img/others/logojao2.png";

const LINKS = [
  { href: "#habilidades", label: "habilidades" },
  { href: "#projetos", label: "projetos" },
  { href: "#experiencias", label: "experiências" },
];

export const Menu = () => {
  const [rolado, setRolado] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolado(window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    const aoTeclar = (e) => {
      if (e.key === "Escape") setAberto(false);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, []);

  return (
    <nav className={`menu ${rolado ? "menu--rolado" : ""}`}>
      <div className="container menu__linha">
        <a href="#" className="menu__logo" aria-label="Início">
          <img src={Logo} alt="Logo JAO" />
        </a>

        {/* <ul className={`menu__links ${aberto ? "menu__links--aberto" : ""}`}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setAberto(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="menu__redes menu__redes--mobile">
            <a target="_blank" rel="noreferrer" href="https://github.com/scjoaoantonio" aria-label="GitHub">
              <img src={GITHUB} alt="" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joão-antônio-santos-carvalho-473365211/" aria-label="LinkedIn">
              <img src={LINKEDIN} alt="" />
            </a>
            <a href="mailto:joaoasccc@gmail.com" aria-label="E-mail">
              <img src={EMAIL} alt="" />
            </a>
          </li>
        </ul> */}

        <div className="menu__redes menu__redes--desktop">
          <a target="_blank" rel="noreferrer" href="https://github.com/scjoaoantonio" aria-label="GitHub">
            <img src={GITHUB} alt="" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/joão-antônio-santos-carvalho-473365211/" aria-label="LinkedIn">
            <img src={LINKEDIN} alt="" />
          </a>
          <a href="mailto:joaoasccc@gmail.com" aria-label="E-mail">
            <img src={EMAIL} alt="" />
          </a>
        </div>

        <button
          type="button"
          className="menu__toggle"
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
          onClick={() => setAberto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};