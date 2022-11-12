import { Container } from "./styles";
import Img from '../../assets/img/img1.svg'
import Fade from 'react-reveal/Fade';


export function Welcome() {

  return (
    <Container id="welcome">
      <Fade left>
     <div className="text-container">
      <p className="description">Olá, seja bem-vindo.</p>
      <h2 className="iam-text">Sou Otávio Escalante<br/> programador Front-End.</h2>
      <p className="description">Focado em JavaScript, estudo a linguagem há 3 anos para a construção<br/> de interfaces modernas e intuitivas.</p>
      </div>
      </Fade>
      <Fade right>
      <div className="container-img">  
      <img src={Img} alt="person-phone" />
      </div>
      </Fade>
    </Container>
  )
}