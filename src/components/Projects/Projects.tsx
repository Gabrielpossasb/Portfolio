import { useContext, useState } from "react";
import { Container } from "./ProjectStyles";
import { IoArrowDown, IoLink } from 'react-icons/io5';
import { MyThemeContext } from "../../hooks/useThemeApi";
import { DiGithubBadge } from "react-icons/di";
import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'
import dotWhite from '../../assets/DotsWhite.svg'
import { useMediaQuery } from "react-responsive";

export function Projects() {
   const { myTheme } = useContext(MyThemeContext)

   const isMobile = useMediaQuery({ query: '(max-width: 640px)'})

   const [sliderRef] = useKeenSlider(
      {
         slides: {
            perView: isMobile ? 1 : 2,
            spacing: 48,
          }
      },
      [
        // add plugins here
      ]
    )

   const [projetos, setprojetos] = useState([
      {
         img: require('./prints/ignite-shop.png'),
         name: 'Ignite Shop',
         description: 'Ecomerce de camisetas fictício da Rocketseat',
         tecnologies: ['React.js','Stiches', 'TypeScript', 'Stripe', 'Next.js', 'Fauna DB', 'Api Routes', 'SSR, SSG, SPA', 'Figma'],
         open: false,
         website:'https://ignite-shop-phi.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Ignite-Shop'
      },
      {
         img: require('./prints/worldtrip-Home.png'),
         name: 'WorldTrip',
         description: 'Navegue entre as principais cidades do mundo - (Responsivo)',
         tecnologies: ['React.js','Chakra UI', 'TypeScript', 'Swiper', 'Next.js', 'Consumo de APIs', 'Responsividade', 'Figma'],
         open: false,
         website:'http://worldtrip-omega.vercel.app/',
         git:'https://github.com/Gabrielpossasb/worldtrip'
      },
      {
         img: require('./prints/idea-maker.png'),
         name: 'IDEA Maker',
         description: 'Plaforma para criação de apresentações pré personalizadas - (Responsivo)',
         tecnologies: ['React.js','TailwindCSS', 'TypeScript', 'Figma', 'Next.js', 'Responsividade', 'Firebase', 'Autenticação de usuários', 'Amazenamento de dados'],
         open: false,
         website:'https://idea-maker.vercel.app/home',
         git:'https://github.com/Gabrielpossasb/idea-maker'
      },
      {
         img: require('./prints/Plataforma_aulas.png'),
         name: 'Plataforma de Aulas',
         description: 'Evento Ignite Lab no Youtube',
         tecnologies: ['React.js','GraphQL', 'ApolloClient', 'TailwindCSS', 'TypeScript', 'GraphCMS', 'Utilizar um banco de dados'],
         open: false,
         website:'http://plataforma-aulas-rocketseat.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Plataforma-Aulas-Rocketseat'
      },
      {
         img: require('./prints/dashgo-Dashboard.png'),
         name: 'DashGO',
         description: 'Dashboard de gestão de usuários - (Responsivo)',
         tecnologies: ['React.js','TypeScript','ChackraUI','Mirage.js','ReactQuery', 'Responsividade','Next.js', 'Axios'],
         open: false,
         website:'https://dash-go-ecru.vercel.app/dashboard',
         git:'https://github.com/Gabrielpossasb/dashGo'
      },
      {
         img: require('./prints/dtmonet.png'),
         name: 'DT Money',
         description: 'Aplicação de balanço de contas',
         tecnologies: ['React.js','Styled Components','TypeScript','Axios','Mirage.js','Create React App', 'Figma'],
         open: false,
         website:'http://aplicacao-balanco-de-contas.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Aplicacao-Balanco-de-Contas'
      },
      {
         img: require('./prints/Clone-Uber.png'),
         name: 'Clone PayPal',
         description: 'Projeto clone da home do PayPal para praticar estilizações',
         tecnologies: ['React.js','TailwindCSS','TypeScript','Create React App', 'Landing-Page'],
         open: false,
         website:'https://clone-pay-pal.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Clone-PayPal'
      },
      {
         img: require('./prints/Clone-Paypal.png'),
         name: 'Clone Uber',
         description: 'Projeto clone da home da Uber para praticar estilizações',
         tecnologies: ['React.js','TailwindCSS','TypeScript','Create React App', 'Landing-Page'],
         open: false,
         website:'https://clone-uber-rho.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Clone-Uber'
      },
   ]);

   function handleOpenProject(id: number) {
      //
      let ItemAlterd = projetos.filter((val,index) => index !== id);
      let ArraySemItemAltered = projetos.filter((val,index) => index === id);
      let ArrayAltered = {
         img: ArraySemItemAltered[0].img,
         name: ArraySemItemAltered[0].name,
         description: ArraySemItemAltered[0].description,
         tecnologies: ArraySemItemAltered[0].tecnologies,
         open: !ArraySemItemAltered[0].open,
         website: ArraySemItemAltered[0].website,
         git: ArraySemItemAltered[0].git,
      };

      ItemAlterd.splice(id, 0, ArrayAltered);
      setprojetos(ItemAlterd);
   }

   return (
      <Container theme={myTheme}>
         <div className="content" id='projects'>

            <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-5xl [text-shadow:2px_4px_4px_#161515]'}>
               PROJETOS
               <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-cyan-500 to-cyan-800 shadow-box`}/>
            </div>
            
            <img src={dotWhite} alt='' className="absolute right-2 cel:-right-[65%] cel:top-12 -top-5 z-10"/>
            <img src={dotWhite} alt='' className="absolute right-2 cel:-right-[65%] -bottom-10 z-10"/>
            
            <div className="w-full relative cel:ml-6 bg-gray-700 rounded-bl-3xl rounded-tl-3xl z-20 px-4 py-4 pl-8 shadow-[_inset_10px_0px_20px_#202020] right-0 my-12">

               <div className="keen-slider" ref={sliderRef}>  
                  {  projetos.map((val, index) => (
                     <div key={index} className='keen-slider__slide'>
                        <div key={val.name} className={`flex flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800
                           shadow-card m-4 rounded-md hover:cursor-grab
                        `}>
                           <div className="text-cyan-50 h-[340px] sm:h-[400px] w-full relative font-normal flex flex-col gap-2 items-center overflow-hidden p-4">
                              <text className="font-bold text-2xl text-cyan-500">{val.name}</text>
                              <text className="text-center">{val.description}</text>
                              
                              <div className="flex flex-col gap-2 items-center mt-2 w-full px-6 overflow-y-scroll 
                                 scrollbar-thin scrollbar-thumb-gray-900/50 scrollbar-track-gray-900/30 scroll-mx-2 scrollbar-corner-inherit
                              ">
                                 <strong className="text-cyan-500/90 text-lg">Conhecimentos Praticados:</strong>
                                 <div className="grid grid-cols-2 gap-2 h-36 sm:h-48">
                                    { val.tecnologies.map((tecnology, ind) => (
                                       <div key={ind} className="flex items-center justify-center">
                                          <text className="mr-2 w-36 text-center">- {tecnology}</text>
                                       </div>
                                    ))}
                                 </div>
                              </div>

                              <div className={`absolute bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg bottom-0 flex mx-2 mb-4 flex-col top-24 items-center duration-700 ${val.open?'translate-y-56 sm:translate-y-60 shadow-insetSoft':''} `}>
                                 <button 
                                    onClick={() => handleOpenProject(index)}
                                    className="text-cyan-500/80 hover:text-cyan-500 font-medium text-base w-32 hover:bg-gray-800 transition-all px-2 p-1 rounded-xl duration-500 flex items-center justify-between my-2
                                 ">
                                    { !val.open ? 'Ver mais': 'Ver menos'}
                                    <IoArrowDown size={24} className={`${val.open?'rotate-180 duration-700':'rotate-0 duration-700'}`}/>
                                 </button>

                                 <img src={val.img} alt={''} className='rounded-md shadow-boxLg w-full '/>
                              </div>
                           </div>
                           
                           <div className="flex justify-between w-full px-10  p-2 shadow-[_0_-2px_8px_#11111186] rounded-tl-xl rounded-tr-xl">
                              <button className="p-2 bg-gradient-to-r transition-all w-40 from-cyan-500 to-purple-300 text-lg text-cyan-50 font-medium rounded-md shadow-box
                                 hover:brightness-75 duration-300 hover:shadow-boxLg
                              ">
                                 <a target="_blank" rel='noreferrer' href={val.website} className='flex items-center gap-6'>
                                    <IoLink size={30} color='white'/>
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