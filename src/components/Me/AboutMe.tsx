export default function AboutMe() {
   return (
      <div className="flex flex-col gap-14 w-full mt-10 items-end" id='me'>
         <div className={'flex flex-col gap-6 items-center self-center text-[#f3f3f3f3] font-semibold text-5xl [text-shadow:2px_4px_4px_#161515]'}>
            SOBRE MIM
            <button className={`rounded-full w-20 h-4 bg-gradient-to-b from-purple-500 to-purple-800 shadow-box`}/>
         </div>

         <div className="flex relative right-4 w-[75%] h-[400px] rounded-bl-[60px] rounded-tl-[60px] 
            bg-gradient-to-b from-purple-600 to-cyan-600 shadow-boxLg
         ">
            <div className="ml-2 mr-6 rounded-bl-[60px] w-full rounded-tl-[60px] bg-gray-700 p-10 text-[19px] text-gray-100/90 font-base
               [text-shadow:1px_1px_3px_#111111]
            ">
               <text className="leading-8">
                   🙋‍♂️ Olá me chamo <strong>Gabriel Abraão Possas Borges</strong> sou de Campo Grande - MS, tenho 18 anos, 
                  concluí o ensino médio na <strong>Escola do Sesi</strong> cursando o ensino médio técnico, tendo como curso o de 
                  Técnico em Redes. Desde o primeiro ano me interesseo em progamação e iniciei meu estudos em 2019 na platafortma da 
                  <strong className="text-purple-400"> Danki Code</strong>, na qual adquiri a certificação do curso de <strong> Desenvolvimento de Aplicativos</strong>
                  . Comecei a ter interesse pelo front-end então conheci a plataforma <strong className="text-purple-400"> Rocketseat</strong>, onde concluí as 3 trilhas do bootcamp <strong>Discover</strong>,
                  e posteriormente adquiri o curso <strong> Ignite</strong> onde pude me especializar principalmente em <strong className="text-cyan-600">React.js, TypeScript e Next.js</strong>,
                  dentre muitas outras bibliocas e tecnologias. Agora após muitos projetos desenvolvidos estou a procura de uma oportunidade de trabalho para colocar meus conhecimentos em prática !!
               </text>
            </div>
         </div>
      </div>
   )
}