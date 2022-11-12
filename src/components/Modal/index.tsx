import Fade from 'react-reveal/Fade'

import { SocialButton } from "../SocialButton"
import { ModalContainer} from "./styles"
import {CgClose} from 'react-icons/cg'

type Props = {
  isOpen:boolean;
  onRequestClose:()=> void;
  onClose:()=>void;
}

export function Modal({isOpen, onRequestClose,onClose}:Props) {
  return (
    <ModalContainer isOpen={isOpen} onRequestClose={ onRequestClose} shouldCloseOnEsc={true}>
    
     <Fade top>
      <div className='modal'>
        <div className="closeBtn" onClick={onClose}>
        <CgClose className="closeIcon"/>
        </div>
        <p className="title">Contato</p>
        <div className="container-buttons">
        <SocialButton href='https://www.facebook.com/otavio.reiescalante/' name="facebook"/>
        <SocialButton href='https://instagram.com/otavioreir?igshid=YmMyMTA2M2Y=' name="instagram"/>
        <SocialButton href="https://github.com/OtavioEscalnte" name="github"/>
        <SocialButton href='https://www.linkedin.com/in/ot%C3%A1vio-rei-escalante-440550244/' name="linkedin"/>
        </div>
        </div>
    </Fade>
    </ModalContainer>
  )
}