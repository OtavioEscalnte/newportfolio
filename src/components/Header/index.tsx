import { Button } from "../Button";
import { MenuMobile } from "../MenuMobile";
import { Container, Logo, Menu } from "./styles";
import {FaRegUserCircle, FaBars, } from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from "react";
import { Modal } from "../Modal";
import { Link} from "react-scroll";


export function Header () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false)

  function handleOpenMenu() {
    const scroll = document.querySelector('body')
    if(!isOpen && scroll) {
      setIsOpen(!isOpen)
      scroll.style.overflowY = 'hidden'
    }
    if(isOpen && scroll) {
      setIsOpen(!isOpen)
      scroll.style.overflowY = 'initial'
    }
  }

  function handleOpenModal(){
    setIsOpenModal(!isOpenModal)
    const scroll = document.querySelector('body')
    if(isOpen && scroll)
    scroll.style.overflowY = 'initial'
    setIsOpen(false)
  }



  return (
    <Container>
      <header>
        <Logo>DevCode</Logo>
        <Menu>
          <ul>
            <li><Link to="welcome" smooth={true} offset={-120}>Início</Link></li>
            <li><Link to="experience" smooth={true} offset={-120}>Experiências</Link></li>
            <li><Link to="about-me" smooth={true} offset={-120}>Sobre Mim</Link></li>
            <li><Link to="qualifications" smooth={true} offset={-120}>Qualificações</Link></li>
          </ul>
        </Menu>
        <div className="container-button">
        <Button onClick={handleOpenModal} btn_title="Contato"/>
        </div>
        <div className="menu-mobile">
        <i onClick={handleOpenModal} className="contact-icon"><FaRegUserCircle/></i>
        <i onClick={handleOpenMenu}>{isOpen? <AiOutlineClose/>:<FaBars/>}</i> 
        </div>
      <MenuMobile menuOpen={isOpen} onCloseMenuMobile={handleOpenMenu}/>
      </header>
      <Modal isOpen={isOpenModal} onClose={handleOpenModal} onRequestClose={handleOpenModal}/>
    </Container>
  )
}