import { Container } from "./styles";
import { FaFacebook,FaInstagram ,FaGithub,FaLinkedin} from "react-icons/fa";

export function Footer () {
  return (
    <Container>
      <div className="footer-details">
        <p>Desenvolvido por Otávio Escalante</p>
        <div className="social-container">
          <h3 className="social-title">Redes Sociais</h3>

          <div className="icon-container">
            <i><FaFacebook/></i>
            <i><FaInstagram/></i>
            <i><FaGithub/></i>
            <i><FaLinkedin/></i>
          </div>
        </div>

      </div>
    </Container>
  )
}