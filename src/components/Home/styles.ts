import styled from "styled-components"
import backgroundImg from "../../assets/Bitmap.svg"
 
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
      background-image: url(${backgroundImg});
      background-size: cover;
      width: 850px;
      height: 400px;
      
      border-radius: 25px;
      margin: 3rem;
      padding: 2rem;
      
      background-color: gray;
      justify-content: center;

      .conteudo {
         padding: 2rem;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         z-index: 3;
         background-image: linear-gradient(to bottom right, rgba(156, 39, 176, 0.7), rgba(101, 31, 255, 0.7));
         border-radius: 25px;
         height: 90%;
         color: #fff;

         h2 {
            font-weight: 500;
         }
         h4 {
            font-weight: 400;
         }
      }
   }

`

