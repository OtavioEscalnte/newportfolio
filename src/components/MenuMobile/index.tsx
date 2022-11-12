import { Container, Menu } from "./styles";
import { Link} from "react-scroll";

type Props = {
  menuOpen:boolean
  onCloseMenuMobile:()=>void;
}

export function MenuMobile({menuOpen, onCloseMenuMobile}:Props) {



  return (
    <Container menuOpen={menuOpen} >
        <Menu>
        <ul>
            <li><Link onClick={onCloseMenuMobile} to="welcome" smooth={true} offset={-120}>Início</Link></li>
            <li><Link onClick={onCloseMenuMobile} to="experience" smooth={true} offset={-120}>Experiência</Link></li>
            <li><Link onClick={onCloseMenuMobile} to="about-me" smooth={true} offset={-120}>Sobre Mim</Link></li>
            <li><Link onClick={onCloseMenuMobile} to="qualifications" smooth={true} offset={-120}>Qualificações</Link></li>
          </ul>
        </Menu>
    </Container>
  )
}