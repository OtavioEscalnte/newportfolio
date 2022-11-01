import { Container, TextContainer } from "./styles";
import Img from '../../assets/img/img1.svg'


export function Welcome() {
  return (
    <Container>
     <TextContainer>
      <p className="description">Olá, seja bem-vindo.</p>
      <h2 className="iam-text">Sou Otávio Escalante<br/> programador Front-End.</h2>
      <p className="description">Focado em JavaScript, estudo a linguagem há 3 anos para a construção<br/> de interfaces modernas e intuitivas.</p>
      </TextContainer>
      <div>
      <img src={Img} alt="person-phone" />
      </div>
    </Container>
  )
}