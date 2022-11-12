import styled from "styled-components";

type Props = {
  menuOpen: boolean
}

export const Container = styled.div<Props>`
display: flex;
align-items: center;
justify-content: center;

background-color: ${({theme})=> theme.colors.black_primary};

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: ${({menuOpen})=> menuOpen? 0 : '100%'};
  z-index: 3;
  transition: 0.5s;
`

export const Menu =  styled.nav`

  ul {

    text-align: center;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 4.0rem;

    li {
        
          a {
            font-family: ${({theme})=> theme.fonts.primary};
            font-size: 1.6rem;
            font-weight: ${({theme})=> theme.font_weight.regular};

            color: ${({theme})=> theme.colors.gray_primary};

            text-transform: uppercase;
            text-decoration: none;
            transition: 0.5s;

            &:hover {
              transition: 0.5s;
              color: ${({theme})=>theme.colors.white};
            }
          }
        }
  }
`