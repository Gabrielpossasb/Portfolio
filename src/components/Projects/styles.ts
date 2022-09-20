import styled from "styled-components";
import { ThemeSelectProps } from "../../App";


export const Container = styled.div <ThemeSelectProps>`
   margin: 0;
   border-bottom: 2px solid ${(props) => props.theme.button};


   .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      

      h1 {
         /*
         border-width: 3px;
         border-style: solid;
         border-image: linear-gradient(to right,${(props) => props.theme.navSide}, ${(props) => props.theme.light}) 1;
         border-radius: 2rem;
         */
         background: 
            linear-gradient(var(--background), var(--background)) padding-box,
            linear-gradient(to right, ${(props) => props.theme.navSide}, ${(props) => props.theme.light}) border-box;
         border-radius: 2rem;
         border: 4px solid transparent;


         padding: 0.5rem 10rem;
         font-size: 3rem;
      }
   }

   .line, .line- {
      width: 2px;
      height: 10rem;
      border: 3px solid ${(props) => props.theme.line};
      margin-left: 2rem;
   }
   

   .projetosArea {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-bottom: 6px solid ${(props) => props.theme.line};
      border-top: 6px solid ${(props) => props.theme.line};
      border-radius: 2rem;
      gap: 2rem;
      background: var(--background);
      
   }

   .projeto {
      background-image: linear-gradient(to bottom right, #702783, #17021d);
      opacity: 0.6;
      border-radius: 2rem;
      padding: 2rem 1rem;
      margin: 2rem 3rem 2rem 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: opacity 1s;

      &:hover {
         opacity: 1;
         
      }

      img {
         margin-top: 2rem;
         width: 400px;
         height: 200px;
         border-radius: 10px;
         background-size: cover;
         border: #c42eff solid 2px;
      }

      button {
         padding: 5px 7px;
         margin-top: 3rem;
         background: var(--gradient-10);
         
         border-radius: 50px;
         border: 0;
         
      }
   }

  
`