
export interface Props {
   selectNav: string
}

export function Formacao ({selectNav}: Props) {
   return (
      <div className={`flex flex-col bg-gray-700 sm:rounded-2xl rounded-[40px] p-8 h-full absolute items-center  z-20 duration-700 transition-all  top-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700
         ${selectNav==='Formação'?'left-0 right-0 opacity-100':'left-[2000px] opacity-0'}                
      `}>
      
         <div className={'w-full rounded-lg '}>

            <div className={'flex flex-col gap-10 '}>

               <text className="text-purple-300 font-medium text-3xl underline underline-offset-8 ml-4 decoration-purple-300">{'Formação'}</text>

               <div className="flex flex-col gap-4">
                  <div className="flex flex-col ml-8">
                     <text className="font-medium text-xl ">{'Ensino Médio - Escola do Sesi - 2019/2021'}</text>
                     <text className="text-base text-gray-400">Atividades e grupos: Iniciação Cientifica</text>
                  </div>
                  <text className="text-lg">Ensino médio Técnico em Redes. Durante os 3 anos de obtive conhecimentos em formatação e manutenção de computadores, pacote Office, cabeamento de redes e projetos científicos.</text>
               </div>

               <div className="h-2 rounded-full ml-20 bg-purple-400/60 w-2/5 shadow-box"/>

               <div className="flex flex-col gap-4">
                  <text className="font-medium text-xl ml-8">{'Rocketseat - Plataforma de Estudos Online - 2022'}</text>
                  <text className="text-lg">O Ignite é um programa de aceleração para devs, focado em preparar profissionais completos(as) para o mercado, treinando skills técnicas e comportamentais de forma intensiva e prática. O Ignite é dividido em trilhas de conhecimento não-dependentes onde nos aprofundamos em uma tecnologia específica</text>
               </div>

               <div className="flex flex-col pb-8 gap-6 text-lg ">
                  <text className="text-cyan-300 font-medium text-xl underline underline-offset-8 ml-4 m-4 decoration-cyan-300">{'Ceritficados'}</text>
                  
                  <div>

                     <text>{'- Desenvolvimento de Aplicativos - Danki Code - 2021/2022'}</text>
                     
                     <div className="text-sm font-normal flex text-gray-400/60 pl-4 max-w-[600px]">
                        Código do certificado: <span className="font-medium ml-1"> d871edbe-3447-4105-8b0f-7b500c494e8a</span> 
                        <a href="https://cursos.dankicode.com/validate-certificate" rel='noreferrer' target={'_blank'} className='ml-auto hover:text-cyan-300 duration-300 underline underline-offset-4'>Validar Certificado</a>
                     </div>

                  </div>

                  <div>

                     <text>{'- Trilha Conectar - Bootcamp Discover Rocketseat - 2022 '}</text>
                     
                     <div className="text-sm font-normal flex text-gray-400/60 pl-4 max-w-[600px]">
                        Código do certificado: <span className="font-medium ml-1">15a754b8-a4f6-47b2-9c00-f494a9ee782b</span> 
                        <a href="app.rocketseat.com.br/discover/certifcates" target={'_blank'} className='ml-auto hover:text-cyan-300 duration-300 underline underline-offset-4'>Validar Certificado</a>
                     </div>

                  </div>

                  <div>

                     <text>{'- Trilha Especializar - Bootcamp Discover Rocketseat - 2022 '}</text>
                     
                     <div className="text-sm font-normal flex text-gray-400/60 pl-4 max-w-[600px]">
                        Código do certificado: <span className="font-medium ml-1"> e45a45e4-bc72-4e9f-8cfc-2f85c880c41a</span> 
                        <a href="app.rocketseat.com.br/discover/certifcates" target={'_blank'} className='ml-auto hover:text-cyan-300 duration-300 underline underline-offset-4'>Validar Certificado</a>
                     </div>

                  </div>

                  <div >

                     <text>{'- Trilha Fundamentar - Bootcamp Discover Rocketseat - 2022 '}</text>
                     
                     <div className="text-sm font-normal flex text-gray-400/60 pl-4 max-w-[600px] ">
                        Código do certificado: <span className="font-medium ml-1"> 4a131ece-56a1-40e1-9dbb-724f7254766e</span> 
                        <a href="app.rocketseat.com.br/discover/certifcates" target={'_blank'} className='ml-auto hover:text-cyan-300 duration-300 underline underline-offset-4'>Validar Certificado</a>
                     </div>

                  </div>
                  
                  <div>

                     <text>{'- Gestão Ágil com Scrum - Udemy - 2023 '}</text>
                     
                     <div className="text-sm font-normal flex text-gray-400/60 pl-4 max-w-[600px]">
                        Código do certificado: <span className="font-medium ml-1"> UC-fbfc72af-02bd-49f0-97bb-26e8c23966e1</span> 
                        <a href="https://www.udemy.com/certificate/UC-fbfc72af-02bd-49f0-97bb-26e8c23966e1/" target={'_blank'} className='ml-auto hover:text-cyan-300 duration-300 underline underline-offset-4'>Validar Certificado</a>
                     </div>

                  </div>

               </div>

            </div>

         </div>

      </div>
   )
}