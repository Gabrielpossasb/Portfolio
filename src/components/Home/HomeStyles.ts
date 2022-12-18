import styled from "styled-components"
import { ThemeSelectProps } from "../../App"
import backgroundImg from "../../assets/Bitmap.svg"

export const Container = styled.div<ThemeSelectProps>`
   width: 100%;
`
 

export const ContainerHome = styled.div <ThemeSelectProps>`
   display: flex;
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;

   .welcome {
      background-size: cover;
      width: 100%;
      max-width: 1000px;
      background-image: url(${backgroundImg});
      border-radius: 25px; 
      margin: 3rem 3rem 0 3rem;
      position: relative;
      z-index: 20;
      background-color: #22222200;
      box-shadow: inset 2px 2px 15px 8px #1d0c29ce;

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
   }

   

`

