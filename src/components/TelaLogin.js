import Styles from './TelaLogin.module.css';
import Google from '../assests/images/google.svg';
function TelaLogin(){
    return(
        <section>
            <div className={Styles.formLogin}>
                <form action="">
                    <h1>Entrar</h1>
                    <label>Email</label>
                   <input type="text" placeholder='Coloque seu email!' />
                   <label>Senha</label>
                   <input type="password" placeholder='Colque a sua senha!'/>
                   <a href='#' className={Styles.esqueceuSenha}>esqueceu sua senha?</a>
                   <button className={Styles.ButtonLogin}>Login</button>
                       <p>ou</p>
                   <button className={Styles.InputGoogle}><img src={Google} className={Styles.LogoGoogle}/>Entre com o Google</button>
                   <div className={Styles.CadAqui}>
                       <p>Não tem uma conta? <a href='#'>Cadastre-se aqui!</a></p>
                   </div>

                </form>
            </div>
        </section>
    )

}

export default TelaLogin;