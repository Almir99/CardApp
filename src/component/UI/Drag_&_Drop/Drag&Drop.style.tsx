import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  color:white;
  width: 100%;
  height: 200px;
  border: 5px dashed white;
  padding: 0 10px;
 
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    text-align: center;
    width: inherit;
    height: inherit;
    cursor: pointer;
    p{
      pointer-events: none;
      font-weight: normal;
    }
  }

  button{
    position: absolute;
    top: -20px;
    right: -20px;
    background-color: var(--red);
    z-index: 2;
    width: 40px;
    height: 40px;
    color: var(--white);
    font-size: 30px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: background-color 500ms ease;
  }

  button:hover{
    background-color: var(--lightRed);
    transition: background-color 500ms ease;
  }
  
  img{
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
`