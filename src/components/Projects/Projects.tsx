import { useContext, useState } from "react";
import { Container } from "./ProjectStyles";
import { IoEnterOutline } from 'react-icons/io5';
import { MyThemeContext } from "../../hooks/useThemeApi";
import { DiGithubBadge } from "react-icons/di";
import { Text } from '@chakra-ui/react'
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export function Projects() {
   const { myTheme } = useContext(MyThemeContext)

   const [sliderRef] = useKeenSlider(
      {
         slides: {
            perView: 2,
            spacing: 48,
          }
      },
      [
        // add plugins here
      ]
    )

   const [projetos, setprojetos] = useState([
      {
         img: require('./prints/worldtrip-Home.png'),
         name: 'WorldTrip',
         description: 'Navegue entre as principais cidades do mundo',
         width:0,
         height:0,
         ratio:0,
         website:'http://worldtrip-omega.vercel.app/',
         git:'https://github.com/Gabrielpossasb/worldtrip'
      },
      {
         img: require('./prints/Plataforma_aulas.png'),
         name: 'Plataforma de Aulas',
         description: 'Desenvolvida no evento Ignite no Youtube',
         width:0,
         height:0,
         ratio:0,
         website:'http://plataforma-aulas-rocketseat.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Plataforma-Aulas-Rocketseat'
      },
      {
         img: require('./prints/dashgo-Dashboard.png'),
         name: 'DashGO',
         description: 'Dashboard de gestão de pessoas',
         width:0,
         height:0,
         ratio:0,
         website:'https://dash-go-ecru.vercel.app/',
         git:'https://github.com/Gabrielpossasb/dashGo'
      },
      {
         img: require('./prints/dtmonet.png'),
         name: 'DT Money',
         description: 'Aplicação de balanço de contas',
         width:0,
         height:0,
         ratio:0,
         website:'http://aplicacao-balanco-de-contas.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Aplicacao-Balanco-de-Contas'
      },
      {
         img: require('./prints/dtmonet.png'),
         name: 'Ig.News',
         description: '',
         width:0,
         height:0,
         ratio:0,
         website:'http://aplicacao-balanco-de-contas.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Aplicacao-Balanco-de-Contas'
      },{
         img: require('./prints/dtmonet.png'),
         name: 'Ignite Shop',
         description: '',
         width:0,
         height:0,
         ratio:0,
         website:'http://aplicacao-balanco-de-contas.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Aplicacao-Balanco-de-Contas'
      },
   ]);

   return (
      <Container theme={myTheme}>
         <div className="content" id='projects'>

            <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-4xl'}>
               PROJETOS
               <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-cyan-500 to-cyan-800 shadow-box`}/>
            </div>
            
            <div className="w-[1150px] relative bg-gray-700 rounded-bl-3xl rounded-tl-3xl p-10 pl-16 shadow-[_inset_20px_0px_40px_#242424] right-0 my-12">
               <div className="keen-slider" ref={sliderRef}>  
                     {  projetos.map(val => (
                           <div className='keen-slider__slide'>
                              <div key={val.name} className={`flex flex-col items-center h-[430px] justify-center gap-8 bg-gradient-to-b from-gray-700 to-gray-800
                                 shadow-card m-4 rounded-md p-4 hover:cursor-grab
                              `}>
                                 <div className="text-cyan-50 font-normal flex flex-col gap-2 text-center">
                                    <text className="font-bold text-2xl text-cyan-500">{val.name}</text>
                                    <text>{val.description}</text>
                                 </div>
                                 
                                 <img src={val.img} height={200} alt={''} className='rounded-md shadow-boxLg'/>
                                 
                                 <div className="flex justify-between w-full px-10">
                                    <button className="p-2 bg-gradient-to-r transition-all w-40 from-cyan-500 to-purple-300 text-lg text-cyan-50 font-medium rounded-md shadow-box
                                       hover:brightness-75 duration-300 hover:shadow-boxLg
                                    ">
                                       <a target="_blank" rel='noreferrer' href={val.website} className='flex items-center gap-6'>
                                          <IoEnterOutline size={30} color='white'/>
                                          Visitar
                                       </a>
                                    </button>
                                    <button className="hover:brightness-75 duration-300 ring-2 ring-transparent shadow-box rounded-full hover:shadow-boxLg">
                                       <a target="_blank" rel='noreferrer' href={val.git}>
                                          <DiGithubBadge size={54} color='white'/>
                                       </a>
                                       
                                    </button>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
               </div>
            </div>
         </div>
      </Container>
   );
}