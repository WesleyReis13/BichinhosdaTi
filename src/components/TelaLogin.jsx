import './TelaLogin.module.css';
import Logo from '../assests/images/logo.png';
function TelaLogin(){
    return(
        <nav>
            <ul>
                <li><a><img src={Logo} alt="Logo" />Bichinhos da TI</a></li>
                <li><a href="">Inicio</a></li>
                <li><a href="">Sobre nós</a></li>
                <li><a href="">Suporte</a></li>
            </ul>
                <button>Entrar</button>
        </nav>
    )

}

export default TelaLogin;