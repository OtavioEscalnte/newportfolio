import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;



  .name {
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 1.6rem;
    font-weight: ${({theme})=> theme.font_weight.medium};

    color: ${({theme})=> theme.colors.white};

    margin-top: 16px;
  }
`