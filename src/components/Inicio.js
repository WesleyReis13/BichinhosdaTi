import React, { useState } from 'react';
import Styles from './inicio.module.css';
import TelaProjeto from './TelaProjeto';

function Inicio() {
    const [mostrarTelaProjeto, setMostrarTelaProjeto] = useState(false);
    const imagemUrl = '/assets/imagens/Media.png';
    const imagens = [imagemUrl, imagemUrl, imagemUrl, imagemUrl];

    const handleImagemClick = () => {
        setMostrarTelaProjeto(true);
    };

    const handleVoltarClick = () => {
        setMostrarTelaProjeto(false);
    };

    return (
        <div className={Styles.inicio}>
            {mostrarTelaProjeto ? (
                <TelaProjeto onVoltar={handleVoltarClick} />
            ) : (
                <>
                    <div className={Styles.projetos}>
                        <h2>Projetos:</h2>
                        <div className={Styles.cards1}>
                            {imagens.map((Media, index) => (
                                <div key={index} className={Styles.card}>
                                    <div className={Styles.image} onClick={handleImagemClick}>
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
                                    <div className={Styles.image} onClick={handleImagemClick}>
                                        <img src={Media} alt={`Media ${index + 1}`} className={Styles.imagem} />
                                    </div>
                                    <div className={Styles.title}>Título</div>
                                </div>
                            ))}
                        </div>
                        <button className={Styles.MostrarMais}>Mostrar Mais</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Inicio;
