import { useContext, useState } from "react";
import { Container } from "./styles";
import { IoEnterOutline } from 'react-icons/io5';
import { MyThemeContext } from "../../hooks/useThemeApi";

export function Projects() {
   const { myTheme } = useContext(MyThemeContext)

   const [projetos, setprojetos] = useState([
      {
        img: require('./prints/Plataforma_aulas.png'),
        name: 'Plataforma de Aulas',
        width:0,
        height:0,
        ratio:0,
        website:'http://plataforma-aulas-rocketseat.vercel.app/'
      },
       {
         img: require('./prints/Player-music.png'),
         name: 'Plataforma de Aulas',
         width:0,
         height:0,
         ratio:0,
         website:'https://gabrielpossasb.github.io/Player-Music/'
       },
       {
         img: require('./prints/Portal-noticias.png'),
         name: 'Plataforma de Aulas',
         width:0,
         height:0,
         ratio:0,
         website:'https://gabrielpossasb.github.io/Portal-Noticias/'
       },
       {
         img: require('./prints/Calculadora.png'),
         name: 'Plataforma de Aulas',
         width:0,
         height:0,
         ratio:0,
         website:'https://gabrielpossasb.github.io/Calculadora/'
       },
       
   ]);

   return (
      <Container theme={myTheme}>
         <div className="content">
            <div className="line"></div>
            <h1>PROJETOS</h1>
            
            <div className="projetosArea">            
               {
               projetos.map(val => (
                  
                     <div key={val.name} className="projeto">
                        <h2>{val.name}</h2>
                        <img src={val.img}/>
                        
                        <button>
                           <a target="_blank" href={val.website}>
                              <IoEnterOutline size={32} color='white'/>
                           </a>
                        </button>
                     </div>
                  )
               )}
               
            </div>
            <div className="line-"></div>
         </div>
      </Container>
   );
}