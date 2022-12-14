import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
  width: 90%;
  max-width: 121.6rem;
  margin: 0 auto;

.text-container {
  display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
}

.description {
  font-family: ${({theme})=> theme.fonts.primary};
  font-size: 1.6rem;
  font-weight: ${({theme})=>theme.font_weight.regular};
  line-height: 2.4rem;
  text-align: left;
  
  color: ${({theme})=>theme.colors.white};

}

.iam-text {
  font-family: ${({theme})=> theme.fonts.secondary};
  font-size:3.2rem ;
  font-weight: ${({theme})=>theme.font_weight.medium};
  text-align: left;
  
  color: ${({theme})=>theme.colors.white};

  margin: 2.2rem 0;
}

.container-img {
  display: flex;
  justify-content: flex-end;
  width: 100%;
margin-top: 0;
  img {
    max-width: 49rem;
    width: 100%;
  }

  
}
@media (max-width:768px) {
  .container-img {
    justify-content: center;
    margin-top: 8.0rem;

    img {
      max-width: 60%;
    }
  }  

  
}
`