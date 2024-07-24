// ./Pages/Timeline.jsx

import React, { useState } from "react";
import "./index.css";
import "../../global.css";

const Timeline = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (id) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section className="timeline">
      <svg display="none">
        <symbol id="arrow">
          <polyline
            points="7 10,12 15,17 10"
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </symbol>
      </svg>
      <div id="timeline" className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__item-header">
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
              <span id={`item${index}-name`} className="timeline__meta">
                <time className="timeline__date" dateTime={item.dateTime}>
                  {item.date}
                </time>
                <br />
                <strong className="timeline__title">{item.title}</strong>
              </span>
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
        ))}
      </div>
    </section>
  );
};

const timelineData = [
  {
    date: "Agosto, 2019",
    title: "UFSJ",
    content:
      "Após cursar 1 período na UIT (Universidade de Itaúna) decidi recomeçar o curso Ciência da Computação na UFSJ (Universidade Federal de São João del Rei",
  },
  {
    date: "Julho, 2020",
    title: "Desenvolvimento Web",
    content:
      "Comecei a estudar desenvolvimento web durante a pandemia em 2020, focando em HTML e CSS ",
  },
  {
    date: "Outubro, 2021",
    title: "Yes, We Code",
    content:
      "Entrei no programa Yes, We Code. Uma ONG determinada a formar pessoas para a área de tecnologia da informação. Nesse programa fui aluno e mentor, desenvolvendo em HTML, CSS, JS, React e FLutter",
  },
  {
    date: "Julho, 2022",
    title: "Setor de Projetos (Linked)",
    content:
      "Entrei no setor de Desenvolvimento de Projetos da Linked, empresa júnior de ciência da computação",
  },
  {
    date: "Janeiro, 2023",
    title: "Setor de Comercial (Linked)",
    content:
      "Fui eleito Diretor Comercial e Vice Presidente da Linked, empresa júnior de ciência da computação",
  },
  {
    date: "Outubro, 2023",
    title: "Kune",
    content:
      "Comecei um estágio na área de desenvolvimento web na Kune Comunidades Inteligentes, onde me aprofundei em ReactJS",
  },
  {
    date: "Janeiro, 2024",
    title: "Presidente (Linked)",
    content:
      "Fui eleito Presidente da Linked, empresa júnior de ciência da computação",
  },
];

export default Timeline;
