import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function AboutMe() {
   const [ openStudy, setOpenStudy ] = useState(false)

   return (
      <div className="flex flex-col gap-14 w-full mt-10 items-end" id='me'>
         <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-5xl [text-shadow:2px_4px_4px_#161515]'}>
            SOBRE MIM
            <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-purple-500 to-purple-800 shadow-box`}/>
         </div>

         <div className="flex relative right-2 cel:rounded-[40px] rounded-bl-[60px] rounded-tl-[60px] 
            bg-gradient-to-b from-purple-600 to-cyan-600 shadow-boxLg
         ">
            <div className="ml-1 cel:mr-1 mr-4 cel:rounded-[40px] rounded-bl-[60px] cel:text-center w-full rounded-tl-[60px] bg-gray-700 p-10 px-14 pb-20 cel:px-0 text-[19px] text-gray-100/90 font-base
               [text-shadow:1px_1px_3px_#111111] overflow-hidden relative
            ">
               <text className="leading-6 tracking-wide">
                   🙋‍♂️ Olá me chamo <strong>Gabriel Abraão Possas Borges</strong> sou de Campo Grande - MS, tenho 18 anos, 
                  concluí o ensino médio na <strong>Escola do Sesi</strong> cursando o ensino médio técnico, tendo como curso o de 
                  Técnico em Redes. 
                  <br/>
                  <br/>
                  Desde o primeiro ano me interessei em programação iniciando meus estudos em 2019 na platafortma da 
                  <strong className="text-purple-400"> Danki Code</strong>, na qual adquiri a certificação do curso de <strong> Desenvolvimento de Aplicativos</strong>
                  . 
                  <br/>
                  <br/>
                  Comecei a ter interesse pelo front-end então conheci a plataforma <strong className="text-purple-400"> Rocketseat</strong>, onde concluí as 3 trilhas do bootcamp <strong>Discover</strong>,
                  e posteriormente adquiri o curso <strong> Ignite</strong> onde pude me especializar principalmente em <strong className="text-cyan-300">React.js, TypeScript e Next.js</strong>,
                  dentre muitas outras bibliocas e tecnologias. 
                  <br/>
                  <br/>
                  Agora após muitos projetos desenvolvidos estou a procura de uma oportunidade de trabalho para colocar meus conhecimentos em prática !!
               </text>

               <div className={`flex flex-col bg-gray-700 sm:rounded-2xl rounded-[40px] p-4 h-full absolute items-center sm:-ml-1 w-full sm:w-[92%] z-20 duration-700 transition-all 
                  ${openStudy?'top-8 cel:top-4 shadow-insetSoft':'top-[84%] cel:top-[92%]'} 
               `}>
                  <button onClick={() => setOpenStudy(!openStudy)} className={`flex font-medium gap-4 items-center p-2 px-6 rounded-full transition-all duration-300  hover:bg-gray-900/20 
                     ${openStudy?'text-purple-400 decoration-purple-400 text-2xl duration-1000':'text-cyan-300 text-base duration-1000'} [text-shadow:1px_1px_3px_#311749] underline underline-offset-8
                  `}>
                     Formação Acadêmica <FiChevronDown size={36} className={`duration-500 transition-all ${openStudy?'text-purple-400':'rotate-180'} `}/>
                  </button>

                  <div className={'w-full cel:px-4 text-left px-16 overflow-y-scroll m-6 font-medium scrollbar-track-gray-800 rounded-lg scrollbar-thin scrollbar-thumb-gray-600'}>
                     <div className={'flex flex-col gap-4 '}>

                        <text>{'- Ensino Médio - Escola do Sesi - 2019/2021'}</text>
                        <text>{'- Rocketseat - Plataforma de Estudos Online - 2022'}</text>

                        <div className="flex flex-col pb-8 gap-6 text-lg ">
                           <text className="text-cyan-300 font-medium text-2xl underline underline-offset-8 ml-8 m-4 decoration-cyan-300">{'Ceritficados'}</text>
                           
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
            </div>
         </div>
      </div>
   )
}