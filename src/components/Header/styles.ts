import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme})=> theme.colors.black_primary};
  width: 100%;

  position: fixed;
  top: 0;
  z-index: 4;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 2.8rem 0;

    width: 90%;
    max-width: 121.6rem;

    
    .menu-mobile {
      display: none;
      z-index: 4;
      .contact-icon{
        display: none;
        cursor: pointer;
      }
      i {
        color: ${({theme})=> theme.colors.purple};
        font-size:2.4rem
      }
    }
  }
    @media (max-width:992px) {
      
      header {
        padding:1.0rem 0;
        
        .container-button {
          display: none;
        }
      
      .menu-mobile {
        display: flex;
        .contact-icon {
          display: block;
          z-index: 1;
          margin-right: 2.0rem;
        }
        i {
          display:none;
        }
      }
    }
    }

    @media (max-width:768px) {
      header {
        padding:1.0rem 0;
      
      
      .menu-mobile {
        display: flex;
        .contact-icon {
          display: block;
          z-index: 1;
          margin-right: 2.0rem;
        }
        i {
          display:block;
        }
      }
    }
  }
  
  `

export const Logo = styled.h1`
  font-family: ${({theme})=> theme.fonts.primary};
  font-size: 3.2rem;
  font-weight: ${({theme})=> theme.font_weight.bold};

  color: ${({theme})=> theme.colors.purple};

  z-index: 4;
`


export const Menu = styled.nav`
  ul {
        display: flex;
        list-style: none;
        

        li + li {
          margin-left: 2.6rem;
        }

        li {
          
            font-family: ${({theme})=> theme.fonts.primary};
            font-size: 1.6rem;
            font-weight: ${({theme})=> theme.font_weight.regular};

            color: ${({theme})=> theme.colors.gray_primary};

            text-transform: uppercase;
            text-decoration: none;
            transition: 0.5s;

            cursor: pointer;

            &:hover {
              transition: 0.5s;
              color: ${({theme})=>theme.colors.white};
            
          }
        }
      }

      @media (max-width:768px) {
        display: none;
      }
    `
  