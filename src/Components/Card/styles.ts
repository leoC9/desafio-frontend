import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 31.2rem;
  padding: 1.65rem 2.25rem;
  background: ${({theme}) => theme.colors.whiteColor};
  height: 11.6rem;
  box-shadow: 0px 4px 20px rgba(71, 79, 99, 0.05);
  border-radius: 8px;
  /* &::placeholder{
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
  }  */
`
export const CardHeader = styled.header`
  display: inline-flex;
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  & > p {
    display: flex;
    align-items: center;
  }
  & > p:nth-child(1) {
    color: ${({theme}) => theme.colors.gray700Color};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 16px;
    & > span{
      padding-left: 1rem;
    }
  }
  & > p:nth-child(2) {
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.colors.gray500Color};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 18px;
    & > span{
      padding-left: 1rem;
    }
  }
`

export const CardContent = styled.main`
  display: inline-flex;
  align-items: center;
  flex: 3;
  width: 100%;
  & > span{
    flex: 1;
    padding-left: 1.2rem;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 18px;
    color: ${({theme}) => theme.colors.subtitleColor};
  }
`
