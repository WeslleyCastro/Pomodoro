import { styled } from "styled-components";

export const HomeContainer = styled.main`

  flex: 1;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }

`

export const BaseContdownButton = styled.button`
  width: 100%;
  padding: 1rem;
  color: ${props => props.theme["gray-100"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
 
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartContdownButton = styled(BaseContdownButton)`
  background-color: ${props => props.theme["blue-500"]};
  
  &:not(:disabled):hover{
    background-color: ${props => props.theme["blue-700"]};
  }
`

export const StopCountDownButton = styled(BaseContdownButton)`
  background-color: ${props => props.theme["red-500"]};
  
  &:not(:disabled):hover{
    background-color: ${props => props.theme["red-700"]};
  }

`