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
            <a href="https://www.facebook.com/otavio.reiescalante/" target="_black"><FaFacebook/></a>
            <a href="https://instagram.com/otavioreir?igshid=YmMyMTA2M2Y=" target="_black"><FaInstagram/></a>
            <a href="https://github.com/OtavioEscalnte" target="_black"><FaGithub/></a>
            <a href="" target="_black"><FaLinkedin/></a>
          </div>
        </div>

      </div>
    </Container>
  )
}