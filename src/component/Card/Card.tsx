import {FC} from "react";
import {Container, Content, Description, ImageWrapper, Numeration, Title} from "./Card.styled";

interface CardProps{
  title:string,
  description:string,
  image:string,
  alt:string,
  cardNumber:number
}

const Card:FC<CardProps> = ({title,description,image,alt,cardNumber}) => {
  return(
    <Container>
      <Content>
        <div>
          <ImageWrapper>
            <img src={image} alt={alt}/>
          </ImageWrapper>
          <Title>{title}</Title>
          <Description>
            {description}
          </Description>
        </div>
        <Numeration>
          {cardNumber}
        </Numeration>
      </Content>
    </Container>
  )
}

export default Card