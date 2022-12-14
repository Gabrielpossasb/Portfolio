import styled from "styled-components";
import { ThemeSelectProps } from "../../App";

export const Container = styled.div  <ThemeSelectProps>`

   .icons {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
      align-items: center;
   }

   .meusDados {
      display: flex;
      height: 100%;
      padding: 2rem 6rem;
      border-radius: 1rem;
      z-index: 20;
      background: #303030;
      color: #fff;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color:#6d6d6d;
      box-shadow: inset 2px 4px 10px 4px #181717;

      .s {
         color: ${(props)=>props.theme.textFundo};
      }
   }

   .contato {
      background: var(--background-light);
      padding: 2rem 2rem 6rem 2rem;
      border-radius: 2rem;
      z-index: 20;
      flex-direction: row;
      display: flex;
      gap: 5rem;
      max-width: 600px;
      box-shadow: 4px 6px 8px 4px #18191a9c;
      
   }

   .mensage {
      display: inline-block;
      
   }

   input {
      background: var(--background-light);
      border: 0;
      width: 90%;
      border-bottom: 1px solid var(--text-grey);
      padding: 1rem 8px 10px 1rem;
      margin-bottom: 2rem;
      color: #fff;
      font-size: 14px;

      &::placeholder {
         color: var(--text-grey);
         font-size: 12px;
         outline: none;
      }     
      
      &:focus{
         border-color: ${(props)=>props.theme.textFundo};
         outline: 0;
      }

      .Inp {
      }
   }
   

   button {
      border: 0;
      border-radius: 1rem;
      padding: 0.5rem 5rem;
      color: #fff;
      width: 90%;
      margin-top: 1rem;
      transition: filter 0.2s;
      
      &:hover {
         filter: brightness(0.9);
      }
   }

   
   .dottedfoot {
      position: relative;
      text-align: center;
      bottom: 2px;
      font: 21px;
      text-shadow: 1px 1px 0 #fff, 2px 2px 0 #999;
      text-transform: uppercase;
      width:480px;
      height:350px;
      z-index: -2;

      padding: 5rem 1.6875em;
      background-image: -webkit-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 3px, transparent 1px, transparent 100%);
      background-image: -moz-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
      background-image: -ms-repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 1px, transparent 1px, transparent 100%);
      background-image: repeating-radial-gradient(center center, rgba(0,0,0,.2), rgba(0,0,0,.2) 5px, transparent 1px, transparent 100%);
      -webkit-background-size: 3px 3px;
      -moz-background-size: 3px 3px;
      background-size: 40px 40px;
   }
`;