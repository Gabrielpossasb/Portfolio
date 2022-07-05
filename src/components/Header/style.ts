import styled from "styled-components";

export const Container = styled.header`
  background: var(--background-header);
  

`;

export const Content = styled.div`
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
    background: var(--background-header);
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    border: 0;
    color: var(--text-purple);
    transition: filter 0.2s;

    &:hover {
      background: #19191A;
      //text-decoration: underline;
    }
  }

  .bntsHeader {
    display: 1;
    
  }
`;