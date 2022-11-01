import { Button } from "../Button";
import { Container, Logo, Menu } from "./styles";


export function Header () {
  return (
    <Container>
      <header>
        <Logo>DevCode</Logo>
        <Menu>
          <ul>
            <li><a href="">Início</a></li>
            <li><a href="">Experiências</a></li>
            <li><a href="">Sobre Mim</a></li>
            <li><a href="">Qualificações</a></li>
          </ul>
        </Menu>
        <Button title="Contato"/>
      </header>
      
    </Container>
  )
}