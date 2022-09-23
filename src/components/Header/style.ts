import styled from "styled-components";
import { ThemeSelectProps } from "../../App";


export const Container = styled.header <ThemeSelectProps>`
  background: var(--background-header);
  

`;


export const Content = styled.div <ThemeSelectProps>`
  justify-content: space-between;
  padding: 2rem 4rem;
  flex-direction: row;
  display: flex;
  max-width: 1100;
  align-items: center;
  margin: 0;

  .spaceNavBar {
    position: absolute;
    border: #727272  solid 2px;
    border-bottom: 0;
    width: 4.5rem;
    margin-left: -5px;
    height: 2rem;
    background: var(--background);
    left: 5%;
    top: 5rem;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }

  img {
    width: 3rem;
    height: 3rem;
  }
  
  button {
    background: var(--background-header);
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    border: 0;
    color: #cfcfcf;
    transition: filter 0.2s;

    &:hover {
      background: #19191A;
      //text-decoration: underline;
    }
  }

  .bntsHeader {
    display: flex;
    gap: 2rem;

    

  }

  
  
 
`;