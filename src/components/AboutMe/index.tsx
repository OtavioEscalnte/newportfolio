import { Container } from "./styles";


export function AboutMe() {
  return (
    <Container>
      <div className="about-container">
          <h2 className="title">Sobre Mim</h2>
          <div className="me-container">
            <img src="https://avatars.githubusercontent.com/u/77994942?v=4" alt="" />
            <div className="text-container">
                <p className="description"><strong>Eai tudo bem?</strong></p>
                <p className="description">
                  Eu sou o Otávio tenho 23 anos, natural de Jaguarão - Rio Grande Do Sul. Atualmente sou cabo do Exército Brasilero onde sou responsável por gerir os servidores do quartel, estou em fase de transição de profissão para área de programação Front-End, possuo curso superior em Análise e Desenvolvimento de Sistemas pela Universidade Pitágoras Unopar Anhanguera e no presente momento estou cursando pós-graduação em Desenvolvimento Full-Stack. Já tabalhei com tecnologias bastante utilizadas atualmente como React-Js(Web) e React-Native(Mobile) tanto em projetos pessoais como em projetos onde fui colaborador.
                </p>
            </div>
          </div>
      </div>
    </Container>
  )
}