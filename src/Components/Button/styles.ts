import styled from 'styled-components'

export const Button = styled.button`
  background: ${({theme}) => theme.colors.green500Color};
  color: ${({theme}) => theme.colors.whiteColor};
  border: none;
  height: 4.3rem;
  width: 100%;
  font-weight: 500;
  p{
    
  }
  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.colors.green600Color};
  } 
  &:active {
    cursor: pointer;
    background: ${({theme}) => theme.colors.green700Color};
  } 
  &:disabled {
    cursor: pointer;
    background: ${({theme}) => theme.colors.gray200Color};
  } 
`