import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
  max-width: 121.6rem;
  width: 90%;
  margin: 0 auto;

  .title {
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: ${({theme})=>theme.font_weight.bold};
    text-align: center;

    color: ${({theme})=>theme.colors.white};

    margin: 20rem 0 12rem;
  }

  .container-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media (max-width:768px) {
    .title {
      margin:12rem 0  8rem
    }

    .container-cards {
      justify-content: center;
      gap: 4.0rem ;
    }
  }
`