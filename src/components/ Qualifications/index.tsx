import { QualificationsCard } from "../QualificationsCard";
import { Container } from "./styles";
import Fade from 'react-reveal/Fade'

import UnoparImg from '../../assets/img/unopar.svg'
import RocketseatImg from '../../assets/img/rocketseat.svg'
import certificate1 from '../../assets/certificates/diploma_unopar.pdf'
import certificate2 from '../../assets/certificates/diploma_trilha_conectar.pdf'
import certificate3 from '../../assets/certificates/diploma_trilha_fundamentar.pdf'
import certificate4 from '../../assets/certificates/diploma_trilha_especializar.pdf'

export function Qualifications () {
  return (
    <Container id="qualifications">
      <Fade top>
        <h2 className="title">Qualificações</h2>
        </Fade>
          <Fade left>
        <div className="cards-container">
          <QualificationsCard logo={UnoparImg} title_card={"Superior em Análise e\n Desenvolvimento de Sistemas"} date="2019 - 2022" status="Concluido" finished={true} href={certificate1} download/>
          <QualificationsCard logo={UnoparImg} title_card={"Pós-Graduação em\n Desenvolvimento Web Full-Stack"} date="2022 - Atualmente" status="Cursando"/>
          <QualificationsCard logo={RocketseatImg} title_card={"Rocketseat Trilha - Conectar"} date="2022 - 2022" status="Concluido" finished={true} href={certificate2} download/>
          <QualificationsCard logo={RocketseatImg} title_card={"Rocketseat Trilha - Fundamentar"} date="2022 - 2022" status="Concluido" finished={true} href={certificate3} download/>
          <QualificationsCard logo={RocketseatImg} title_card={"Rocketseat Trilha - Especializar"} date="2022 - 2022" status="Cursando" finished={true} href={certificate4} download/>
        </div>
          </Fade> 
    </Container>
  )
}