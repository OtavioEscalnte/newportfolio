import { Btn } from "./styles"

 type Props = {
  btn_title:string
  onClick?:() => void;
  href?:string | any;
  download?:any;
}

export function Button ({btn_title,onClick,href,download}:Props) {
  return (
    <Btn onClick={onClick} href={href} download={download}>{btn_title}</Btn>
  )
}