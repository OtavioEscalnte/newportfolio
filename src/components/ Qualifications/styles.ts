import styled from "styled-components";


export const Container =  styled.div`
  max-width: 1216px;
  width: 90%;

  margin: 0 auto;

.title {
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: ${({theme})=>theme.font_weight.bold};
    text-align: center;

    color: ${({theme})=>theme.colors.white};

    margin: 200px 0 120px;
  }
  .cards-container {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    flex-wrap: wrap;
  }
`