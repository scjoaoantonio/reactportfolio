import React, { useEffect, useRef } from "react";
import "./index.css";
import "../../global.css";

export const Works = () => {
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
    <section className="works container" id="projetos" ref={secaoRef}>
      <h2 className="secao-titulo">
        Meus <span className="grad">projetos</span>
      </h2>
      <div className="portfolio">
        <div className="grid">
          <div className="containere revelar">
            <div className="carde">
              <div id="milhas" className="imge" />
              <div className="carde__overlay">
                  <a className="carde__link"
                  target="_blank"
                  href="http://milhasgerais.com/"
                  rel="noreferrer"
                  aria-label="Ver o site Milhas Gerais"
                >
                  Ver site
                </a>
              </div>
              <div className="contente">
                <h3 className="titlee">Milhas Gerais</h3>
                <p className="subtitlee">Projeto de extensão UFSJ · 2023</p>
              </div>
            </div>
          </div>

          <div className="containere revelar" style={{ transitionDelay: "80ms" }}>
            <div className="carde">
              <div id="quilombo" className="imge" />
              <div className="carde__overlay">
                <a
                  className="carde__link"
                  target="_blank"
                  href="https://quilombourbano.vercel.app/"
                  rel="noreferrer"
                  aria-label="Ver o site Movimento Negro SJDR"
                >
                  Ver site
                </a>
              </div>
              <div className="contente">
                <h3 className="titlee">Movimento Negro SJDR</h3>
                <p className="subtitlee">Site institucional · 2023</p>
              </div>
            </div>
          </div>

          {/* <div className="containere">
            <div className="carde">
              <div id="cavalinho" className="imge" />
              <div className="carde__overlay">
                
                  className="carde__link"
                  target="_blank"
                  href="https://scjoaoantonio.github.io/cavalinho.com/"
                  rel="noreferrer"
                  aria-label="Ver o site Cavalinho"
                >
                  Ver site
                </a>
              </div>
              <div className="contente">
                <h3 className="titlee">Cavalinho</h3>
                <p className="subtitlee">Site de piadas e trocadilhos · 2019</p>
              </div>
            </div>
          </div> */}

          <div className="containere revelar" style={{ transitionDelay: "160ms" }}>
            <div className="carde">
              <div id="farmacia" className="imge" />
              <div className="carde__overlay">
                <a
                  className="carde__link"
                  target="_blank"
                  href="https://scjoaoantonio.github.io/drogariasaolucasitauna/"
                  rel="noreferrer"
                  aria-label="Ver o site Drogaria São Lucas"
                >
                  Ver site
                </a>
              </div>
              <div className="contente">
                <h3 className="titlee">Drogaria São Lucas</h3>
                <p className="subtitlee">Site para farmácia · Itaúna, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};