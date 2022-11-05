import { Btn } from "./styles"

type Props = {
  btn_title:string
  onClick?:React.MouseEventHandler<HTMLButtonElement>
}

export function Button ({btn_title,onClick}:Props) {
  return (
    <Btn onClick={onClick}>{btn_title}</Btn>
  )
}