import { Container } from "./style";

import logo from "../../assets/logo.svg"
import { GithubLogo, LinkedinLogo } from "phosphor-react";
import { useContext } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";
import { DiGithubBadge } from "react-icons/di";


export function Foot() {
   const { myTheme } = useContext(MyThemeContext)

   return(
      <Container theme={myTheme}>
         <div className="meusDados">
            
            <img src={logo} alt="logo"/>

            
            <h1>Gabriel Possas</h1>
            <h2>Dev. Front-End</h2>
            

            <div className="icons">
               <a href="https://www.linkedin.com/in/gabriel-borges-p/" target='_blank'><LinkedinLogo size={32} weight="fill" color="#0077B5" /></a>
               <a href="https://github.com/Gabrielpossasb" target='_blank' style={{background:'#fff', borderRadius: '100%', height:'34px'}}><DiGithubBadge size={34} color="#21262d" /></a>
            </div>

           
            <h5>Meu contato pessoal:</h5>
            <h5>(67) 9 9935-9933</h5>
            <h1 className="s">-</h1>
            <h5>Meu Gmail:</h5>
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

               <div className="dottedfoot">

               </div>
            </div>
         </div>
      </Container>
   );
}