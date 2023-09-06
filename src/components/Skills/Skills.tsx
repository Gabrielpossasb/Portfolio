import { useState } from "react";

export function Skills() {

   const [ skills ] = useState([
      [
      { 
         name: 'React',
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
         name: 'Axios',
         img: 'https://avatars.githubusercontent.com/u/32372333?s=280&v=4'
      },
      { 
         name: 'HTML5',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
      },
      { 
         name: 'CSS3',
         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
      },
      ],
      [
         { 
            name: 'SASS',
            img: 'https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png'
         },
         { 
            name: 'Tailwind CSS',
            img: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg'
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
            name: 'Api Routes',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
         },
         { 
            name: 'Metodologia SCRUM',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
         },
         { 
            name: 'Clean-Code',
            img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
         },
      ]
   ])

   const [ pagination, setPagination ] = useState(0)
   const [ alternate, setAlternate ] = useState(false)

   let delay = 0

   async function handlePagination(id:number) {
      setAlternate(true)
      await new Promise(resolve => setTimeout(resolve, 500))
      setPagination(id)
      handleAlternate()
   }

   async function handleAlternate() {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setAlternate(false)
   }

   return (
      <div id="skills" className="flex w-full items-center mt-20 bg-gray-800/50 cel:justify-between rounded-md gap-8 px-2 md:px-16 sm:gap-20 lg:gap-40 relative overlfow-hidden shadow-boxLg">

         <div className="">
            <text className="rotate-180 transform text-gray-800  inline-block cel:text-8xl text-[96px] font-semibold
            [text-shadow:6px_4px_8px_#161515]" 
            style={{ writingMode: 'vertical-rl' }}>
               SKILLS
            </text>
         </div>
         
         <div className="px-4 overflow-hidden w-full h-[580px] sm:w-[500px]">
            <div className="flex flex-col gap-14 h-full py-14 border-l-[6px] border-purple-600/80">
               <div className={'flex -mt-6 mb-6 items-center'}>
                  <button onClick={() => handlePagination(0)} className={`rounded-full w-12 h-4 bg-gradient-to-b ml-10 mt-8 shadow-box transition-all duration-300 ${(pagination === 0 )?'from-purple-500 to-purple-800 shadow-boxPurple':'from-gray-900 to-gray-800 hover:shadow-boxPurple'}`}/>
                  <button onClick={() => handlePagination(1)} className={`rounded-full w-12 h-4 bg-gradient-to-b ml-10 mt-8 shadow-box transition-all duration-300 ${(pagination === 1 )?'from-purple-500 to-purple-800 shadow-boxPurple':'from-gray-900 to-gray-800 hover:shadow-boxPurple'}`}/>
                  <button onClick={() => handlePagination(2)} className={`rounded-full w-12 h-4 bg-gradient-to-b ml-10 mt-8 shadow-box transition-all duration-300 ${(pagination === 2 )?'from-purple-500 to-purple-800 shadow-boxPurple':'from-gray-900 to-gray-800 hover:shadow-boxPurple'}`}/>
               </div>


               <div className={`flex flex-col w-full gap-10 relative transition-all 
                  ${alternate ? 'animate-skillPaginationAlternate': ''}
               `}>
                  {  skills[pagination].map( (skill, index) => { delay = delay + 2500; return (
                        <div key={index} className="duration-200 w-full relative hover:cursor-pointer group">
                           <div className={`flex gap-4 w-full items-center duration-300 font-medium sm:-ml-[17px] -ml-[15px] relative
                              hover:cursor-default animate-colorTransitonText text-cyan-50
                           `} style={{animationDelay: `${delay}ms`}}>
                              <div className="h-7 w-7 rounded-full border-4 border-gray-700 animate-colorTransitonBg
                                 bg-gradient-to-b from-purple-500 to-purple-800"
                                 style={{animationDelay: `${delay}ms`}}
                              />

                              <text className="text-2xl group-hover:translate-x-8 duration-200">{skill.name}</text>

                              {  pagination !== 2 && (
                                 <img className="w-10 h-10 ml-auto animate-sizeTransition absolute right-0 rounded-md group-hover:translate-x-8 duration-1000" style={{animationDelay: `${delay}ms`}} src={skill.img} alt=''/>
                              )}
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