import { Chats, Folder, GithubLogo, House, LinkedinLogo, RocketLaunch, UserCircle } from "phosphor-react";
import { Container } from "./styles";

import homeImg from "../../assets/Bitmap.svg"
import { Projects } from "../Projects";
import { useState } from "react";
import { Skills } from "../Skills";


export function Home() {
   const [sumary, setSumary] = useState('');

   return(
      <div>
      <Container>
         <div className="sideBar">
            <button
               type="button"
               onClick={()=>setSumary('house')}
            >
               <House size={26} weight="fill"/>
            </button>

            <button
               type="button"
               onClick={()=>setSumary('skills')}
            >
               <RocketLaunch size={26} weight="fill"/>
            </button>

            <button
               type="button"
               onClick={()=>setSumary('projects')}
            >
               <Folder size={26} weight="fill"/>
            </button>

            <button
               type="button"
               onClick={()=>setSumary('sobre')}
            >
               <UserCircle size={26} weight="fill"/>
            </button>

            <button
               type="button"
               onClick={()=>setSumary('contato')}
            >
               <Chats size={26} weight="fill"/>
            </button>
         </div>

         <div className="welcome">           
            <div className="conteudo">
               <h2>Ola, Bem vindo ao meu protfólio</h2>
               <h1>Eu sou Gabriel Possas, Dev. Front-End</h1>

               <h4>Tenho 18 anos, sou de Campo Grande-MS, estudo progamação há 1 ano e estou extremamente empolgado em desevenvolver cada vez mais! </h4>

               <div className="icons">
                  <a href="https://www.linkedin.com/in/gabriel-borges-p/" target='_blank'><LinkedinLogo size={32} weight="fill" color="#ffffff" /></a>
                  <a href="https://github.com/Gabrielpossasb" target='_blank'><GithubLogo size={32} weight="fill" color="#ffffff" /></a>
               </div>
            </div>  <div className="dotted">
            </div>
         </div>
      </Container>
     {
      (sumary==='projects')?<Projects/>:<div/> 
     }
     {
      (sumary==='home')?<div/>:<div/> 
     }
     {
      (sumary==='skills')?<Skills/>:<div/> 
     }
     {
      (sumary==='sobre')?<Projects/>:<div/> 
     }
      
      </div>
   );
}