import styled from "styled-components";

export const Container = styled.div`
   margin: 0;
   border-bottom: 2px solid var(--line-purple);


   .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      

      h1 {
         border-top: 3px solid var(--line-purple);
         border-radius: 2rem;
         padding: 0.5rem 10rem;
         font-size: 3rem;
      }
   }

   .line, .line- {
      width: 2px;
      height: 8rem;
      border-left: 2px solid var(--line-purple);
      margin-left: 2rem;
   }
   .line- {
      border: 1px solid var(--line-purple);
   }

   .projetosArea {
      margin-top: 6rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      border-bottom: 6px solid var(--line-purple);
      border-top: 6px solid var(--line-purple);
      border-left:  1px solid var(--line-purple);
      border-right:  1px solid var(--line-purple);
      border-radius: 50px;
      gap: 3rem;
      background: var(--background);
      
   }

   .projeto {
      background-image: var(--gradient-7);
      border-radius: 2rem;
      padding: 2rem 1rem;
      margin: 2rem 3rem 2rem 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transition: background-image 0.2s;

      &:hover {
         background-image: var(--gradient-10);
         
      }

      img {
         margin-top: 2rem;
         width: 300px;
         height: 150px;
         border-radius: 10px;

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