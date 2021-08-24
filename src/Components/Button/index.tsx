import React from 'react'
import {Button as StyledButton} from './styles'

interface IProps {
  children?: React.Component | JSX.Element | string,
  maxWidth?: string,
}
const Button: React.FC<IProps> = ({maxWidth,...props}) => {
  return (
    <StyledButton style={{maxWidth: maxWidth}}>
      {props.children}
    </StyledButton>
  )
}
export default Button
