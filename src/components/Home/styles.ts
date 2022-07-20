import styled from "styled-components"
import { ThemeSelectProps } from "../../App"
import backgroundImg from "../../assets/Bitmap.svg"
 


export const Container = styled.div <ThemeSelectProps>`
   display: flex;
   max-width: 1200px;
   max-height: 580px;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   margin-top: 2rem;

   .sideBar {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 2rem;
      padding: 2rem 0.5rem;
      border-radius: 15px;
      background: ${(props) => props.theme.navSide};

      button {
         background: ${(props) => props.theme.navSide};
         border: 0;
         border-radius: 50px;
         color: var(--pink-light);
         padding: 0.5rem;

         &:hover {
            filter: brightness(0.8);
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
      padding: 2rem;
      background-color: gray;
      justify-content: center;

      

      .conteudo {
         padding: 2rem;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         z-index: 3;
         background-image: linear-gradient(to bottom right, ${(props) => props.theme.navSide}, ${(props) => props.theme.light});
         border-radius: 25px;
         height: 90%;
         color: #fff;

         h2 {
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

   div.dotted {
      position: absolute;
      text-align: center;
      margin-top: -12rem;
      margin-left: 48rem;
      font: 21px;
      text-shadow: 1px 1px 0 #fff, 2px 2px 0 #999;
      text-transform: uppercase;
      width:160px;
      height:1525px;
      z-index: -6;
   }
   
   .dotted {
      padding: 5rem 1.6875em;
      background-image: -webkit-repeating-radial-gradient(center center, var(--pink-light), var(--pink-light) 3px, transparent 1px, transparent 100%);
      background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
      background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
      background-image: repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 5px, transparent 1px, transparent 100%);
      -webkit-background-size: 3px 3px;
      -moz-background-size: 3px 3px;
      background-size: 40px 40px;
   }

`

