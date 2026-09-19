import React from "react";
import Foto from "../../img/others/myphoto.jpg";
import "./index.css";
import "../../global.css";

export const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__conteudo container">
        <div className="home__texto">
          <h1 className="home__titulo">
            Olá, sou <span className="grad">João Antônio</span>
          </h1>
          <p className="home__cargo">Engenheiro de Software & Cientista da Computação</p>

          <p className="home__bio">
            Formado em <b>Ciências da Computação</b> pela <b>Universidade Federal de São João del-Rei</b>, com uma trajetória marcada por experiências que uniram aprendizado técnico e desenvolvimento pessoal. 
            <br />
            Hoje atuo como  <b>Engenheiro de Software</b> na <b>SYDLE</b>, trabalhando de forma full stack na plataforma <b>SYDLE ONE</b>. 
          </p>

          <div className="home__acoes">
            {/* <a className="botao botao--primario" href="#projetos">
              Ver projetos
            </a> */}
            <a className="botao botao--primario"
               href="#contato"
            >
              Falar comigo
            </a>
            <a className="botao botao--fantasma"
              href="/curriculo-joao-antonio.pdf"
              download="Joao-Antonio-Curriculo.pdf"
            >
              Baixar meu currículo
            </a>
          </div>
        </div>

        <div className="home__foto-wrap">
          <img src={Foto} className="home__foto" alt="Foto de João Antônio" />
        </div>
      </div>
    </section>
  );
};