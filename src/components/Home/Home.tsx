import { LinkedinLogo } from "phosphor-react";
import { Container, ContainerHome } from "./HomeStyles";
import { Flex, Text } from "@chakra-ui/react"

import { DiGithubBadge } from "react-icons/di";
import { useMediaQuery } from "react-responsive";

import logo from '../../assets/MyLogo.png' 
import dot from '../../assets/Dots.svg'
import backgroundImg from "../../assets/Bitmap.svg"


export function Home() {

   const isMobile = useMediaQuery({ query: '(max-width: 640px)'})

   return(
      <Container id='home'>
         
         <div className="relative mt-14 mx-10 sm:ml-10 ">

            <div className=" relative max-w-[1000px] rounded-3xl shadow-boxXl">
               
               <div
                  className="absolute top-0 left-0 bottom-0 rght-0 animate-homePulse1 rounded-3xl bg-gradient-to-b from-purple-300/60 via-purple-500/40 to-cyan-600/40 blur-sm"
               />
               <div
                  className="absolute top-0 left-0 bottom-0 rght-0 animate-homePulse2 rounded-3xl bg-gray-700/60 blur-sm"
               />
               
               <div className="w-full relative max-w-[1000px] max-h-[500px] z-10 rounded-3xl flex items-center justify-center overflow-hidden" >   
                  
                  <div className={`bg-cover left-0 bottom-0 top-0 w-full h-full  max-w-[1000px] absolute rounded-3xl bg-backgroundHome`}>
                     
                  </div>
                  
                  { !isMobile && <img src={logo} alt='' className="w-32 opacity-90 absolute right-10 top-10 z-10"/>}

                  <div className="p-10 py-16 flex flex-col w-full h-full gap-4 z-20 rounded-3xl text-white bg-gradient-to-b from-purple-600/40 via-purple-500/40 to-cyan-600/40 ">

                     <Text fontSize={'xl'} fontWeight={'medium'}>Olá, Bem vindo ao meu portfólio</Text>
                     <Text fontSize={'4xl'} fontWeight={'semibold'}>Gabriel Possas, Dev. Front-End</Text>

                     <Text fontSize={'xl'} fontWeight={'medium'}>Apaixonado por programar!! Sempre em evolução!!</Text>

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
               
            </div>
            
         </div>
      </Container>
   );
}