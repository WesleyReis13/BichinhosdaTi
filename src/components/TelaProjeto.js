import React from 'react';
import Styles from './TelaProjeto.module.css';
import Email from '../assests/images/email.svg';
const TelaProjeto = () => (
  <div className={Styles.TelaProjeto}>
    <div className={Styles.CardProjeto}>
      <div className={Styles.CardTitulo}>
            <h2>Titulo</h2>
      </div>
    </div>
        <h1>Últimos commits</h1>
        <div className={Styles.CardCommits}>
            <div className={Styles.Commits}>
                <h3>Titulo</h3>
                <p>Autor: Lorem Ipsulum</p>
                <p>Data: DD/MM/AAAA</p>
                <p>Arquivos: Lorem Ipsulum</p>
            </div>
            <div className={Styles.Commits}>
                <h3>Titulo</h3>
                <p>Autor: Lorem Ipsulum</p>
                <p>Data: DD/MM/AAAA</p>
                <p>Arquivos: Lorem Ipsulum</p>
            </div>
            <div className={Styles.Commits}>
                <h3>Titulo</h3>
                <p>Autor: Lorem Ipsulum</p>
                <p>Data: DD/MM/AAAA</p>
                <p>Arquivos: Lorem Ipsulum</p>
            </div>
        </div>
  </div>
);

export default TelaProjeto;
