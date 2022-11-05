import styled from "styled-components";

export const Container = styled.div`
  max-width: 36rem;
  width: 100%;

  height: 51.2rem;

  padding: 2.4rem 2.4rem;

  background: linear-gradient(346.64deg, #665CBE 50.93%, rgba(113, 105, 182, 0) 86.8%), #7B6CF6;
  box-shadow: 3px 7px 10px rgba(0, 0, 0, 0.22);
  border-radius: 8px;

  .img-container {
    display: flex;
    justify-content: center;
    height: 20.8rem;

    background-color: ${({theme})=>theme.colors.white};
    padding: 2.4rem 1.6rem;
    border-radius: 8px;

  }

  .text-container {

    .title {
      font-family: ${({theme})=>theme.fonts.primary};
      font-size: 2.0rem;
      font-weight: ${({theme})=>theme.font_weight.bold};
      text-align: center;

      margin: 3.2rem 0 2.4rem;
    }

    .description {
      font-family: ${({theme})=>theme.fonts.primary};
      font-size: 1.6rem;
      font-weight: ${({theme})=> theme.font_weight.regular};
      line-height: 2.4rem;

      color: ${({theme})=> theme.colors.white};
    }
  }

  @media (max-width:1178px) {
    margin-top: 2.0rem;
  }

  @media (max-width:800px) {
    max-width: 28rem;

    width: 100%;
    height: 43.2rem;
    padding: 1.8rem 1.8rem;

    .img-container {
      img {
        width: 100%;
      }
    }
    }
  
`