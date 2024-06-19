import Styles from './TelaLogin.module.css';
import Logo from '../assests/images/logo.png';
function TelaLogin(){
    return(
        <section>
            <nav>
                <ul>
                    <li><a href="#"><img src={Logo} alt="Logo" />Bichinhos da TI</a></li>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Sobre nós</a></li>
                    <li><a href="#">Suporte</a></li>
                </ul>
                    <button className={Styles.ButtonEntrar}>Entrar</button>
            </nav>
            <div className={Styles.formLogin}>
                <form action="">
                    <h1>Entrar</h1>
                    <label>Email</label>
                   <input type="text" placeholder='Coloque seu email!' />
                   <label>Senha</label>
                   <input type="password" placeholder='Colque a sua senha!'/>
                   <a href='#' className={Styles.esqueceuSenha}>esquceu sua senha?</a>
                   <button>Login</button>
                   <p>ou</p>
                   <button>Entre com o Google</button>

                </form>
            </div>
        </section>
    )

}

export default TelaLogin;