import { useContext, useState } from "react";
import { Container } from "./styles";
import { IoEnterOutline } from 'react-icons/io5';
import { MyThemeContext } from "../../hooks/useThemeApi";
import { DiGithubBadge } from "react-icons/di";
import { Text } from '@chakra-ui/react'

export function Projects() {
   const { myTheme } = useContext(MyThemeContext)

   const [projetos, setprojetos] = useState([
      {
         img: require('./prints/worldtrip-Home.png'),
         name: 'WorldTrip',
         width:0,
         height:0,
         ratio:0,
         website:'http://worldtrip-omega.vercel.app/',
         git:'https://github.com/Gabrielpossasb/worldtrip'
      },
      {
         img: require('./prints/Plataforma_aulas.png'),
         name: 'Plataforma de Aulas',
         width:0,
         height:0,
         ratio:0,
         website:'http://plataforma-aulas-rocketseat.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Plataforma-Aulas-Rocketseat'
      },
      {
         img: require('./prints/dashgo-Dashboard.png'),
         name: 'DashGO',
         width:0,
         height:0,
         ratio:0,
         website:'https://dash-go-ecru.vercel.app/',
         git:'https://github.com/Gabrielpossasb/dashGo'
      },
      {
         img: require('./prints/dtmonet.png'),
         name: 'dt money',
         width:0,
         height:0,
         ratio:0,
         website:'http://aplicacao-balanco-de-contas.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Aplicacao-Balanco-de-Contas'
      },
       
   ]);

   return (
      <Container theme={myTheme}>
         <div className="content">
            
            <div className="projetosArea" id='projects'>            
               {  projetos.map(val => (
                     <div key={val.name} className="projeto">
                        <Text>{val.name}</Text>
                        <img src={val.img} alt={''}/>
                        
                        <div className="btnLinks">
                           <button className="btnDeploy">
                              <a target="_blank" rel='noreferrer' href={val.website}>
                                 <IoEnterOutline size={30} color='white'/>
                              </a>
                           </button>
                           <button>
                              <a target="_blank" rel='noreferrer' href={val.git}>
                                 <DiGithubBadge size={36} color='white'/>
                              </a>
                              
                           </button>
                        </div>
                     </div>
                  ))
               }
               
            </div>
         </div>
      </Container>
   );
}