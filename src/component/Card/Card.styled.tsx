import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  from, 0%, to {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
`
export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(250px, 350px);
  width: inherit;
  height: 100%;
  border-radius: 10px;
  background-color: var(--nights);

  &&:before,
  &&:after {
    content: "";
    position: absolute;
    inset: -5px;
    z-index: -1;
    border-radius: inherit;
    background: conic-gradient(from var(--gradient-angle), var(--darkBlue),var(--blue),
    var(--lightBlue), var(--blue), var(--darkBlue));
    animation: ${rotate} 3s linear infinite;
  }
  &&:after {
    filter: blur(30px);
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  gap: 10px;
  color: var(--white);
  
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  
  img {
    width: inherit;
    height: inherit;
  }
`
export const Title = styled.h1`
  margin: 0;
  padding: 20px 10px;
`
export const Description = styled.p`
  font-size: 20px;
  margin: 0;
  padding: 0 10px;
`
export const Numeration = styled.p`
  font-size: 25px;
  margin: 0 0 0 auto;
  padding: 0 20px 20px;
  font-weight: bold;
`