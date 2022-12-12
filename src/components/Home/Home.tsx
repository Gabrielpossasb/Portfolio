import { Chats, Folder, House, LinkedinLogo, RocketLaunch, UserCircle } from "phosphor-react";
import { Container, ContainerHome } from "./HomeStyles";
import { Flex, Text } from "@chakra-ui/react"

import { useContext } from "react";
import { MyThemeContext } from "../../hooks/useThemeApi";
import { NavigationContext } from "../../hooks/useNavigation";
import { DiGithubBadge } from "react-icons/di";
import { useMediaQuery } from "react-responsive";

import logo from '../../assets/MyLogo.png' 
import dot from '../../assets/Dots.svg'

import backgroundImg from "../../assets/Bitmap.svg"


export function Home() {
   const { myTheme, selectMyTheme } = useContext(MyThemeContext)
   const { navigation, createNavigation } = useContext(NavigationContext)

   const isMobile = useMediaQuery({ query: '(max-width: 640px)'})

   function handleSetTheme(id: string, InfoSelect: string) {
      createNavigation( InfoSelect )

      selectMyTheme( id )
   }

   return(
      <Container id='home'>
         <ContainerHome theme={myTheme}>
            

            <div className="welcome" >           
               { !isMobile && <img src={logo} alt='' className="w-32 opacity-90 absolute right-10 top-10 z-10"/>}
 
               <div className="p-10 py-16 flex flex-col gap-4 z-20 rounded-3xl text-purple-100 bg-gradient-to-b from-purple-600/30 via-purple-500/30 to-cyan-600/30 shadow-boxLg">
                  <Text fontSize={'xl'} fontWeight={'medium'}>Ola, Bem vindo ao meu protfólio</Text>
                  <Text fontSize={'4xl'} fontWeight={'semibold'}>Gabriel Possas, Dev. Front-End</Text>

                  <Text fontSize={'xl'} fontWeight={'medium'}>Tenho 18 anos, sou de Campo Grande - MS. <br/>Apaixonado por progamar!! Sempre em evolução!!</Text>

                  <Flex alignItems={'center'} gap={4}>
                     <a className="p-2 hover:bg-purple-300/40 rounded-full duration-300" href="https://www.linkedin.com/in/gabriel-borges-p/" rel='noreferrer' target='_blank'>
                        <LinkedinLogo size={40} weight="fill" color="#ffffff" />
                     </a>
                     <a className="p-1 hover:bg-purple-300/40 rounded-full duration-300" href="https://github.com/Gabrielpossasb"  rel='noreferrer' target='_blank'>
                        <DiGithubBadge size={48} color="#ffffff" />
                     </a>
                  </Flex>
               </div>  
               
            </div>
         </ContainerHome>
            <img src={dot} alt='' className="absolute -right-44  sm:right-10 -bottom-14 z-10"/>
      </Container>
   );
}