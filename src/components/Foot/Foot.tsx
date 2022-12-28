import { Container } from "./FootStyles";

import logo from '../../assets/MyLogo.png' 

import { LinkedinLogo } from "phosphor-react";
import { DiGithubBadge } from "react-icons/di";

import dot from '../../assets/Dots.svg'

export function Foot() {

   return(
      <Container>
         <div className="flex relative justify-center my-20 mb-40 w-full sm:w-[600px]">
            <div className="meusDados" id='contact'>
               
               <img src={logo} alt="logo" className="w-28"/>

               <h1 className="font-semibold text-2xl text-cyan-50">Gabriel Possas</h1>
               <h2 className="font-semibold text-lg text-cyan-500">Dev. Front-End</h2>
               
               <div className="icons">
                  <a href="https://www.linkedin.com/in/gabriel-borges-p/" target='_blank' rel='noreferrer' className="rounded-full hover:brightness-50 duration-300"><LinkedinLogo size={38} weight="fill" color="#0077B5" /></a>
                  <a href="https://github.com/Gabrielpossasb" target='_blank' rel='noreferrer' className="bg-gray-200/90 rounded-full hover:brightness-50 duration-300"><DiGithubBadge size={34} color="#21262d" /></a>
               </div>

               <h5>Meu whatsapp:</h5>
               <h5>(67) 9 9935-9933</h5>
               <div className={`rounded-full w-8 h-2 bg-gradient-to-b from-cyan-500 to-cyan-800 my-4 shadow-box`}/>
               <h5>Meu Gmail:</h5>
               <h5>gabrielpossasb@gmail</h5>
            
            </div>

            <img src={dot} alt='' className="absolute -bottom-10 cel:-right-8 z-10"/>
         </div>
         
      </Container>
   );
}