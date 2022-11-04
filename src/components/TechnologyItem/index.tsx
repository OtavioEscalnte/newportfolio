import { Container } from "./styles";

type Props = {
  img_src:string
  name: string
}

export function TechnologyItem({img_src, name}:Props) {
  return (
    <Container>
      <img src={img_src} alt="" />
      <h3 className="name">{name}</h3>
    </Container>
  )
}