import React from 'react';
import Styles from './NavBar.modules.css';
import {Link} from 'react-router-dom';
import Logo from '../../assests/images/logo.png';
function NavBar(){
    return (
        <section>
            <nav>
                <ul>
                    <li><Link to="/telaLogin" className={Styles.LogoLink}>
                        <img src={Logo} alt="Logo" /><span>Bichinhos da TI</span>
                        </Link>
                        </li>
                    <li><Link to="/Inicio">Inicio</Link></li>
                    <li><Link to="/SobreNos">Sobre nós</Link></li>
                    <li><Link to="/Suporte">Suporte</Link></li>
                </ul>
                    <button>Entrar</button>
            </nav>
        </section>
    )
}

export default NavBar;