import styled from "styled-components";

export const ButtonContainer = styled.a`
  text-decoration: none;
  filter: brightness(0.8);
  transition: 0.5s;

  box-shadow: 6px 7px 32px -10px rgba(0,0,0,0.59);

  :hover {
    filter: brightness(1);
  transition: 0.5s;
  }

  .social {
  display: flex; 
  align-items: center;
  justify-content: space-between ;

  padding: 0 2.4rem;

  border: 0;
  border-radius: 5px;
  outline: none;

  width: 25rem;
  height: 5.0rem;

  background-color: rgba(0, 0, 255, 0.581);

  
.socialIcon {
  font-size: 2.4rem;
  color: #f5f5f5;
}
.socialTitle {
  font-family: ${({theme})=> theme.fonts.primary};
  font-size: 1.4rem;
  color: ${({theme})=>theme.colors.white};

  text-transform: uppercase;
}
}

.social.facebook {
  background-color:#0778e9; ;
}

.social.instagram {
  background-color: #C13584;
}

.social.github {
  background-color: #000000;
}

.social.linkedin {
  background-color: #0A66C2;
}
`