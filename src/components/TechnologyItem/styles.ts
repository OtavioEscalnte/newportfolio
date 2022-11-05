import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.8rem;



  .name {
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 1.6rem;
    font-weight: ${({theme})=> theme.font_weight.medium};

    color: ${({theme})=> theme.colors.white};

    margin-top: 1.6rem;
  }
`