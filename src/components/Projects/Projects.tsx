import { useState } from "react";
import { Container } from "./ProjectStyles";
import { IoArrowDown, IoLink, IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { DiGithubBadge } from "react-icons/di";
import dotWhite from '../../assets/DotsWhite.svg'
import { useMediaQuery } from "react-responsive";

export function Projects() {

   const isMobile = useMediaQuery({ query: '(max-width: 640px)'})
   const [currentPage, setCurrentPage] = useState(0)
   const [isTransitioning, setIsTransitioning] = useState(false)
   const projectsPerPage = isMobile ? 2 : 3

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
         img: require('./prints/GestNews-Home.png'),
         name: 'Gest News',
         description: 'Portal de notícias utilizando a api do New York Times. - (Responsivo)',
         tecnologies: ['React.js','TailwindCSS', 'TypeScript', 'Axios', 'Next.js', 'Api Routes', 'Consumdo de API' ,'Figma', 'Responsividade'],
         open: false,
         website:'https://gest-news.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Gest-News'
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
      /*
      {
         img: require('./prints/TravelSpace_Home.png'),
         name: 'Travel Space',
         description: 'Navegue entre as informações de APIs da Nasa de forma mais clara - (Responsivo)',
         tecnologies: ['React.js','TailwindCSS', 'TypeScript', 'Axios', 'Next.js', 'Api Routes', 'Consumdo de API' ,'Figma', 'Responsividade'],
         open: false,
         website:'https://travel-space-gilt.vercel.app/',
         git:'https://github.com/Gabrielpossasb/Travel-Space'
      },
      */
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

   const totalPages = Math.ceil(projetos.length / projectsPerPage)
   const startIndex = currentPage * projectsPerPage
   const endIndex = startIndex + projectsPerPage
   const currentProjects = projetos.slice(startIndex, endIndex)

   const handlePageChange = async (page: number) => {
      if (page === currentPage || isTransitioning) return
      
      setIsTransitioning(true)
      
      // Aguarda um pouco para a animação de fade out
      await new Promise(resolve => setTimeout(resolve, 150))
      
      setCurrentPage(page)
      
      // Aguarda um pouco para a animação de fade in
      setTimeout(() => {
         setIsTransitioning(false)
      }, 150)
   }

   return (
      <Container>
         <div className="content" id='projects'>

            <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-5xl [text-shadow:2px_4px_4px_#161515]'}>
               PROJETOS
               <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-cyan-500 to-cyan-800 shadow-box`}/>
            </div>
            
            <img src={dotWhite} alt='' className="absolute right-2 cel:-right-[65%] cel:top-12 -top-5 z-10"/>
            <img src={dotWhite} alt='' className="absolute right-2 cel:-right-[65%] -bottom-10 z-10"/>
            
            <div className="w-full relative cel:ml-6 bg-gray-700 rounded-bl-3xl rounded-tl-3xl z-20 px-4 py-4 pl-8 shadow-[_inset_10px_0px_20px_#202020] right-0 my-12">

               <div className={`grid gap-4 ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>  
                  {  currentProjects.map((val, index) => (
                     <div key={index}>
                        <div key={val.name} className={`flex flex-col items-center justify-center bg-gradient-to-b from-gray-700 to-gray-800
                           shadow-card m-2 rounded-md hover:cursor-grab transition-all duration-300 overflow-visible
                        `}>
                           <div className="text-cyan-50 h-[220px] sm:h-[260px] w-full relative font-normal flex flex-col gap-1 items-center overflow-visible p-2">
                              <text className="font-bold text-2xl text-cyan-500">{val.name}</text>
                              <text className="text-center">{val.description}</text>
                              
                              <div className="flex flex-col gap-1 items-center mt-1 w-full px-3 overflow-y-scroll scroll-smooth
                                 scrollbar-thin scrollbar-thumb-gray-900/50 scrollbar-track-gray-900/30 scroll-mx-2 scrollbar-corner-inherit
                              ">
                                 <strong className="text-cyan-500/90 text-sm">Conhecimentos Praticados:</strong>
                                 <div className="grid grid-cols-2 gap-1 h-20 sm:h-24">
                                    { val.tecnologies.map((tecnology, ind) => (
                                       <div key={ind} className="flex items-center justify-center">
                                          <text className="mr-1 w-24 text-center text-xs">- {tecnology}</text>
                                       </div>
                                    ))}
                                 </div>
                              </div>

                              <div className={`absolute bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg bottom-0 flex mx-2 mb-2 flex-col top-16 items-center duration-700 ${val.open?'translate-y-40 sm:translate-y-44 shadow-insetSoft':''} `}>
                                 <button 
                                    onClick={() => handleOpenProject(index)}
                                    className="text-cyan-500/80 hover:text-cyan-500 font-medium bg-gray-800/60 text-xs w-24 hover:bg-gray-800 hover:animate-ping transition-all px-3 p-1 rounded-xl duration-500 flex items-center justify-between my-1
                                 ">
                                    { !val.open ? 'Ver mais': 'Ver menos'}
                                    <IoArrowDown size={16} className={`${val.open?'rotate-180 duration-700':'rotate-0 duration-700'}`}/>
                                 </button>

                                 <img src={val.img} alt={''} className='rounded-lg shadow-boxLg w-full '/>
                              </div>
                           </div>
                           
                           <div className="flex justify-between w-full px-4 p-1 shadow-[_0_-2px_8px_rgba(0,0,0,0.3)] rounded-xl bg-gray-800/20 backdrop-blur-md relative z-10 mt-6">
                              <button className="p-1 pl-3 bg-gradient-to-t transition-all w-28 from-cyan-600 to-purple-500 text-sm text-cyan-50 font-medium rounded-md shadow-box
                                 hover:brightness-75 duration-300 hover:shadow-boxLg
                              ">
                                 <a target="_blank" rel='noreferrer' href={val.website} className='flex items-center gap-2'>
                                    <IoLink size={16} color='white'/>
                                    Visitar
                                 </a>
                              </button>
                              <button className="hover:brightness-75 duration-300 ring-2 ring-transparent shadow-box rounded-full hover:shadow-boxLg">
                                 <a target="_blank" rel='noreferrer' href={val.git}>
                                    <DiGithubBadge size={32} color='white'/>
                                 </a>
                                 
                              </button>
                           </div>
                        </div>
                     </div>
                     ))
                  }
               </div>

               {/* Sistema de Paginação */}
               {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-6">
                     <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 0 || isTransitioning}
                        className="p-2 bg-gray-600/30 backdrop-blur-sm border border-gray-500/20 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500/40 transition-all duration-300"
                     >
                        <IoArrowBack size={20} />
                     </button>
                     
                     <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                           <button
                              key={index}
                              onClick={() => handlePageChange(index)}
                              disabled={isTransitioning}
                              className={`w-4 h-4 rounded-full transition-all duration-300 backdrop-blur-sm border-2 ${
                                 currentPage === index
                                    ? 'bg-cyan-500 border-cyan-400'
                                    : 'bg-gray-600/30 hover:bg-gray-500/40 border-gray-500/20'
                              } ${isTransitioning ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                           />
                        ))}
                     </div>
                     
                     <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages - 1 || isTransitioning}
                        className="p-2 bg-gray-600/30 backdrop-blur-sm border border-gray-500/20 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-500/40 transition-all duration-300"
                     >
                        <IoArrowForward size={20} />
                     </button>
                  </div>
               )}
            </div>
         </div>
      </Container>
   );
}