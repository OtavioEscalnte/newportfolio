import { Btn } from "./styles"

type Props = {
  title:string
}

export function Button ({title}:Props) {
  return (
    <Btn>{title}</Btn>
  )
}