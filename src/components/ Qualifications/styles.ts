import styled from "styled-components";


export const Container =  styled.div`
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
  .cards-container {
    display: flex;
    justify-content: space-between;
    gap: 3.2rem;
    flex-wrap: wrap;
  }

    @media (max-width:768px) {
    .title {
      margin:12rem 0  8.0rem
    }
  }

  @media (max-width:992px) {
    .cards-container {
     justify-content: center;
    }
  }
`