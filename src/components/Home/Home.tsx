import { Chats, Folder, House, LinkedinLogo, RocketLaunch, UserCircle } from "phosphor-react";
import { Container, ContainerHome } from "./HomeStyles";
import { Flex, Text } from "@chakra-ui/react"

import { useContext } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";
import { NavigationContext } from "../../hooks/useNavigation";
import { DiGithubBadge } from "react-icons/di";

import logo from '../../assets/MyLogo.png' 
import dot from '../../assets/Dots.svg'

export function Home() {
   const { myTheme, selectMyTheme } = useContext(MyThemeContext)
   const { navigation, createNavigation } = useContext(NavigationContext)

   function handleSetTheme(id: string, InfoSelect: string) {
      createNavigation( InfoSelect )

      selectMyTheme( id )
   }

   return(
      <Container id='home'>
         <ContainerHome theme={myTheme}>
            <div className="sideBar">
               <a href="#home">
                  <House size={30} weight="fill"/>
               </a>

               <a href="#skills">
                  <RocketLaunch size={30} weight="fill"/>
               </a>

               <a href="#projects">
                  <Folder size={30} weight="fill"/>
               </a>

               <a href="#me">
                  <UserCircle size={30} weight="fill"/>
               </a>

               <a href="#contact">
                  <Chats size={30} weight="fill"/>
               </a>
            </div>

            <div className="welcome" >           
               <img src={logo} alt='' className="w-24 absolute right-10 top-10 z-10"/>
 
               <div className="conteudo">
                  <Text fontSize={'xl'} fontWeight={'medium'}>Ola, Bem vindo ao meu protfólio</Text>
                  <Text fontSize={'3xl'} fontWeight={'semibold'}>Eu sou Gabriel Possas, Dev. Front-End</Text>

                  <Text fontSize={'lg'} fontWeight={'medium'}>Tenho 18 anos, sou de Campo Grande - MS. <br/>Apaixonado por progamar!! E sempre em evolução!!</Text>

                  <Flex alignItems={'center'}>
                     <a href="https://www.linkedin.com/in/gabriel-borges-p/" rel='noreferrer' target='_blank'><LinkedinLogo size={32} weight="fill" color="#ffffff" /></a>
                     <a href="https://github.com/Gabrielpossasb"  rel='noreferrer' target='_blank'><DiGithubBadge size={36} color="#ffffff" /></a>
                  </Flex>
               </div>  
               
            </div>
         </ContainerHome>
            <img src={dot} alt='' className="absolute -right-20 -bottom-14 z-10"/>
      </Container>
   );
}