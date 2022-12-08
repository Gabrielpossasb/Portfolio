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
         <div className="grid-cols-3 grid px-6 rounded-md gap-8 relative">

            <div className="pt-20">
               <text className="rotate-180 transform text-neutral-800  inline-block text-[78px] font-semibold
               [text-shadow:2px_2px_2px_#32606ecc]" 
               style={{ writingMode: 'vertical-rl' }}>
                  SKILLS
               </text>
            </div>
           
            <div className="flex flex-col gap-14 h-full py-10 border-l-2 border-violet-900">
               {  skills.map( skill => { delay = delay + 2500; return (
                     <div className={`flex gap-4 w-[250px] items-center duration-300 font-medium -ml-[11px] group relative
                        hover:cursor-default animate-colorTransitonText
                     `} style={{animationDelay: `${delay}ms`}}>
                        <div className="h-5 w-5 bg-violet-900 duration-300 rounded-full border-4 border-neutral-900 group-hover:bg-cyan-500 animate-colorTransitonBg"
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