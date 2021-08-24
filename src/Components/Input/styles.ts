import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid ${({theme}) => theme.colors.gray200Color};
  color: ${({theme}) => theme.colors.subtitleColor};
  height: 4.4rem;
  width: 100%;
  margin-top: 0.4rem;
  padding: 0 1.6rem;
  border-radius: 4px;
  &::placeholder{
    font-style: normal;
    font-weight: normal;
    font-size: 1.4rem;
    line-height: 2rem;
  }
  &:hover {
    border: 1px solid ${({theme}) => theme.colors.green200Color};
  } 
  &:active, &:focus {
    border: 1px solid ${({theme}) => theme.colors.green500Color};
  } 
`
export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Label = styled.label`
  display: flex;
  color: ${({theme}) => theme.colors.subtitleColor};
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  margin-left: 1.6rem;

`
export const InputIconContainer = styled.div`
  position: relative;
  & > label{
    position: absolute;
    top: 14px;
    right: 12px;
    font-size: 15px;
  }

`