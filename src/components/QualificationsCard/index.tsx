import { Container, Status } from "./styles";

import UnoparImg from '../../assets/img/unopar.svg'
import { Button } from "../Button";
import theme from "../../styles/theme";

type Props = {
  logo: string
  title_card: string
  date: string
  status: string 
  finished?: boolean
}


export function QualificationsCard({logo, title_card, date, status,finished}:Props) {


  return (
    <Container >
        <img className="Logo" src={logo} alt="" />
        <div className="details-container">
          <div className="top-container">
            <h3 className="title-card">{title_card}</h3>
            <p className="date">{date}</p>
          </div>
          <div className="bottom-container">
            <p className="status">Status:<Status finished={finished}>{status}</Status></p>
            <Button btn_title="Ver Certificado"/>
          </div>
        </div>
    </Container>
  )
}