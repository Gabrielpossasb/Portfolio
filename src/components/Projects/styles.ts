import styled from "styled-components";
import { ThemeSelectProps } from "../../App";


export const Container = styled.div <ThemeSelectProps>`
   margin-bottom: 6rem;


   .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      
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
      gap: 6rem;
      
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
      border: 1px solid #22222200;
      transition: all 0.4s;

      &:hover {
         opacity: 1;
         border: 1px solid #099db8
      }

      img {
         margin-top: 2rem;
         width: 100%;
         background-size: cover;
         border-top: #099db8 solid 3px;
         border-bottom: #099db8 solid 3px;
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