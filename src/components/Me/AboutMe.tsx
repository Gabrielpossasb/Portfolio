export default function AboutMe() {
   return (
      <div className="flex flex-col gap-14 w-full items-end" id='me'>
         <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-4xl'}>
            SOBRE MIM
            <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-purple-500 to-purple-800 shadow-box`}/>
         </div>

         <div className="flex relative right-4 w-[75%] h-[400px] rounded-bl-[60px] rounded-tl-[60px] 
            bg-gradient-to-b from-purple-600 to-cyan-600 shadow-boxLg
         ">
            <div className="ml-2 mr-6 rounded-bl-[60px] rounded-tl-[60px] bg-gray-700 p-10 text-xl text-gray-300 font-semibold">
               <text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem magni, molestias, asperiores dolorum minus repellendus explicabo aut harum, in incidunt nulla? Eius, porro cupiditate velit quos et culpa eos?
               </text>
            </div>
         </div>
      </div>
   )
}