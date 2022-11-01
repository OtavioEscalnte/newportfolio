import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme})=> theme.colors.black_primary};
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 28px 0;

    width: 90%;
    max-width: 1216px;
  }
  `

export const Logo = styled.h1`
  font-family: ${({theme})=> theme.fonts.primary};
  font-size: 3.2rem;
  font-weight: ${({theme})=> theme.font_weight.bold};

  color: ${({theme})=> theme.colors.purple};
`


export const Menu = styled.nav`
  ul {
        display: flex;
        list-style: none;

        li + li {
          margin-left: 26px;
        }

        li {
          a {
            font-family: ${({theme})=> theme.fonts.primary};
            font-size: 1.6rem;
            font-weight: ${({theme})=> theme.font_weight.regular};

            color: ${({theme})=> theme.colors.gray_primary};

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