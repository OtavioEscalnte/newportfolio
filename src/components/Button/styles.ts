import styled from "styled-components";

export const Btn = styled.button`
  font-family: ${({theme})=> theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: ${({theme})=> theme.font_weight.regular};
  text-transform: uppercase;

  color: ${({theme})=> theme.colors.purple};
  background-color: transparent;

  border: 0;
  border: 1px solid ${({theme})=> theme.colors.purple};
  border-radius: 8px;

  width: 155px;
  padding: 12px 0;
  
  transition: 0.5s;
  
  &:hover {
    transition: 0.5s;
    background-color: ${({theme})=>theme.colors.purple};
    color: ${({theme})=>theme.colors.white} ;
  }

  
`