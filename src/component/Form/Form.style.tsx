import styled from "@emotion/styled";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 10px;
  max-width: 400px;
  margin: 20px auto;
`

export const Text = styled.p`
  color:white;
  font-size: 25px;
  margin: 0;
  font-weight: bold;
  align-self: start;
`

export const Input = styled.input`
  color: var(--white);
  font-size: 25px;
  width: 100%;
  height: 45px;
  background-color: transparent;
  border: 2px solid var(--white);
  outline: none;
  padding: 5px 10px;
  border-radius: 5px;
`
export const TextArea = styled.textarea`
  color: var(--white);
  font-size: 25px;
  width: 100%;
  height: 45px;
  background-color: transparent;
  border: 2px solid var(--white);
  outline: none;
  padding: 15px 10px 5px;
  border-radius: 5px;
  resize: vertical;
`

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  height: 50px;
  font-weight: bold;
  font-size: 25px;
  background-color: var(--white);
  color: var(--darkGray);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 500ms ease;
  
  &&:hover{
    background-color: var(--lightGray);
    transition: background-color 500ms ease;
  }
  
  &&:disabled{
    cursor: default;
    background-color: var(--lightGray);
    color: var(--nights);
  }
`