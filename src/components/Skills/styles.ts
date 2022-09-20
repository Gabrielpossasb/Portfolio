import styled from "styled-components";
import { ThemeSelectProps } from "../../App";


export const Container = styled.div <ThemeSelectProps>`
   margin: 0;
   border-bottom: 2px solid ${(props) => props.theme.button};
`

export const Content = styled.div <ThemeSelectProps>`
   
   display: flex;
   width: 1000px;
   height: 800px;
   justify-content: center;
   align-items: center;
   //background: gray;
   flex-direction: row;
   
   

   .titleS {
      transform: rotate(-90deg);
      color: var(--text-fundo);
      font-size: 4rem;
      padding: 0 1rem;
      margin-right: 5rem;
      margin-top: 6rem;
   }

   .skills, .skillsFuture {
      display: flex;
      flex-direction: column;
      color: #fff;
      justify-content: center;
      border-left: 2px solid ${(props) => props.theme.button};
      width: 30%;
      
      

      span {
         margin-left: -0.8rem;
         margin-right: 1rem;
         //background: var(--text-fundo);
      }
      
   }

   .skills {
      gap: 3.3rem;
      margin-right: 3rem;
      align-self: baseline;
      height: 100%;
   }

   .skillsFuture {
      border: 0;
      gap: 3rem;

      img {
         width: 2.5rem;
         height: 2.5rem;
         
      }
   }
`