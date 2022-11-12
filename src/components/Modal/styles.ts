
import ReactModal from "react-modal";
import styled from "styled-components";



export const ModalContainer = styled(ReactModal).attrs({
  style:{
    overlay:{
      background:'RGBA(0,0,0,0.58)',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      zIndex: 999
    }
  }
})`
display:flex;
align-items:center;
justify-content:center;

max-width:50rem;
width:90%;
height:50rem;
outline:0;

.modal {
  display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
position:relative;
width:100%;
height:100%;
background-color:${({theme})=>theme.colors.black_secundary};
.closeBtn {
display: flex;
align-items: center;
justify-content: center;

position: absolute;
top: -1.0rem  ;
right:-1.0rem;

width: 5.0rem;
height: 5.0rem;

background-color: ${({theme})=>theme.colors.purple};
box-shadow: 6px 7px 32px -10px rgba(0,0,0,0.59);

 border-radius: 50%;

 filter: brightness(0.8);
 transition: 0.5s;

 :hover {
  cursor: pointer;

  filter: brightness(1);
  transition: 0.5s;
 }
 .closeIcon {
  color: #f5f5f5;
  font-size: 2rem;
}
}
.title {
    font-family: ${({theme})=> theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: ${({theme})=> theme.font_weight.bold};
    color:${({theme})=> theme.colors.white};

    margin-bottom:4.0rem;
}

.container-buttons {
display:flex;
flex-direction:column;
gap:2.0rem 0;
}

}


 
`