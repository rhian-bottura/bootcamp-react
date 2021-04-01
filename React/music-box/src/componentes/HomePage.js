import React from 'react';
import imagem from '../assets/images/index-img.png'
function HomePage(){
    return (
        <div className="container index">
            <div className="index-content">
                <div className="box-text-index">
                    <div className="info-index">
                        <h1>Faça parte do nosso dicionário de música </h1>
                        <h3>Contribua e fique por dentro das novidades  </h3>
                    </div>
                    <div className="img-index"></div>
                    <button className="btn-green">Conhecer agora</button>
                </div>     
                <img src={imagem} alt="" className="index-img"/>
            </div>  
        </div>
    );
}

export default HomePage;
/*
 1 . importa o REact (linha 1)
 2. cria a funçao com o nome do seu componente
 function MeuComponente(){
     return (
         aqui vem o html
     )
 }
 3. exporta na ulttima linha do seu arquivo de componente
 export default MeuComponente;
 4. ajuste seu html
 4.1 troque class por className
 4.2 adicione barra em "self-closing" tags <img/> <br/> <input/>
 4.3 importe imagens ao componente
 import minhaImagem from 'local/da/imagem.png'
*/