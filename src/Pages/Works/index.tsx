import React from "react";
import "./index.css";
import "../../global.css";

export const Works: React.FC = () => {
  return (
    <section className="works">
      <h2>Works</h2>
      <div className="portfolio">
        <div className="grid">
          <div className="containere">
            <div className="carde">
              <div id="milhas" className="imge">
                <a
                  className="imge"
                  target="_blank"
                  href="http://milhasgerais.com/"
                  rel="noreferrer"
                  aria-label="View the Milhas Gerais website"
                >
                  <span className="sr-only">Milhas Gerais</span>
                </a>
              </div>
              <div className="contente">
                <span className="titlee">
                  Site Milhas Gerais - Projeto de extensão UFSJ (2023)
                </span>
              </div>
            </div>
          </div>

          <div className="containere">
            <div className="carde">
              <div id="quilombo" className="imge">
                <a
                  className="imge"
                  target="_blank"
                  href="https://quilombourbano.vercel.app/"
                  rel="noreferrer"
                  aria-label="View the Movimento Negro SJDR website"
                >
                  <span className="sr-only">Movimento Negro SJDR</span>
                </a>
              </div>
              <div className="contente">
                <span className="titlee">Site Movimento Negro SJDR (2023)</span>
              </div>
            </div>
          </div>

          <div className="containere">
            <div className="carde">
              <div id="cavalinho" className="imge">
                <a
                  className="imge"
                  target="_blank"
                  href="https://scjoaoantonio.github.io/cavalinho.com/"
                  rel="noreferrer"
                  aria-label="View the Cavalinho website"
                >
                  <span className="sr-only">Cavalinho</span>
                </a>
              </div>
              <div className="contente">
                <span className="titlee">
                  Site de piadas e trocadilhos (2019)
                </span>
              </div>
            </div>
          </div>

          {/* 
          <div className="flip-card">
            <div className="card">
              <figure className="card-front">
                <a 
                  target={'_blank'} 
                  href="https://www.youtube.com/user/NotsuruMine/about"
                  aria-label="View the YouTube channel"
                >
                  <img className="img-portfolio" src={Canal} alt="" />
                </a>
              </figure>
            </div>
          </div>

          <div className="flip-card">
            <div className="card">
              <figure className="card-front">
                <a 
                  target={'_blank'} 
                  href="https://scjoaoantonio.github.io/drogariasaolucasitauna/"
                  aria-label="View the Farmacia website"
                >
                  <img className="img-portfolio" src={Farmacia} alt="" />
                </a>
              </figure>
            </div>
          </div>
          */}
        </div>
      </div>
      <footer className="footer"></footer>
    </section>
  );
};
