import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 778px;

  background: linear-gradient(170.4deg, #7B6CF6 19.69%, rgba(203, 83, 244, 0.42) 108.32%);
  margin-top: 200px;

  .about-container {
  background-color: ${({theme})=> theme.colors.black_secundary};

  max-width: 1216px;
  width: 100%;
  padding: 0 38px;

  border-radius: 20px;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.25);

  
  .title {
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: ${({theme})=>theme.font_weight.bold};
    text-align: center;

    color: ${({theme})=>theme.colors.white};

    margin-top: 32px;
  }




  .me-container {
    display: flex;
    align-items: center;

    margin: 24px 0 86px;

    img {
      max-width: 306px;
      width: 100%;
      border-radius: 50%;
    }

    .text-container {
      margin-left: 32px;
    
      .description {
        font-family: ${({theme})=>theme.fonts.primary};
        font-size: 1.6rem;
        font-weight: ${({theme})=>theme.font_weight.regular};

        line-height: 2.4rem;

        color: ${({theme})=>theme.colors.white};
  }
    }
  }
}
`



