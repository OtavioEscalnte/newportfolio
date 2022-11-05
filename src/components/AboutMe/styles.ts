import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15rem 0;

  width: 100%;

  
  background: linear-gradient(170.4deg, #7B6CF6 19.69%, rgba(203, 83, 244, 0.42) 108.32%);
  margin-top: 20rem;


  .about-container {
  background-color: ${({theme})=> theme.colors.black_secundary};

  max-width: 121.6rem;
  width: 90%;
  padding: 0 3.8rem;

  border-radius: 20px;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.25);

  
  .title {
    font-family: ${({theme})=>theme.fonts.primary};
    font-size: 2.4rem;
    font-weight: ${({theme})=>theme.font_weight.bold};
    text-align: center;

    color: ${({theme})=>theme.colors.white};

    margin-top: 3.2rem;
  }




  .me-container {
    display: flex;
    align-items: center;
    width: 100%;

    margin: 2.4rem 0 8.6rem;

    

  .avatar {
    max-width: 20rem;
    width: 100%;

    border: 6px solid ${({theme})=> theme.colors.purple};
    border-radius: 50%;
  }

    
    .text-container {
      margin-left: 3.5rem;
    
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

@media (max-width:992px) {

  .about-container {

    .me-container {
      display: flex;
      flex-direction: column;
  
      .text-container {
        margin-top: 2.0rem;
        margin-left: 0;
      }
    }
  }

}

`



