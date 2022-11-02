import { Container } from "./styles";



type Props = {
  img_src: string
  title:string
  description:string
}

export function Card({img_src, title, description}:Props) {
  return (
    <Container>
      <div className="img-container">
        <img src={img_src} alt="" />
      </div>
      <div className="text-container">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </Container>
  )
}