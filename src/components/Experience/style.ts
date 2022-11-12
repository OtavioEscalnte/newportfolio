import styled from "styled-components";

export const Container = styled.div`
  max-width: 59.2rem;
  width: 90%;
  margin: 0 auto;
  position: relative;




  .title {
    font-family: ${({theme})=> theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: ${({theme})=> theme.font_weight.bold};
    text-align: center;

    color: ${({theme})=> theme.colors.white};

    margin: 20rem 0 3.2rem;
   
  }

  .description {
    font-family: ${({theme})=> theme.fonts.primary};
    font-size: 1.6rem;
    font-weight: ${({theme})=> theme.font_weight.regular};

    line-height: 2.4rem;

    color: ${({theme})=> theme.colors.white};

  }

  .container-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    margin: 0 auto;
  }

  @media (max-width:768px) {
    .title {
      margin-top: 12rem;
    }
  }
`