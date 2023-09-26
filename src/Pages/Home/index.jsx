import Foto from '../../img/others/eusite.JPG'
import './index.css'
import '../../global.css'


export const Home = () =>{
    return(
        <section className='home'>
                <div className="container1">
                    <img src={Foto} width="300" className="foto" alt='Joao'/>
                    <h1 className="site-title">João Antônio</h1>
                    <h1 className="site-subtitle">Estudante de Ciência da Computação</h1>
                </div>
                <div className='container2'>
                    <h2>Sobre mim</h2>
                    <p className='site-apresentation'>
                        Sou <b>João Antônio</b>, faço <b>Ciência da Computação</b> na Universidade Federal de São João del Rei e estudo <b>Desenvolvimento Web</b>  desde 2020.
                        <div className='space'>*</div>
                        Estou em busca de um <b> estágio</b> para desenvolver meu conhecimento, adquirir experiência prática e contribuir para o sucesso da empresa. 
                        <div className='space'>*</div>
                        Estou motivado a <b>aprender</b> qualquer tecnologia ou framework necessários para o trabalho.
                    </p>
                </div>
        </section>
    );
};