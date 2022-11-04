import styled from "styled-components";

export const Container = styled.div`
  max-width: 360px;
  width: 100%;

  height: 512px;

  padding: 24px 24px;

  background: linear-gradient(346.64deg, #665CBE 50.93%, rgba(113, 105, 182, 0) 86.8%), #7B6CF6;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;

  .img-container {
    display: flex;
    justify-content: center;
    
    background-color: ${({theme})=>theme.colors.white};
    padding: 24px 16px;

    border-radius: 8px;


  }

  .text-container {

    .title {
      font-family: ${({theme})=>theme.fonts.primary};
      font-size: 2.0rem;
      font-weight: ${({theme})=>theme.font_weight.bold};
      text-align: center;

      margin: 32px 0 24px;
    }

    .description {
      font-family: ${({theme})=>theme.fonts.primary};
      font-size: 1.6rem;
      font-weight: ${({theme})=> theme.font_weight.regular};
      line-height: 2.4rem;

      color: ${({theme})=> theme.colors.white};
    }
  }
`