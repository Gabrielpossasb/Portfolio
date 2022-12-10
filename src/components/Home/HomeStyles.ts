import styled from "styled-components"
import { ThemeSelectProps } from "../../App"
import backgroundImg from "../../assets/Bitmap.svg"

export const Container = styled.div<ThemeSelectProps>`
   display: flex;
   flex-direction: column;
   position: relative;
   
   .dotted {
      position: relative;
      text-align: center;
      overflow: hidden;
      top: 9rem;
      right: 6rem;
      font: 21px;
      text-shadow: 1px 1px 0 #fff, 2px 2px 0 #adacac;
      text-transform: uppercase;
      width:160px;
      height: 80%;
      z-index: -6;

      padding: 5rem 1.6875em;
      background-image: -webkit-repeating-radial-gradient(center center, ${(props) => props.theme.tex}, #1a1818, 5px, transparent 1px, transparent 100%);
      background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
      background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
      background-image: repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 5px, transparent 1px, transparent 100%);
      -webkit-background-size: 4px 4px;
      -moz-background-size: 4px 4px;
      background-size: 40px 40px;
   }
`
 

export const ContainerHome = styled.div <ThemeSelectProps>`
   display: flex;
   max-width: 1200px;
   max-height: 580px;
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
      width: 850px;
      height: 400px;
      background-image: url(${backgroundImg});
      border-radius: 25px; 
      margin: 3rem 3rem 0 3rem;
      position: relative;
      padding: 2rem;
      z-index: 20;
      background-color: gray;
      justify-content: center;
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

