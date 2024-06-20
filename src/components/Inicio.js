import Styles from './inicio.module.css';
function Inicio(){
    const imagemUrl = '/assets/imagens/Media.png';
    const imagens = [imagemUrl, imagemUrl, imagemUrl, imagemUrl];
    return (
       <div className={Styles.inicio}>
         <div className={Styles.projetos}>
          <h2>
              Projetos:
          </h2>
          {imagens.map((Media, index) => (
            <img
              key={index}
              src={Media}
              alt={`Media ${index + 1}`}
              className="imagem"
            />
          ))}
          <button className={Styles.MostrarMais}>Mostrar Mais</button>
         </div>

         <div className={Styles.avisosSquad}>
         <h2>
             Avisos da Squad:
         </h2>
         {imagens.map((Media, index) => (
           <img
             key={index}
             src={Media}
             alt={`Media ${index + 1}`}
             className="imagem"
           />
         ))}
         <button className={Styles.MostrarMais}>Mostrar Mais</button>
               </div>
       </div>
    )
    }

export default Inicio;