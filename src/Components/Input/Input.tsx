import React from 'react'
import {Input as StyledInput, InputArea, Label, InputIconContainer} from './styles'
import {ReactComponent as CalendarIcon} from '../../Assets/Calendar.svg'

interface IProps {
  props?: React.Component | JSX.Element | string,
  maxWidth?: string,
  placeholder?: string,
  label?: string,
  id?: string,
}
const Input: React.FC<IProps> = (props) => {
  const {maxWidth, label, id} = props
  const input = <StyledInput autoComplete='off' id={id} style={{maxWidth: maxWidth}} {...props}/>
  const inputType = {
    default: input,
    icon: 
    <InputIconContainer className="input-icons">
      <label htmlFor={id}><CalendarIcon/></label>
      {input}
    </InputIconContainer>
  }
  return (
    <InputArea>
    <Label htmlFor={id}>{label}
    </Label>
      {inputType['icon']}
    </InputArea>
  )
}

export default Input
