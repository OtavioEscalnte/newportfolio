import styled from "styled-components";

export const Btn = styled.button`
  font-family: ${({theme})=> theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: ${({theme})=> theme.font_weight.regular};
  text-transform: uppercase;
  cursor: pointer;

  color: ${({theme})=> theme.colors.purple};
  background-color: transparent;

  border: 0;
  border: 1px solid ${({theme})=> theme.colors.purple};
  border-radius: 8px;

  max-width: 15.5rem;
  width: 100%;

  padding: 1.2rem 1.8rem;
  
  transition: 0.5s;
  
  &:hover {
    transition: 0.5s;
    background-color: ${({theme})=>theme.colors.purple};
    color: ${({theme})=>theme.colors.white};
  }

  @media (max-width:572px) {
    border: none;
    padding: 0;

  :hover {
    background-color: transparent;
    color: ${({theme})=>theme.colors.purple};;
  }
  }
`