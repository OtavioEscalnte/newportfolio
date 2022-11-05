import styled from "styled-components";
import theme from "../../styles/theme";

type Props = {
  finished?: boolean
}

export const Container = styled.div<Props>`
  display: flex;

  max-width: 59.2rem;
  width: 100%;

  background-color: ${({theme})=> theme.colors.black_secundary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 20px;

  img {
    max-width: 16.2rem;
    width: 100%;
  }

  .details-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 1.6rem 2.4rem;

  .top-container {
      
   
    .title-card {
      font-family: ${({theme})=> theme.fonts.primary};
      font-size: 1.6rem;
      font-weight: ${({theme})=> theme.font_weight.medium};
      color: ${({theme})=> theme.colors.white};

      text-align: left;
    }

    .date {
      font-family: ${({theme})=> theme.fonts.primary};
      font-size: 1.4rem;
      font-weight: ${({theme})=> theme.font_weight.light};
      color: ${({theme})=> theme.colors.white};

      margin-top: 1.2rem;
    }
  }

  .bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .status {
      font-family: ${({theme})=> theme.fonts.primary};
      font-size: 1.4rem;
      font-weight: ${({theme})=> theme.font_weight.light};
      color: ${({theme})=> theme.colors.white};

    }
   
  }
}

@media (max-width:500px) {
  img {
    max-width: 12rem;
    
  }

  .details-container {
    .top-container {
      .date {
        display: none;
      }
    }
  }

}
`
export const Status = styled.span <Props>`
    color: ${({finished})=> finished? theme.colors.success : theme.colors.warning};
        margin-left: 0.5rem;
`