import styled from "styled-components";
import { ThemeSelectProps } from "../../App";


export const Container = styled.div <ThemeSelectProps>`
   margin-bottom: 6rem;


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
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      padding-top: 6rem;
      padding-bottom: 6rem;
      border-bottom: 4px solid ${(props) => props.theme.line};
      border-top: 4px solid ${(props) => props.theme.line};
      gap: 6rem;
      background: var(--background);
      
   }

   .projeto {
      background-image: linear-gradient(to bottom right, #1d272bf3, #07090ade);
      max-width: 400px;
      opacity: 0.7;
      border-radius: 1rem;
      padding: 1rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: opacity 0.4s;

      &:hover {
         opacity: 1;
         
      }

      img {
         margin-top: 2rem;
         width: 100%;
         background-size: cover;
         border-top: #17535e solid 3px;
         border-bottom: #17535e solid 3px;
      }

      button {
         padding: 2px 4px;
         align-items: center;
         justify-content: center;
         margin-top: 2rem;
         background: #252225;
         border-radius: 100%;
         border: 0;
         
         
      }
      .btnDeploy {
         background: #178d3d;
         padding: 0px 9px;
         
      }
      .btnLinks {
         display: flex;
         gap: 2rem;
      }
   }

  
`