import Foto from '../../img/others/eusite.JPG'
import './index.css'
import '../../global.css'


export const Home = () =>{
    return(
        <section className='home'>
            <div className="titulo">
                <div className="container2">
                <img src={Foto} width="300" className="foto" alt='Joao'/>
                </div>
                <h1 className="site-title">João Antônio</h1>
                <h1 className="site-subtitle">Estudante de Ciência da Computação & Desenvolvimento Web</h1>
            </div>
        </section>
    );
};