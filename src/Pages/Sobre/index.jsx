import './index.css';
import '../../global.css';

import HTML from '../../img/icons/html-5.png'
import CSS from '../../img/icons/css-3.png'
import FIGMA from '../../img/icons/figma.png'
import GIT from '../../img/icons/git.png'
import C from '../../img/icons/letter-c.png'
import PYTHON from '../../img/icons/python.png'
import REACT from '../../img/icons/physics.png'
import PHOTOSHOP from '../../img/icons/photoshop.png'


export const Sobre = () =>{
    return(
        <section className='sobre'>
            <h2>Skills</h2>
            <div className="about-container">
                    <div className="about-item">
                        <h3>Front-end</h3>
                        <ul>
                            <li><img className='lista-icon' src={HTML} alt="" />HTML5</li>
                            <li><img className='lista-icon' src={CSS} alt="" />CSS3</li>
                        </ul>
                    </div>
                    <div className="about-item">
                        <h3>Back-end</h3>
                        <ul>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="about-item">
                        <h3>Frameworks</h3>
                        <ul>
                            <li><img className='lista-icon' src={REACT} alt="" />ReactJS</li>
                            <li><img className='lista-icon' src={GIT} alt="" />Git</li>
                        </ul>
                    </div>  
                    <div className="about-item">
                        <h3>Languages</h3>
                        <ul>
                            <li><img className='lista-icon' src={C} alt="" />C</li>
                            <li><img className='lista-icon' src={PYTHON} alt="" />Python</li>
                        </ul>
                    </div>  
                    <div className="about-item">
                        <h3>Design</h3>
                        <ul>
                            <li><img className='lista-icon' src={PHOTOSHOP} alt="" />Photoshop</li>
                            <li><img className='lista-icon' src={FIGMA} alt="" />Figma</li>
                        </ul>
                    </div>  
            </div>
        </section>

    );
};