import { Qualifications } from "../ Qualifications";
import { AboutMe } from "../AboutMe";
import { CreateSystem } from "../CreateSystem";
import { Experience } from "../Experience";
import { Welcome } from "../Welcome";
import { Container } from "./styles";


export function Content() {
  return (
    <Container>
      <Welcome/>
      <CreateSystem/>
      <Experience/>
      <AboutMe/>
      <Qualifications/>
    </Container>
  )
}