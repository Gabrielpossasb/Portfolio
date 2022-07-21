import styled from "styled-components";
import { darken} from 'polished'
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

  img {
    width: 3rem;
    height: 3rem;
  }
  
  button {
    background: ${(props) => props.theme.background};
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1rem;
    border: 0;
    color: ${(props) => props.theme.textFundo};
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