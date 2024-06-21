import React from 'react';
import Styles from './inicio.module.css';

function Inicio() {
    const imagemUrl = '/assets/imagens/Media.png';
    const imagens = [imagemUrl, imagemUrl, imagemUrl, imagemUrl];
    return (
        <div className={Styles.inicio}>
            <div className={Styles.projetos}>
                <h2>Projetos:</h2>
                <div className={Styles.cards1}>
                    {imagens.map((Media, index) => (
                        <div key={index} className={Styles.card}>
                            <div className={Styles.image}>
                                <img src={Media} alt={`Media ${index + 1}`} className={Styles.imagem} />
                            </div>
                            <div className={Styles.title}>Título</div>
                        </div>
                    ))}
                </div>
                <button className={Styles.MostrarMais}>Mostrar Mais</button>
            </div>
            <div className={Styles.avisosSquad}>
                <h2>Avisos da Squad:</h2>
                <div className={Styles.cards2}>
                    {imagens.map((Media, index) => (
                        <div key={index} className={Styles.card}>
                            <div className={Styles.image}>
                                <img src={Media} alt={`Media ${index + 1}`} className={Styles.imagem} />
                            </div>
                            <div className={Styles.title}>Título</div>
                        </div>
                    ))}
                </div>
                <button className={Styles.MostrarMais}>Mostrar Mais</button>
            </div>
        </div>
    );
}

export default Inicio;
