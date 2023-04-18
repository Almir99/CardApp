import DragAndDrop from "../UI/Drag_&_Drop/Drag&Drop";
import {Button, Container, Input, Text, TextArea} from "./Form.style";
import React, {ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState} from "react";

const initValue = {
  title: "",
  description: "",
  imgURL: "",
  alt:""
}

interface StateValues {
  title: string,
  description: string,
  imgURL: string,
  alt:string
}

interface FormProps{
  addData:Dispatch<SetStateAction<StateValues[]>>
}

const Form:FC<FormProps> = ({addData}) => {

  const  [values, setValues] = useState<StateValues>(initValue)

  const ChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues(prevState => ({...prevState, [e.target.name]: e.target.value}))
  }

  const SubmitHandler = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      addData(prevState => [...prevState, values])
      setValues(initValue)
    } catch (error) {
      console.error(error)
    }
  }


  return(
    <Container onSubmit={SubmitHandler}>
      <Text>Title: </Text>
      <Input name={"title"} value={values.title} type="text" onChange={ChangeHandler}/>
      <Text>Description: </Text>
      <TextArea name={"description"} value={values.description} onChange={ChangeHandler}/>
      <Text>Chose an image:</Text>
      <DragAndDrop value={values.imgURL} setValue={setValues}/>
      <Button disabled={values.title == "" || values.description == "" || values.imgURL == ""} type={"submit"}>Add a Card</Button>
    </Container>
  )
}

export default Form