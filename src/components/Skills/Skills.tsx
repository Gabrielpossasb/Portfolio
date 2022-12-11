import { useState } from "react";

export function Skills() {

   const [ skills, setSkills ] = useState([
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
   ])

   let delay = 0

   return (
      <div id="skills">
         <div className="flex cel:w-full px-6 mt-24 rounded-md gap-8 relative">

            <div className="pt-20">
               <text className="rotate-180 transform text-gray-800  inline-block text-[96px] font-semibold
               [text-shadow:6px_4px_8px_#161515]" 
               style={{ writingMode: 'vertical-rl' }}>
                  SKILLS
               </text>
            </div>
           
            <div className="flex flex-col gap-14 h-full py-14 border-l-[6px] border-purple-600/80">
               <div className={'flex -mt-6 mb-4'}>
                  <button className={`rounded-full w-12 h-4 bg-gradient-to-b from-purple-500 to-purple-800 ml-10 mt-8 shadow-box`}/>
                  <button className={`rounded-full w-12 h-4 bg-gradient-to-b from-gray-900 to-gray-800 ml-10 mt-8 shadow-box`}/>
                  <button className={`rounded-full w-12 h-4 bg-gradient-to-b from-gray-900 to-gray-800 ml-10 mt-8 shadow-box`}/>
               </div>

               {  skills.map( skill => { delay = delay + 2500; return (
                     <div className={`flex gap-4 w-[250px] items-center duration-300 font-medium -ml-[17px] group relative
                        hover:cursor-default animate-colorTransitonText text-cyan-50
                     `} style={{animationDelay: `${delay}ms`}}>
                        <div className="h-7 w-7 duration-300 rounded-full border-4 border-gray-700 animate-colorTransitonBg
                           bg-gradient-to-b from-purple-500 to-purple-800"
                           style={{animationDelay: `${delay}ms`}}
                        />

                        <text className="text-2xl">{skill.name}</text>

                        <img className="w-10 h-10 ml-auto animate-sizeTransition absolute right-0 rounded-md" style={{animationDelay: `${delay}ms`}} src={skill.img} alt=''/>
                     </div>
                  )})
               }
            </div>
              
            

            <div>
               <button>{'>'}</button>
            </div>
         </div>
      </div>
   );
}