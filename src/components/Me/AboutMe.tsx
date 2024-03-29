import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Eu } from "./components/Eu";
import { Formacao } from "./components/Formacao";
import { Experiencias } from "./components/Experiencias";
import { Projeto } from "./components/Projeto";
import { useMediaQuery } from "react-responsive";

export default function AboutMe() {
   const [ nav, setNav ] = useState(['Eu', 'Formação', 'Experiências', 'Projeto Científico'])
   
   const isMobile = useMediaQuery({ query: '(max-width: 640px)'})

   const [ selectNav, setSelectNav ] = useState('Eu')

   const [ref] = useKeenSlider<HTMLDivElement>({
      slides: {
        perView: (isMobile===true ? 2.3 : 3.4),
        spacing: 4,
      },
    })


   return (
      <div className="flex flex-col gap-14 w-full mt-10 items-end" id='me'>

         <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-5xl [text-shadow:2px_4px_4px_#161515]'}>
            SOBRE MIM
            <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-purple-500 to-purple-800 shadow-box`}/>
         </div>

         <div className="flex w-[96%] max-w-[1000px] mr-2 ml-2 rounded-bl-[60px] rounded-tl-[60px] 
            bg-gradient-to-b from-purple-600 to-cyan-600 shadow-boxLg
         ">

            <div className="ml-2 my-[2px] flex flex-col rounded-bl-[60px] gap-10 w-full rounded-tl-[60px] bg-gray-700 pb-6 text-[16px] sm:text-[19px] text-gray-100/90 font-base
               [text-shadow:1px_1px_3px_#111111] relative leading-6 tracking-wide
            ">

               <div className="flex text-left py-4 w-full border-b-4 border-gray-800 relative rounded-tl-[60px] overflow-hidden">

                  <Eu/>

                  <Formacao selectNav={selectNav}/>

                  <Experiencias selectNav={selectNav}/>

                  <Projeto selectNav={selectNav}/>

               </div>

               <div className="flex pl-10 px-4">

                  <div ref={ref} className="keen-slider">

                     <div className="flex items-center sm:gap-20 overflow-hidden">

                        { nav.map( (val, id) => (

                           <button 
                              key={id}
                              onClick={() => setSelectNav(val)}
                              className={`keen-slider__slide number-slide${id + 1}`}
                              
                           >
                              <button className={`
                                 flex flex-col w-[140px] gap-2 items-center rounded-t-lg duration-300 group ${selectNav === val ?'' :''}
                              `}>

                                 <text className="font-semibold w-full">{val}</text>

                                 <div className={`h-2 rounded-full shadow-box w-full duration-300 group-hover:bg-purple-400 ${selectNav === val ?'bg-purple-300' :'bg-gray-600/40'}`}/>

                              </button>

                           </button>

                        ))}

                     </div>

                  </div>
               </div>

            </div>

         </div>

      </div>
   )
}