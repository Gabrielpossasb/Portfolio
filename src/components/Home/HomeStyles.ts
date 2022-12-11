import styled from "styled-components"
import { ThemeSelectProps } from "../../App"
import backgroundImg from "../../assets/Bitmap.svg"

export const Container = styled.div<ThemeSelectProps>`
   display: flex;
   flex-direction: column;
   position: relative;
   width: 100%;
`
 

export const ContainerHome = styled.div <ThemeSelectProps>`
   display: flex;
   width: 100%;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;

   
   .sideBar {
      display: flex;
      position: fixed;
      left: 5%;
      z-index: 20;
      top: 5.4rem;
      flex-direction: column;
      gap: 1.5rem;
      padding: 1rem 0.5rem;
      border-radius: 15px;
      background-image: linear-gradient(to bottom, #4514a0, #5c279c, #197fa1);
      box-shadow: 8px 10px 8px #242226;

      transition: all 0.6s;

      &:hover {
         box-shadow: 4px 6px 6px #b48ad825;
      }

      a {
         background: transparent;
         padding: 6px 8px;
         border: 0;
         border-radius: 50px;
         color: var(--pink-light);
         transition: background 0.5s;

         &:hover {
            background: #c29add85;
         }

      }
   }

   .welcome {
      background-size: cover;
      width: 100%;
      background-image: url(${backgroundImg});
      border-radius: 25px; 
      margin: 3rem 3rem 0 3rem;
      position: relative;
      padding: 2rem;
      z-index: 20;
      background-color: #22222200;
      box-shadow: 5px 5px 18px 6px #222222;

      .conteudo {
         padding: 2rem;
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

