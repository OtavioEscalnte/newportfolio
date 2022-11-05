import { Card } from "../Card";
import { Container } from "./styles";
import Fade from 'react-reveal/Fade'

import ImgCard1 from '../../assets/img/card_img1.svg'
import ImgCard2 from '../../assets/img/card_img2.svg'
import ImgCard3 from '../../assets/img/card_img3.svg'


export function CreateSystem() {
  return (
    <Container>
      <Fade left collapse>
      <h2 className="title">Criação de Sistemas e Interfaces</h2>
      </Fade>

      <div className="container-cards">
        <Fade left>
        <Card img_src={ImgCard1} title="Criação de Sites" description="Criação sites com interfaces modernas e agradáveis usando tecnologias de alta performace."/>
        </Fade>
        <Fade bottom>
        <Card img_src={ImgCard2} title="Aplicações Mobile"description="Criação de Apps modernos e intuitivos de alta performace utilizando Bibliotecas e frameworks JavaScript."/>
        </Fade>
        <Fade right>
        <Card img_src={ImgCard3} title="UI Design" description="Prototipagem de interfaces Web e Mobile utilizando ferramentas de design modernas e profissionais."/>
        </Fade>
      </div>
    </Container>
  )
}