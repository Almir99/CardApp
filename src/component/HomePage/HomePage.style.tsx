import styled from "@emotion/styled";

export const Container =  styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 50px;
  padding: 50px 20px;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
