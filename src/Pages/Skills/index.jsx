import React from "react";
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

export const Skills = () => {
  return (
    <section className="sobre">
      <h2>Skills</h2>
      <div className="about-container">
        <div className="about-item">
          <h3>Front-end</h3>
          <ul>
            <li>
              <img className="lista-icon" src={HTML} alt="HTML5 Icon" />
              HTML5
            </li>
            <li>
              <img className="lista-icon" src={CSS} alt="CSS3 Icon" />
              CSS3
            </li>
            <li>
              <img className="lista-icon" src={FLUTTER} alt="Flutter Icon" />
              Flutter
            </li>
            <li>
              <img
                className="lista-icon"
                src={WORDPRESS}
                alt="Wordpress Icon"
              />
              Wordpress
            </li>
          </ul>
        </div>
        {/*<div className="about-item">
                    <h3>Back-end</h3>
                    <ul>
                        <li></li>
                        <li></li>
                    </ul>
                </div>*/}
        <div className="about-item">
          <h3>Frameworks</h3>
          <ul>
            <li>
              <img className="lista-icon" src={REACT} alt="ReactJS Icon" />
              ReactJS
            </li>
            <li>
              <img className="lista-icon" src={GIT} alt="Git Icon" />
              Git
            </li>
          </ul>
        </div>
        <div className="about-item">
          <h3>Languages</h3>
          <ul>
            <li>
              <img className="lista-icon" src={C} alt="C Language Icon" />C
            </li>
            <li>
              <img className="lista-icon" src={PYTHON} alt="Python Icon" />
              Python
            </li>
          </ul>
        </div>
        <div className="about-item">
          <h3>Design</h3>
          <ul>
            <li>
              <img
                className="lista-icon"
                src={PHOTOSHOP}
                alt="Photoshop Icon"
              />
              Photoshop
            </li>
            <li>
              <img className="lista-icon" src={FIGMA} alt="Figma Icon" />
              Figma
            </li>
            <li>
              <img className="lista-icon" src={CANVA} alt="Canva Icon" />
              Canva
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
