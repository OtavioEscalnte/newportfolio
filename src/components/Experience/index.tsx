import { TechnologyItem } from "../TechnologyItem";
import { Container } from "./style";

import HtmlImg from '../../assets/img/html_img.svg'
import CssImg from '../../assets/img/css_img.svg'
import JsImg from '../../assets/img/js_img.svg'
import SassImg from '../../assets/img/sass_img.svg'
import ReactImg from '../../assets/img/react_img.svg'
import GitImg from '../../assets/img/git_img.svg'
import GithubImg from '../../assets/img/github_img.svg'





export function Experience() {
  return (
    <Container>
      <div className="blur">
      <h2 className="title">Experiência</h2>
      <p className="description">Ao longo do tempo de estudo e prática aprendi diversas tecnologias que me propuseram criar interfaces modernas e dinâmicas entre estas tecnologias estão:</p>
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
      </div>
    </Container>
  )
}