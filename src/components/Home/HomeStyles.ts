import styled from "styled-components"
import { ThemeSelectProps } from "../../App"
import backgroundImg from "../../assets/Bitmap.svg"

export const Container = styled.div<ThemeSelectProps>`
   width: 100%;
`
 

export const ContainerHome = styled.div <ThemeSelectProps>`
   display: flex;
   
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;

   

      .conteudo {
         padding: 4rem;
         display: flex;
         flex-direction: column;
         gap: 1rem;
         z-index: 20;
         background-image: linear-gradient(to bottom right, #5628adaf, #268fa662);
         border-radius: 25px;
         height: 90%;
         color: #fff;

         h1 {
            font-weight: 500;
         }
         h4 {
            font-weight: 400;
         }
         a {
            margin-right: 1rem;
         }
      
   }

   

`

