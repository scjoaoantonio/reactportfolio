import './index.css'
import '../../global.css'

import GITHUB from '../../img/icons/github.png'
import EMAIL from '../../img/icons/email.png'
import LINKEDIN from '../../img/icons/linkedin.png'

import Logo from '../../img/others/logojao2.png'

export const Menu = () =>{
    return(
            <section>
            <nav className="menu">
                <div className="logo">
                    <a href="index.html"><img src={Logo} alt="Logo JAO" /></a>
                </div>
                <div className="redes-sociais">
                    <ul>
                    <li>
                        <a target={'_blank'} href="https://github.com/scjoaoantonio">
                            <img src={GITHUB} alt="GITHUB" />
                        </a>
                    </li>
                    <li>
                        <a target={'_blank'} href="https://www.linkedin.com/in/joão-antônio-santos-carvalho-473365211/">
                        <img src={LINKEDIN} alt="GITHUB" />

                        </a>
                    </li>
                    <li>
                        <a target={'_blank'} href="mailto:joaoasccc@gmail.com">
                        <img src={EMAIL} alt="GITHUB" />
                        </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
};