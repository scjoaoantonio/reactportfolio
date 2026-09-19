// ./Pages/Timeline.jsx

import React, { useState } from "react";
import "./index.css";
import "../../global.css";

const MAX_POR_COLUNA = 5;

const dividirEmColunas = (itens, tamanho) => {
  const colunas = [];
  for (let i = 0; i < itens.length; i += tamanho) {
    colunas.push(itens.slice(i, i + tamanho));
  }
  return colunas;
};

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const colunas = dividirEmColunas(timelineData, MAX_POR_COLUNA);

  return (
    <section className="timeline-container container" id="experiencias">
      <h2 className="secao-titulo">
        Minhas <span className="grad">experiências</span>
      </h2>

      <svg display="none">
        <symbol id="arrow">
          <polyline
            points="7 10,12 15,17 10"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            color="white"
          />
        </symbol>
      </svg>

      <div id="timeline" className="timeline">
        {colunas.map((coluna, indiceColuna) => (
          <div className="timeline__coluna" key={indiceColuna}>
            {coluna.map((item, indiceLocal) => {
              const index = indiceColuna * MAX_POR_COLUNA + indiceLocal;
              return (
                <div key={index} className="timeline__item">
                  <span className="timeline__marcador" aria-hidden="true" />
                  <div className="timeline__item-header">
                   <span
                    onClick={() => toggleItem(index)}
                    id={`item${index}-name`}
                    className="timeline__meta"
                  >
                    <time className="timeline__date" dateTime={item.dateTime}>
                      {item.date}
                    </time>
                    <span className="timeline__linha">
                      {item.empresa && (
                        <span className="timeline__empresa">{item.empresa}</span>
                      )}
                      <strong className="timeline__title">{item.cargo}</strong>
                    </span>
                  </span>

                    <button
                      className="timeline__arrow"
                      type="button"
                      id={`item${index}`}
                      aria-labelledby={`item${index}-name`}
                      aria-expanded={expandedItems[index] || false}
                      aria-controls={`item${index}-ctrld`}
                      aria-haspopup="true"
                      onClick={() => toggleItem(index)}
                    >
                      <svg
                        className="timeline__arrow-icon"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                      >
                        <use href="#arrow" />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="timeline__item-body"
                    id={`item${index}-ctrld`}
                    role="region"
                    aria-labelledby={`item${index}`}
                    aria-hidden={!expandedItems[index] || false}
                    style={{ display: expandedItems[index] ? "flex" : "none" }}
                  >
                    <div className="timeline__item-body-content">
                      <p className="timeline__item-p">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

const timelineData = [
  {
    date: "Agosto, 2019",
    empresa: "UFSJ",
    cargo: "Ciência da Computação",
    content:
      "Após cursar 1 período na UIT (Universidade de Itaúna) decidi recomeçar o curso Ciência da Computação na UFSJ (Universidade Federal de São João del Rei).",
  },
  {
    date: "Julho, 2020",
    empresa: null,
    cargo: "Desenvolvimento Web",
    content:
      "Comecei a estudar desenvolvimento web durante a pandemia em 2020, focando em HTML e CSS ",
  },
  {
    date: "Outubro, 2021",
    empresa: "Yes, We Code",
    cargo: "Aluno",
    content:
      "Entrei no programa Yes, We Code, uma ONG voltada à formação de pessoas para a área de tecnologia. Desenvolvi minhas primeiras competências em HTML, CSS, Design de Interfaces, UX, ReactJS e Flutter.",
  },
  {
    date: "Julho, 2022",
    empresa: "Linked EJ",
    cargo: "Desenvolvedor Web",
    content:
      "Entrei na Linked, empresa júnior de ciência da computação, em um momento de poucos projetos. Participei do planejamento e execução dos primeiros projetos, mapeando necessidades e prototipando soluções.",
  },
  {
    date: "Outubro, 2022",
    empresa: "Yes, We Code",
    cargo: "Aluno mentor",
    content:
      "Passei a atuar como aluno mentor, apoiando colegas em seus estudos. Evoluí bastante em soft skills como comunicação, empatia e liderança, além de reforçar meu próprio conhecimento técnico ensinando.",
  },
  {
    date: "Janeiro, 2023",
    empresa: "Linked EJ",
    cargo: "Vice-Presidente e Diretor Comercial",
    content:
      "Assumi a diretoria comercial e a vice-presidência. Liderei a equipe comercial, estruturando processos de prospecção e relacionamento com clientes, além de fortalecer o marketing interno da empresa.",
  },
  {
    date: "Outubro, 2023",
    empresa: "Kune",
    cargo: "Estagiário de Desenvolvimento Front-End",
    content:
      "Estágio remoto focado em desenvolvimento front-end: React + TypeScript, Axios para consumo de APIs, ContextAPI, Styled Components, ESLint/Prettier e Firebase.",
  },
  {
    date: "Janeiro, 2024",
    empresa: "Linked EJ",
    cargo: "Presidente",
    content:
      "Como Presidente, foquei em pessoas e cultura organizacional. Junto à diretoria, planejamos ações que levaram a 148% da meta de faturamento e a reconhecimentos como EJ Farol Verde e EJ de Alto Crescimento.",
  },
  {
    date: "Outubro, 2024",
    empresa: "SYDLE",
    cargo: "Trainee",
    content:
      "Comecei como trainee na SYDLE, atuando no desenvolvimento, modelagem, manutenção e testes de soluções web na plataforma SYDLE ONE, com Java, JavaScript, Elasticsearch, Angular, MongoDB e AWS.",
  },
  {
    date: "Março, 2026",
    empresa: "SYDLE",
    cargo: "Engenheiro de Software",
    content:
      "Promovido a Engenheiro de Software, atuando full stack na plataforma SYDLE ONE. Participo de todo o ciclo de desenvolvimento — requisitos, desenvolvimento, implantação e manutenção — em ambiente ágil (Scrum).",
  },
];

export default Timeline;