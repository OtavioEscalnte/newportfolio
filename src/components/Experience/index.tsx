import { TechnologyItem } from "../TechnologyItem";
import { Container } from "./style";
import Fade from 'react-reveal/Fade'

import HtmlImg from '../../assets/img/html_img.svg'
import CssImg from '../../assets/img/css_img.svg'
import JsImg from '../../assets/img/js_img.svg'
import SassImg from '../../assets/img/sass_img.svg'
import ReactImg from '../../assets/img/react_img.svg'
import GitImg from '../../assets/img/git_img.svg'
import GithubImg from '../../assets/img/github_img.svg'





export function Experience() {
  return (
    <Container id="experience">
   
      <Fade top>
      <h2 className="title">Experiência</h2>
      </Fade>
      <Fade bottom>
      <p className="description">Ao longo do tempo de estudo e prática aprendi diversas tecnologias que me propuseram criar interfaces modernas e dinâmicas entre estas tecnologias estão:</p>
      </Fade>
      <Fade bottom>
      <div className="container-items">
        <TechnologyItem img_src={ReactImg} name="React-Js"/>
        <TechnologyItem img_src={ReactImg} name="React-Native"/>
        <TechnologyItem img_src={JsImg} name="JavaScript"/>
        <TechnologyItem img_src={HtmlImg} name="Html"/>
        <TechnologyItem img_src={CssImg} name="Css"/>
        <TechnologyItem img_src={SassImg} name="Sass"/>
        <TechnologyItem img_src={GitImg} name="Git"/>
        <TechnologyItem img_src={GithubImg} name="GitHub"/>
      </div>
      </Fade>
    </Container>
  )
}