import './index.css'
import '../../global.css'

{/*
import Cavalinho from '../../img/others/cavalinho.png'
import Canal from '../../img/others/canaljao.png'
import Farmacia from '../../img/others/farmacia.png'
import Milhas from '../../img/others/milhas.png'*/}



export const Works = () =>{
    return(
        <section className='works'>
            <h2>Works</h2>
        <div className="portfolio">
            <div className="grid">


            <div  className="containere">
                <div className="carde">
                    <div id="milhas" className="imge">
                        <a className="imge" target="_blank" href="http://milhasgerais.com/"></a>
                    </div>
                    <div className="contente">
                        <span className="titlee">Site Milhas Gerais - Projeto de extensão UFSJ (2023)</span>
                    </div>
                </div>
            </div>

            <div  className="containere">
                <div className="carde">
                    <div id="quilombo" className="imge">
                        <a className="imge" target="_blank" href="https://quilombourbano.vercel.app/"></a>
                    </div>
                    <div className="contente">
                        <span className="titlee">Site Movimento Negro SJDR (2023)</span>
                    </div>
                </div>
            </div>
            <div  className="containere">
                <div className="carde">
                    <div id="cavalinho" className="imge">
                        <a className="imge" target="_blank" href="https://scjoaoantonio.github.io/cavalinho.com/"></a>
                    </div>
                    <div className="contente">
                        <span className="titlee">Site de piadas e trocadilhos (2019)</span>
                    </div>
                </div>
            </div>            

{/*            <div className="flip-card">
                <div className="card">
                <figure className="card-front">
                    <a target={'_blank'} href="https://www.youtube.com/user/NotsuruMine/about"><img className="img-portfolio" src={Canal} alt="" /></a>
                </figure>
                </div>
            </div>

            <div className="flip-card">
                <div className="card">
                <figure className="card-front">
                    <a target={'_blank'} href="https://scjoaoantonio.github.io/drogariasaolucasitauna/"><img className="img-portfolio" src={Farmacia} alt="" /></a>
                </figure>
                </div>
            </div>
*/}
            </div>
        </div>
    </section>
    );
};


