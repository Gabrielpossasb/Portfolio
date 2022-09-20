import { useContext, useState } from "react";
import { Container } from "./styles";
import { IoEnterOutline } from 'react-icons/io5';
import { MyThemeContext } from "../../hooks/useThemeApi";

export function Projects() {
   const { myTheme } = useContext(MyThemeContext)

   const [projetos, setprojetos] = useState([
      {
        img: require('./prints/worldtrip-Home.png'),
        name: 'WorldTrip',
        width:0,
        height:0,
        ratio:0,
        website:'http://worldtrip-omega.vercel.app/'
      },
       {
         img: require('./prints/Plataforma_aulas.png'),
         name: 'Plataforma de Aulas',
         width:0,
         height:0,
         ratio:0,
         website:'http://plataforma-aulas-rocketseat.vercel.app/'
       },
       {
         img: require('./prints/dashgo-Dashboard.png'),
         name: 'DashGO',
         width:0,
         height:0,
         ratio:0,
         website:'https://dash-go-ecru.vercel.app/'
       },
       {
         img: require('./prints/dtmonet.png'),
         name: 'dt money',
         width:0,
         height:0,
         ratio:0,
         website:'http://aplicacao-balanco-de-contas.vercel.app/'
       },
       
   ]);

   return (
      <Container theme={myTheme}>
         <div className="content">
            <div className="line"></div>
            
            <div className="projetosArea">            
               {
               projetos.map(val => (
                  
                     <div key={val.name} className="projeto">
                        <h2>{val.name}</h2>
                        <img src={val.img} />
                        
                        <button>
                           <a target="_blank" href={val.website}>
                              <IoEnterOutline size={32} color='white'/>
                           </a>
                           
                        </button>
                        <a target="_blank" href={val.website}>
                              GIT 
                           </a>
                     </div>
                  )
               )}
               
            </div>
            <div className="line-"></div>
         </div>
      </Container>
   );
}