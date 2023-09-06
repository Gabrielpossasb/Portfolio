import { Props } from "./Formacao";

export function Projeto ({selectNav}: Props) {
   return (
      <div className={`flex flex-col p-8 gap-6 rounded-lg h-full w-[100vw] bg-gray-700 duration-700 absolute overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 top-0  ${selectNav==='Projeto Científico'?'left-0 right-0 opacity-100':'left-[2000px] opacity-0'}  `}>
                     
         <div className="flex flex-col gap-3">

            <div className="h-2 mb-2 rounded-full self-center bg-purple-400/60 w-2/5 shadow-box"/> 

            <text className="text-2xl font-semibold text-purple-300">Umidificador de Ar Automatizado</text>

            <div className="flex flex-col gap-2 pl-6">
               <text className="text-xl">Projeto Iniciação Científica</text>
               <text className="text-base text-gray-400">2019 - 2020 </text>
            </div>

            <text>Automatizamos um umidificador para controlar a umidade no ambiente, utilizando Arduino e C++. Recebemos uma menção honrosa da nossa escola pela apresentação deste projeto nas feiras FECINTEC, MOCC, MCTEA.</text>

            <text></text>

         </div>
      
      </div>
   )
}