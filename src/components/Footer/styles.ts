import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({theme})=> theme.colors.black_secundary};
  padding: 1.6rem 0;

  margin-top:20rem;
  .footer-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 121.6rem;
    width: 90%;

    margin: 0 auto;

    p {
      font-family: ${({theme})=> theme.fonts.primary};
      font-size: 1.4rem;
      font-weight:${({theme})=> theme.font_weight.medium};
      color: ${({theme})=> theme.colors.gray_primary};
    }
.social-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-title {
    font-family: ${({theme})=> theme.fonts.primary};
      font-size: 1.4rem;
      font-weight:${({theme})=> theme.font_weight.medium};
      color: ${({theme})=> theme.colors.gray_primary};
  }

  .icon-container {
    display: flex;
    gap:2.4rem;

    a{
      font-size: 24px;
      color: ${({theme})=> theme.colors.gray_primary};
      margin-top: 1.4rem;
      transition: 0.5s;

      text-decoration: none;

      &:hover {
        color: ${({theme})=> theme.colors.purple};
        transition: 0.5s;
      }
    }
  }
}
  }

  @media (max-width:768px) {
    .footer-details {
      flex-direction: column-reverse;

      p {
        margin-top: 1.0rem;
      }
    }
  }
`