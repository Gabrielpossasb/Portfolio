import { Chats, Folder, GithubLogo, House, LinkedinLogo, RocketLaunch, UserCircle } from "phosphor-react";
import { Container } from "./styles";

import homeImg from "../../assets/Bitmap.svg"


export function Home() {
   return(
      <Container>
         <div className="sideBar">
            <button
               type="button"
            >
               <House size={26} />
            </button>

            <button
               type="button"
            >
               <RocketLaunch size={26} />
            </button>

            <button
               type="button"
            >
               <Folder size={26} />
            </button>

            <button
               type="button"
            >
               <UserCircle size={26} weight="fill"/>
            </button>

            <button
               type="button"
            >
               <Chats size={26} />
            </button>
         </div>

         <div className="welcome">           
            <div className="conteudo">
               <h2>Ola, Bem vindo ao meu protfólio</h2>
               <h1>Me chamo Gabriel Possas, Dev. Front-End</h1>

               <h4>Tenho 18 anos, estou extremamente empolgado em aprender </h4>

               <div className="icons">
                  <a href="https://www.linkedin.com/in/gabriel-borges-p/" target='_blank'><LinkedinLogo size={32} weight="fill" color="#0077B5" /></a>
                  <a href="https://github.com/Gabrielpossasb" target='_blank'><GithubLogo size={32} weight="fill" color="#21262d" /></a>
               </div>
            </div>  
         </div>
      </Container>
   );
}