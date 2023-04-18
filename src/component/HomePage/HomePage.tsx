import Card from "../Card/Card";
import {Container, Wrapper} from "./HomePage.style";
import {FC} from "react";


interface HomePageProps{
  data:{title:string,description:string,imgURL:string,alt:string}[]
}

const HomePage:FC<HomePageProps> = ({data}) => {

  return (
    <Container>
      {
        data.map((info, index) =>
          <Wrapper key={index}>
            <Card title={info.title} description={info.description} image={info.imgURL} alt={info.alt} cardNumber={index+1}/>
          </Wrapper>
        )
      }
    </Container>
  );
}

export default HomePage