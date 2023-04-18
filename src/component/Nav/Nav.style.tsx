import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

const showAnimation = keyframes`
  from, 0%, to {
    left: -480px;
  }
  100% {
    left: 0;
  }
`
const hideAnimation = keyframes`
  from, 0%, to {
    left: 0;
  }
  100% {
    left: -480px;
  }
`
export const Container = styled.div`
  display: grid;
  position: sticky;
  top: 0;
  left: 0;
  align-items: center;
  z-index: 1;
  height: 60px;
  padding: 0 20px;
  background-color: var(--nights);
  
  .show{
    animation: ${showAnimation} 1s ease-out forwards;
  }
  .hide{
    animation: ${hideAnimation} 0.8s ease-out forwards;
  }
  
`
export const Button = styled.div`
  display: flex;
  grid-row: 1;
  grid-column: 1;
  align-items: center;
  justify-content: center;
  background-color: var(--white);
  width: 40px;
  height: 40px;
  color: var(--darkGray);
  font-size: 25px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 500ms ease;

  &&:hover {
    background-color: var(--lightGray);
    transition: background-color 500ms ease;
`
export const Content = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: minmax(300px, 450px);
  width: 450px;
  height: 100vh;
  top: 0;
  left: -480px;
  background-color: var(--nights);
  z-index: 1;
  
`
export const Text = styled.div`
  grid-row: 1;
  grid-column: 1;
  text-align: center;
  font-size: 35px;
  color: var(--white);
  font-weight: bold;
  letter-spacing: 0.9px;
`
export const CancelButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: -20px;
  background-color: var(--red);
  z-index: 3;
  width: 40px;
  height: 40px;
  color: var(--white);
  font-size: 30px;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 500ms ease;

  &&:hover {
    background-color: var(--lightRed);
    transition: background-color 500ms ease;
  }
`

export const EmptyContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255,255,255,0.5);
  backdrop-filter: blur(5px);
`