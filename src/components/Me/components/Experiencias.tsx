import { Props } from "./Formacao";

export function Experiencias({ selectNav }: Props) {
  return (
    <div className={`flex flex-col p-8 gap-16 rounded-lg h-full w-full bg-gray-700 duration-700 absolute overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 top-0 ${selectNav === 'Experiências' ? 'left-0 right-0 opacity-100' : 'left-[2000px] opacity-0'}`}>

      <div className="flex flex-col gap-4">
        <div className="h-2 mb-2 rounded-full self-center bg-cyan-400/60 w-2/5 shadow-box" />

        <text className="text-2xl font-semibold text-cyan-300">Desenvolvedor de Software</text>

        <div className="flex flex-col gap-2 pl-6">
          <text className="text-xl">Erickson Martinez Consultoria</text>
          <text className="text-base text-gray-400">Jun de 2022 - Dez de 2022 · 7 meses</text>
        </div>

        <text>
          Atuei no desenvolvimento de soluções web personalizadas, como um sistema para gerenciamento de pedidos em restaurante e uma plataforma interativa para apresentações. Realizava manutenção de funcionalidades e interface, sempre focando em responsividade e usabilidade.
        </text>
        <text>Utilizei principalmente React.js, Next.js, TailwindCSS e TypeScript.</text>
      </div>

      <div className="flex flex-col gap-4">
        <div className="h-2 mb-2 rounded-full self-center bg-yellow-400/60 w-2/5 shadow-box" />

        <text className="text-2xl font-semibold text-yellow-300">Desenvolvedor Mobile</text>

        <div className="flex flex-col gap-2 pl-6">
          <text className="text-xl">Lojas Daury</text>
          <text className="text-base text-gray-400">Ago de 2023 - Mai de 2024 · 10 meses</text>
        </div>

        <text>
          Iniciei minha trajetória na Lojas Daury atuando nas funções de caixa e apoio administrativo. Após 8 meses, iniciei o desenvolvimento de um aplicativo mobile interno para treinamento e gestão de colaboradores.
        </text>
        <text>
          A aplicação inclui trilhas de aprendizado, vídeos, questionários e painel de progresso. Utilizei React Native, TypeScript e Firebase, atuando nas etapas de levantamento de requisitos, prototipação, criação de telas e estruturação do banco de dados.
        </text>
      </div>

    </div>
  );
}
