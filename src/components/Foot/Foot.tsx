import { Container } from "./FootStyles";

import logo from '../../assets/MyLogo.png' 

import { LinkedinLogo } from "phosphor-react";
import { useContext } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";
import { DiGithubBadge } from "react-icons/di";

import dot from '../../assets/Dots.svg'

export function Foot() {
   const { myTheme } = useContext(MyThemeContext)

   return(
      <Container theme={myTheme}>
         <div className="meusDados" id='contact'>
            
            <img src={logo} alt="logo" className="w-28"/>

            
            <h1 className="font-semibold text-2xl text-cyan-50">Gabriel Possas</h1>
            <h2 className="font-semibold text-lg text-cyan-500">Dev. Front-End</h2>
            

            <div className="icons">
               <a href="https://www.linkedin.com/in/gabriel-borges-p/" target='_blank'><LinkedinLogo size={32} weight="fill" color="#0077B5" /></a>
               <a href="https://github.com/Gabrielpossasb" target='_blank' style={{background:'#fff', borderRadius: '100%', height:'34px'}}><DiGithubBadge size={34} color="#21262d" /></a>
            </div>

           
            <h5>Meu whatsapp:</h5>
            <h5>(67) 9 9935-9933</h5>
            <div className={`rounded-full w-8 h-2 bg-gradient-to-b from-cyan-500 to-cyan-800 my-4 shadow-box`}/>
            <h5>Meu Gmail:</h5>
            <h5>gabrielpossasb@gmail</h5>
           
         </div>

         <div className="contato">
            
            <div className="text-4xl font-semibold text-cyan-50">
               <h1 className="">Contact</h1>
               <h1 className="text-cyan-500">Me</h1>
            </div>

            <div className="mensage">
               <input
                  placeholder="Qual seu nome?"
               />

               <input
                  placeholder="Qual seu email?"
               />

               <input
                  type="text"
                  placeholder="Deixe sua mensagem!"
                  className="Inp"
               />               

               <button className="bg-cyan-500" type="button">
                  ENVIAR
               </button>
               
            </div>
         </div>
               <img src={dot} alt='' className="absolute bottom-10 -right-20 z-10"/>
         
      </Container>
   );
}