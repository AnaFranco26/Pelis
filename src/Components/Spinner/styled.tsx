import styled, { keyframes } from "styled-components";

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  animation-name: KeySpinner;
  `; 

export const Spinning =styled.div`
animation: spinner 1s linear infinite;

`

export const KeySpinner = keyframes`
to {
    transform: rotate(360deg);
  }
`