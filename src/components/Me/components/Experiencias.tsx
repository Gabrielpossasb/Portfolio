import { Props } from "./Formacao";

export function Experiencias ({selectNav}: Props) {
   return (
      <div className={`flex flex-col p-8 gap-16 rounded-lg h-full w-full bg-gray-700 duration-700 absolute overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700  top-0 ${selectNav==='Experiências'?'left-0 right-0 opacity-100':'left-[2000px] opacity-0'}  `}>
                     
         <div className="flex flex-col gap-4">

            <div className="h-2 mb-2 rounded-full self-center bg-cyan-400/60 w-2/5 shadow-box"/>

            <text className="text-2xl font-semibold text-cyan-300">Desenvolvedor de Software</text>

            <div className="flex flex-col gap-2 pl-6">
               <text className="text-xl">Erickson Martinez Consultoria</text>
               <text className="text-base text-gray-400">Jun de 2022 - Dez de 2022 · 7 meses </text>
            </div>

            <text >Realizava manutenção e criação de sistemas, como um site para gerenciar as atividades de um restaurante e uma plataforma para auxiliar em apresentações gerando ao invés de um pdf, uma página web estilizada
            </text>

            <text>- Uilizava principalmente React.js, Next.js, TailwindCSS e TypeScript</text>


         </div>


         <div className="flex flex-col gap-3">

            <div className="h-2 mb-2 rounded-full self-center bg-purple-400/60 w-2/5 shadow-box"/>

            <text className="text-2xl font-semibold text-purple-300">Atendente de Lanchonete</text>

            <div className="flex flex-col gap-2 pl-6">
               <text className="text-xl">Chiparia das Bandeiras</text>
               <text className="text-base text-gray-400">Mai de 2023 - Jul de 2023 · 3 meses </text>
            </div>

            <text>Primeira experiencia presencial com atendimento ao público. Em poucos meses obtive conhecimento de fechamento de caixa, controle de mercadoria. Além de atendimento ao cliente, fazia as atividades cotidianas como, assar salgados e chipas e manter o ambiente limpo e conservado</text>

            <text></text>

         </div>

      </div>
   )
}