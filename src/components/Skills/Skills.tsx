import { useState, useEffect } from "react";

export function Skills() {

   const [ skills ] = useState([
      [
      { 
         name: 'React',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      { 
         name: 'React Native',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      { 
         name: 'TypeScript',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      { 
         name: 'Next.js',
         img: 'https://cdn.worldvectorlogo.com/logos/next-js.svg'
      },
      { 
         name: 'Tailwind CSS',
         img: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'
      },
      { 
         name: 'Python',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
      },
      ],
      [
         { 
            name: 'Axios',
            img: 'https://avatars.githubusercontent.com/u/32372333?s=280&v=4'
         },
         { 
            name: 'JavaScript',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
         },
         { 
            name: 'GraphQL',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
         },
         { 
            name: 'Fauna DB',
            img: 'https://retool.com/integrations-logos/faunadb.svg'
         },
         { 
            name: 'Firebase',
            img: 'https://cdn.worldvectorlogo.com/logos/firebase-2.svg'
         },
         { 
            name: 'CSS3',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
         },
      ],
      [
         { 
            name: 'Consumo de API',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
         },
         { 
            name: 'Componentização do React',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
         },
         { 
            name: 'SSR, SSG, SPA',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
         },
         { 
            name: 'Inteligência Artificial',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
         },
         { 
            name: 'Metodologia SCRUM',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
         },
         { 
            name: 'Figma',
            img: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg'
         },
      ]
   ])

   const [ pagination, setPagination ] = useState(0)
   const [ alternate, setAlternate ] = useState(false)
   const [ focusedSkill, setFocusedSkill ] = useState<number | null>(null)
   const [ isAutoPlaying, setIsAutoPlaying ] = useState(true)

   // Auto-play apenas dos botões de paginação
   useEffect(() => {
      if (!isAutoPlaying) return;
      
      const interval = setInterval(() => {
         setPagination((prev) => (prev + 1) % skills.length)
      }, 4000) // Muda a cada 4 segundos

      return () => clearInterval(interval)
   }, [skills.length, isAutoPlaying])

   async function handlePagination(id: number) {
      setIsAutoPlaying(false) // Pausa o auto-play quando usuário clica
      setAlternate(true)
      await new Promise(resolve => setTimeout(resolve, 300)) // Reduzido de 500ms para 300ms
      setPagination(id)
      handleAlternate()
      
      // Retoma o auto-play após 10 segundos de inatividade
      setTimeout(() => {
         setIsAutoPlaying(true)
      }, 10000)
   }

   // Função para ativar manualmente o auto-play
   const activateAutoPlay = () => {
      setIsAutoPlaying(true)
   }

   async function handleAlternate() {
      await new Promise(resolve => setTimeout(resolve, 600)) // Reduzido de 1000ms para 600ms
      setAlternate(false)
   }

   const handleSkillFocus = (index: number) => {
      setFocusedSkill(index)
   }

   const handleSkillBlur = () => {
      setFocusedSkill(null)
   }

   return (

      <div className="flex w-full items-center justify-center px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 lg:mt-24">
         
         <div id="skills" className="flex items-center w-full max-w-[900px] bg-gray-700 justify-between gap-2 sm:gap-4 lg:gap-8 rounded-lg sm:rounded-xl px-3 sm:px-8 lg:px-16 relative overflow-hidden shadow-boxLg backdrop-blur-sm">

            <div className="hidden sm:block">
               <text className="rotate-180 transform text-[#192225] inline-block text-6xl sm:text-7xl lg:text-8xl font-bold
               [text-shadow:4px_3px_6px_#161515] transition-all duration-300 hover:scale-105" 
               style={{ writingMode: 'vertical-rl' }}>
                  SKILLS
               </text>
            </div>
            
            <div className="px-2 sm:px-4 lg:px-6 overflow-hidden w-full h-[500px] sm:h-[580px] lg:h-[620px]">

               <div className="flex flex-col gap-8 sm:gap-12 lg:gap-14 h-full py-8 sm:py-12 lg:py-14 border-l-[4px] sm:border-l-[6px] border-purple-600/80">

                  {/* Indicadores de paginação melhorados */}
                  <div className="flex justify-center sm:justify-start -mt-4 sm:-mt-6 mb-4 sm:mb-6 gap-2 sm:gap-3 ml-4 sm:ml-6">

                     {skills.map((_, index) => (
                        <button 
                           key={index}
                           onClick={() => handlePagination(index)} 
                           className={`rounded-full w-8 sm:w-10 lg:w-12 h-3 sm:h-4 bg-gradient-to-b transition-all duration-300 hover:scale-110 focus:outline-none
                              ${isAutoPlaying ? '' : 'focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50'}
                              ${(pagination === index) 
                                 ? `from-purple-500 to-purple-800 ${isAutoPlaying ? 'scale-110' : 'shadow-box'}` 
                                 : 'from-gray-900 to-gray-800 hover:shadow-boxPurple hover:from-purple-600 hover:to-purple-700'
                              }`}
                           aria-label={`Ir para página ${index + 1}`}
                        />
                     ))}
                     
                     {/* Indicador sutil de auto-play */}
                     <div 
                        className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${isAutoPlaying ? 'bg-purple-400 animate-pulse' : 'bg-gray-500'}`} 
                        title={isAutoPlaying ? 'Auto-play ativo (clique para pausar)' : 'Auto-play pausado (clique para ativar)'}
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                     />

                  </div>

                  {/* Container das skills com melhor responsividade */}
                  <div className={`flex flex-col w-full gap-6 sm:gap-8 lg:gap-10 relative transition-all duration-500 ease-in-out
                     ${alternate ? 'animate-skillPaginationAlternate': ''}
                  `}>
                     {  skills[pagination].map( (skill, index) => { 
                        return (
                           <div 
                              key={index} 
                              className="duration-300 w-full relative hover:cursor-pointer group"
                              onMouseEnter={() => handleSkillFocus(index)}
                              onMouseLeave={handleSkillBlur}
                              onFocus={() => handleSkillFocus(index)}
                              onBlur={handleSkillBlur}
                           >

                                                            <div className={`flex gap-3 sm:gap-4 w-full items-center duration-300 font-medium relative
                                 hover:cursor-default text-cyan-50 px-2 py-1 rounded-lg
                                 transition-all duration-300 hover:bg-gray-700/30 focus-within:bg-gray-700/30
                                 ${focusedSkill === index ? 'bg-gray-700/40 scale-105 animate-skillFocus' : ''}
                              `} 
                              tabIndex={0}
                              role="button"
                              aria-label={`Skill: ${skill.name}`}
                              >

                                 <div className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 rounded-full border-3 sm:border-4 border-gray-700
                                    bg-gradient-to-b from-purple-500 to-purple-800 transition-all duration-300
                                    ${focusedSkill === index ? 'scale-125 border-purple-400 animate-pulseGlow' : ''}
                                 `}
                                 />

                                 <text className="text-lg sm:text-xl lg:text-2xl group-hover:translate-x-4 sm:group-hover:translate-x-6 lg:group-hover:translate-x-8 duration-300 transition-transform">
                                    {skill.name}
                                 </text>

                                 {  pagination !== 2 && (
                                                                         <img 
                                        className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 ml-auto absolute right-2 sm:right-4 rounded-md 
                                           group-hover:translate-x-4 sm:group-hover:translate-x-6 lg:group-hover:translate-x-8 duration-500 transition-transform
                                           ${focusedSkill === index ? 'scale-110' : ''}
                                        `} 
                                        src={skill.img} 
                                        alt={`Logo ${skill.name}`}
                                     />
                                 )}
                              </div>
                           </div>
                        )})
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>

   );
}