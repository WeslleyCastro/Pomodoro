import { styled } from "styled-components";

export const CountdownContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  font-size: 10rem;
  
  display: flex;
  gap: 1rem;
  color: ${props => props.theme["gray-100"]};

  span{
    background-color: ${props => props.theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
  
  @media (max-width: 760px){
    font-size: 4rem;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${props => props.theme["blue-500"]};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 760px){
    width: 1rem;
  }
`