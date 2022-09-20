import { Chats, Folder, GithubLogo, House, LinkedinLogo, RocketLaunch, UserCircle } from "phosphor-react";
import { Container, ContainerHome } from "./styles";

import { Projects } from "../../Projects";
import { useState, createContext, useContext } from "react";
import { Skills } from "../../Skills";
import { MyThemeContext } from "../../../hooks/useThemeApi";
import { NavigationContext } from "../../../hooks/useNavigation";


export function Home() {
   const { myTheme, selectMyTheme } = useContext(MyThemeContext)
   const { navigation, createNavigation } = useContext(NavigationContext)

   function handleSetTheme(id: string, InfoSelect: string) {
      createNavigation( InfoSelect )

      selectMyTheme( id )
   }

   return(
      <Container theme={myTheme}>
         <div className="dotted"/>
         <ContainerHome theme={myTheme}>
            <div className="sideBar">
               <button
                  type="button"
                  onClick={() => handleSetTheme('cian', 'house')}
               >
                  <House size={30} weight="fill"/>
               </button>

               <button
                  type="button"
                  onClick={()=>handleSetTheme('red', 'skills')}
               >
                  <RocketLaunch size={30} weight="fill"/>
               </button>

               <button
                  type="button"
                  onClick={()=>handleSetTheme('purple', 'projects')}
               >
                  <Folder size={30} weight="fill"/>
               </button>

               <button
                  type="button"
                  onClick={()=>createNavigation('sobre')}
               >
                  <UserCircle size={30} weight="fill"/>
               </button>

               <button
                  type="button"
                  onClick={()=>handleSetTheme('yellow', 'contato')}
               >
                  <Chats size={30} weight="fill"/>
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
               </div>  
               
               
            </div>
         </ContainerHome>
         {
            (navigation==='projects')?<Projects/>:<div/> 
         }
         {
            (navigation==='home')?<div/>:<div/> 
         }
         {
            (navigation==='skills')?<Skills />:<div/> 
         }
     
      </Container>
   );
}