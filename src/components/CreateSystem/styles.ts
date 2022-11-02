import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
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

  .container-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`