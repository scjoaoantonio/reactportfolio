import React, { useEffect, useRef } from "react";
import "./index.css";
import "../../global.css";

import HTML from "../../img/icons/html-5.png";
import CSS from "../../img/icons/css-3.png";
import FLUTTER from "../../img/icons/flutter.png";
import WORDPRESS from "../../img/icons/wordpress.png";
import FIGMA from "../../img/icons/figma.png";
import GIT from "../../img/icons/git.png";
import C from "../../img/icons/letter-c.png";
import PYTHON from "../../img/icons/python.png";
import REACT from "../../img/icons/physics.png";
import PHOTOSHOP from "../../img/icons/photoshop.png";
import CANVA from "../../img/icons/canva.png";
import TYPESCRIPT from "../../img/icons/typescript.png";
import JAVASCRIPT from "../../img/icons/javascript.png";

const GRUPOS = [
  {
    titulo: "Front-end",
    itens: [
      { nome: "HTML5", icone: HTML },
      { nome: "CSS3", icone: CSS },
      { nome: "ReactJS", icone: REACT },
    ],
  },
  {
    titulo: "Linguagens",
    itens: [
      { nome: "C", icone: C },
      { nome: "Python", icone: PYTHON },
      { nome: "JavaScript", icone: JAVASCRIPT },
      { nome: "TypeScript", icone: TYPESCRIPT },
    ],
  },
  {
    titulo: "Ferramentas",
    itens: [
      { nome: "Git", icone: GIT },
      { nome: "Wordpress", icone: WORDPRESS },
      { nome: "Flutter", icone: FLUTTER },
    ],
  },
  {
    titulo: "Design",
    itens: [
      { nome: "Figma", icone: FIGMA },
      { nome: "Photoshop", icone: PHOTOSHOP },
      { nome: "Canva", icone: CANVA },
    ],
  },
];

export const Skills = () => {
  const secaoRef = useRef(null);

  useEffect(() => {
    const alvos = secaoRef.current?.querySelectorAll(".revelar") ?? [];
    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.classList.add("revelar--visivel"));
      return;
    }
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("revelar--visivel");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    alvos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return (
    <section className="skills container" id="habilidades" ref={secaoRef}>
      <h2 className="secao-titulo">
        Habilidades <span className="grad">técnicas</span>
      </h2>

      <div className="skills__grid">
        {GRUPOS.map((grupo, indice) => (
          <div
            className="skills__card revelar"
            key={grupo.titulo}
            style={{ transitionDelay: `${indice * 80}ms` }}
          >
            <h3 className="skills__card-titulo">{grupo.titulo}</h3>
            <div className="skills__chips">
              {grupo.itens.map((item) => (
                <span className="skills__chip" key={item.nome}>
                  <img src={item.icone} alt="" className="skills__chip-icone" />
                  {item.nome}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};