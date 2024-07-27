import React from "react";
import "./index.css";
import "../../global.css";

export const Works = () => {
  return (
    <section className="works">
      <h2>Projetos</h2>
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
                <h3 className="titlee">
                  Site Milhas Gerais - Projeto de extensão UFSJ (2023)
                </h3>
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
                <h3 className="titlee">Site Movimento Negro SJDR (2023)</h3>
              </div>
            </div>
          </div>

          {/* <div className="containere">
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
                <h3 className="titlee">Site de piadas e trocadilhos (2019)</h3>
              </div>
            </div>
          </div> */}
          <div className="containere">
            <div className="carde">
              <div id="farmacia" className="imge">
                <a
                  className="imge"
                  target="_blank"
                  href="https://scjoaoantonio.github.io/drogariasaolucasitauna/"
                  rel="noreferrer"
                  aria-label="View the Drogaria São Lucas website"
                >
                  <span className="sr-only">Farmácia</span>
                </a>
              </div>
              <div className="contente">
                <h3 className="titlee">
                  Site para Drogaria São Lucas - Itaúna (2021)
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
