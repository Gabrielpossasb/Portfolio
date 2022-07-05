import styled from "styled-components"
import { darken } from "polished"


export const Container = styled.div`
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
      padding: 2rem 0.5rem;
      border-radius: 15px;
      background: var(--nav-side);

      button {
         background: var(--nav-side);
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
      background-image: url('/Bitmap.jpg');
      width: 900px;
      height: 450px;
      
      border-radius: 25px;
      margin: 3rem;
      padding: 2rem;
      
      background-color: gray;
      justify-content: center;

      .conteudo {
         padding: 1rem;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         z-index: 3;
         border-radius: 25px;
      }
   }

`

