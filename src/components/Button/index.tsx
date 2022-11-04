import { Btn } from "./styles"

type Props = {
  btn_title:string
}

export function Button ({btn_title}:Props) {
  return (
    <Btn>{btn_title}</Btn>
  )
}