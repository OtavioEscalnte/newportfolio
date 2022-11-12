import { Container, Status } from "./styles";

import { Button } from "../Button";




type Props = {
  logo: string
  title_card: string
  date: string
  status: string 
  finished?: boolean,
  href?:string;
  download?:any;

}




export function QualificationsCard({logo, title_card, date, status,finished,href,download}:Props) {
  

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
            <Button btn_title="Ver Certificado" href={href} download={download} />
          </div>
        </div>
    </Container>
  )
}