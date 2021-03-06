import { Container } from "./style";

import logo from "../../assets/logo.svg"
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { ThemeSelectProps } from "../../App";


export function Foot({theme}: ThemeSelectProps) {
   return(
      <Container theme={theme}>
         <div className="meusDados">
            
            <img src={logo} alt="logo"/>

            
            <h1>Gabriel Possas</h1>
            <h2>Dev. Front-End</h2>
            

            <div className="icons">
               <a href="https://www.linkedin.com/in/gabriel-borges-p/" target='_blank'><LinkedinLogo size={32} weight="fill" color="#0077B5" /></a>
               <a href="https://github.com/Gabrielpossasb" target='_blank'><GithubLogo size={32} weight="fill" color="#21262d" /></a>
            </div>

           
            <h5>Meu contato pessoal</h5>
            <h5>(67) 9 9935-9933</h5>
            <h1 className="s">-</h1>
            <h5>Meu Gmail</h5>
            <h5>gabrielpossasb@gmail</h5>
           
         </div>

         

         <div className="contato">
            <div>
               <h1>Contact</h1>
               <h1 className="Me">Me</h1>
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

               <button type="button">
                  ENVIAR
               </button>

               <div className="dotted">

               </div>
            </div>
         </div>
      </Container>
   );
}