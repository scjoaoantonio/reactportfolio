import './index.css'
import '../../global.css'


import Cavalinho from '../../img/others/cavalinho.png'
import Canal from '../../img/others/canaljao.png'
import Farmacia from '../../img/others/farmacia.png'


export const Works = () =>{
    return(
        <section className='works'>
            <h2>Works</h2>
        <div className="portfolio">
            <div className="grid">
            <div className="flip-card">
                <div className="card">
                <figure className="card-front">
                <a  target={'_blank'} href="https://scjoaoantonio.github.io/cavalinho.com/"><img className="img-portfolio" src={Cavalinho} alt="" /></a>
                </figure>
                </div>
            </div>

            <div className="flip-card">
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
            </div>
        </div>
    </section>
    );
};


