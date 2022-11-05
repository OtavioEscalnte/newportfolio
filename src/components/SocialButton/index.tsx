
import {FaFacebook, FaInstagram,FaGithub,FaLinkedin} from 'react-icons/fa'
import { ButtonContainer } from './styles'

type Props = {
  name:string
  href?: string
}

export function SocialButton ({name, href}: Props) {

  switch (name) {
    case 'facebook':
      name === 'facebook';
      break;
      case 'instagram':
        name === 'instagram'
      break;
    case 'github':
       name === 'github'
    break;
    case 'linkedin':
      name === 'linkedin'
    default:
      break;
  }

  return (
    
    <ButtonContainer href={href} target="-black">
    <div className={`social ${name}`}>
       {name === 'facebook' && <FaFacebook className='socialIcon'/>}
       {name === 'instagram' && <FaInstagram className='socialIcon'/>} 
       {name === 'github' && <FaGithub  className='socialIcon'/>} 
       {name === 'linkedin' && <FaLinkedin  className='socialIcon'/>} 
       <p className='socialTitle'>{name}</p>
       <div></div>
    </div>
    </ButtonContainer>
  )
}