import {Button, CancelButton, Container, Content, EmptyContainer, Text} from "./Nav.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faXmark} from '@fortawesome/free-solid-svg-icons'
import Form from "../Form/Form";
import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {useToggle} from "usehooks-ts";


interface StateValues {
  title:string,
  description:string,
  imgURL: string,
  alt:string
}

interface NavProps{
  addData:Dispatch<SetStateAction<StateValues[]>>
}

const Nav:FC<NavProps> = ({addData}) => {
  const [value, toggle] = useToggle(false)
  const [firstTouch, setFirstTouch] = useState(false)

  return(

      <Container>
        <Text>Card App</Text>
        <Button onClick={() => {
          toggle()
          setFirstTouch(true)
        }}><FontAwesomeIcon icon={faArrowRight}/> </Button>
        {value && <EmptyContainer onClick={toggle}/>}
        <Content className={ firstTouch ? value ? "show" : "hide" : ""}>
          <Form addData={addData}/>
          <CancelButton onClick={toggle}><FontAwesomeIcon icon={faXmark}/></CancelButton>
        </Content>
      </Container>
  )
}
export default Nav