import { Card } from "../Card";
import { Container } from "./styles";

import ImgCard1 from '../../assets/img/card_img1.svg'
import ImgCard2 from '../../assets/img/card_img2.svg'
import ImgCard3 from '../../assets/img/card_img3.svg'


export function CreateSystem() {
  return (
    <Container>
      <h2 className="title">Criação de Sistemas e Interfaces</h2>
      
      <div className="container-cards">
        <Card img_src={ImgCard1} title="Criação de Sites" description="Criação sites com interfaces modernas e agradáveis usando tecnologias de alta performace."/>
        <Card img_src={ImgCard2} title="Aplicações Mobile"description="Criação de Apps modernos e intuitivos de alta performace utilizando Bibliotecas e frameworks JavaScript."/>
        <Card img_src={ImgCard3} title="UI Design" description="Prototipagem de interfaces Web e Mobile utilizando ferramentas de design modernas e profissionais."/>
      </div>
    </Container>
  )
}