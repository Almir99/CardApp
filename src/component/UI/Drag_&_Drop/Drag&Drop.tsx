import {Container} from "./Drag&Drop.styled";
import React, {useState, ChangeEvent, useRef, FC, SetStateAction, Dispatch, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'

interface StateValues {
  title: string,
  description: string,
  imgURL: string,
  alt: string,
}

interface DragAndDropProps {
  setValue: Dispatch<SetStateAction<StateValues>>,
  value: string | null
}

const DragAndDrop: FC<DragAndDropProps> = ({setValue, value }) => {
  const [files, setFile] = useState<FileList | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  let url: string
  let alt: string

  useEffect(()=> {
    if(value === ""){
      setFile(null)
    }
  },[value])

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e && e.dataTransfer) {
        url = URL.createObjectURL(Object.values(e.dataTransfer.files)[0])
        alt = Object.values(e.dataTransfer.files)[0]["name"]
      setValue(prevState => ({...prevState, imgURL: url, alt: alt}))
      setFile(e.dataTransfer.files)
    }
  }


  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      url = URL.createObjectURL(Object.values(e.target.files)[0])
      alt = Object.values(e.target.files)[0]["name"]
    }
    setValue(prevState => ({...prevState, imgURL: url, alt: alt}))
    setFile(e.target.files)
  }

  const clickHandler = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.click()
    }
  }

  return (
    <>
      <Container>
        {!files && (
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={clickHandler}
          >
            <p>Drag and Drop <br/> Or <br/> Click on me</p>
            <input type="file"
                   onChange={handleFileSelect}
                   ref={inputRef}
                   hidden
            />
          </div>
        )}
        {files && (
          <>
            {Array.from(files).map((file) => (
              <>
                <img
                  key={Math.random().toString()}
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                />
              </>
            ))}
            <button onClick={() => setFile(null)}><FontAwesomeIcon icon={faXmark}/></button>
          </>
        )}
      </Container>
    </>
  )
}

export default DragAndDrop
