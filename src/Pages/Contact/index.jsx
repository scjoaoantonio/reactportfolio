import "./index.css";
import "../../global.css";

export const Contact = () => {
  return (
    <section className="contato container" id="contato">
      <div className="contato__caixa">
        <h2 className="secao-titulo">
          Vamos <span className="grad">conversar</span>?
        </h2>
        <p className="contato__texto">
          Só não respondo atleticano.
        </p>
        <div className="contato__acoes">
          <a className="botao botao--primario" href="mailto:joaoasccc@gmail.com">
            joaoasccc@gmail.com
          </a>
          <a
            className="botao botao--fantasma"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/scjoaoantonio"
          >
            LinkedIn
          </a>
          <a
            className="botao botao--fantasma"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/scjoaoantonio"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};