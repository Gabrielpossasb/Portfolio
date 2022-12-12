import { useState } from "react";

export function Skills() {

   const [ skills, setSkills ] = useState([
      [
      { 
         name: 'React',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
      },
      { 
         name: 'HTML5',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
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
         name: 'TypeScript',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
      },
      { 
         name: 'CSS',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      ],
      [
         { 
            name: 'React',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
         },
         { 
            name: 'Consumo de API',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
         },
         { 
            name: 'SSR, SSG',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
         },
         { 
            name: 'GraphCMS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
         },
         { 
            name: 'Fauna DB',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
         },
         { 
            name: 'Firebase',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
         },
      ],
      [
         { 
            name: 'React',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
         },
         { 
            name: 'Consumo de APIsds sdsdsds ds',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
         },
         { 
            name: 'SSR, SSG',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
         },
         { 
            name: 'GraphCMS',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
         },
         { 
            name: 'Fauna DB',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
         },
         { 
            name: 'Firebase',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
         },
      ]
   ])

   const [ pagination, setPagination ] = useState(0)
   const [ alternate, setAlternate ] = useState(false)

   let delay = 0

   function handlePagination(id:number) {
      setPagination(id)
      setAlternate(true)
      handleAlternate()
   }

   async function handleAlternate() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAlternate(false)
   }

   return (
      <div id="skills" className="flex cel:w-full items-center mt-24 bg-gray-800/50 cel:justify-between rounded-md gap-8 px-2 sm:px-20 sm:gap-40 relative overlfow-hidden shadow-boxLg">

         <div className="">
            <text className="rotate-180 transform text-gray-800  inline-block cel:text-8xl text-[96px] font-semibold
            [text-shadow:6px_4px_8px_#161515]" 
            style={{ writingMode: 'vertical-rl' }}>
               SKILLS
            </text>
         </div>
         
         <div className="pl-4 overflow-hidden w-full h-[580px] sm:w-[500px]">
            <div className="flex flex-col gap-14 h-full py-14 border-l-[6px] border-purple-600/80">
               <div className={'flex -mt-6 mb-6'}>
                  <button onClick={() => handlePagination(0)} className={`rounded-full w-12 h-4 bg-gradient-to-b ml-10 mt-8 shadow-box transition-all duration-500 ${(pagination === 0 )?'from-purple-500 to-purple-800':'from-gray-900 to-gray-800'}`}/>
                  <button onClick={() => handlePagination(1)} className={`rounded-full w-12 h-4 bg-gradient-to-b ml-10 mt-8 shadow-box transition-all duration-500 ${(pagination === 1 )?'from-purple-500 to-purple-800':'from-gray-900 to-gray-800'}`}/>
                  <button onClick={() => handlePagination(2)} className={`rounded-full w-12 h-4 bg-gradient-to-b ml-10 mt-8 shadow-box transition-all duration-500 ${(pagination === 2 )?'from-purple-500 to-purple-800':'from-gray-900 to-gray-800'}`}/>
               </div>

               <div className={`flex flex-col w-full gap-10 relative transition-all 
                  ${alternate ? 'animate-skillPaginationAlternate': ''}
               `}>
                  {  skills[pagination].map( skill => { delay = delay + 2500; return (
                        <div className="duration-200 w-full relative hover:translate-x-8 hover:cursor-pointer">
                           <div className={`flex gap-4 w-full items-center duration-300 font-medium sm:-ml-[17px] -ml-[15px] group relative
                              hover:cursor-default animate-colorTransitonText text-cyan-50
                           `} style={{animationDelay: `${delay}ms`}}>
                              <div className="h-7 w-7 duration-300 rounded-full border-4 border-gray-800 animate-colorTransitonBg
                                 bg-gradient-to-b from-purple-500 to-purple-800"
                                 style={{animationDelay: `${delay}ms`}}
                              />

                              <text className="text-2xl">{skill.name}</text>

                              <img className="w-10 h-10 ml-auto animate-sizeTransition absolute right-0 rounded-md" style={{animationDelay: `${delay}ms`}} src={skill.img} alt=''/>
                           </div>
                        </div>
                     )})
                  }
               </div>
            </div>
         </div>
      </div>
   );
}