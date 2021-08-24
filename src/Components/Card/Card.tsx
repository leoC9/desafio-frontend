import React from 'react'
import { CardContainer, CardContent, CardHeader } from './styles'
import {ReactComponent as CheckIcon} from '../../Assets/Check.svg'
import {ReactComponent as UserIcon} from '../../Assets/Users.svg'
import {ReactComponent as MoreIcon} from '../../Assets/DotsThreeVertical.svg'
import {ReactComponent as MegaphoneIcon} from '../../Assets/Megaphone.svg'
import { useState } from 'react'
import { useEffect } from 'react'


interface IProps {
  maxWidth?: string,
  code: number,
  fullName: string,
  visitedNumber: number,
  ISBP: string,
}

const Card:React.FC<IProps> = (props) => {
  const {code, fullName, visitedNumber, ISBP} = props
  const number = code.toString()

  function verifyCode(number: string) {
    if(number?.length === 3) {
      return number;
    }
    if(number?.length === 3) {
      return number;
    }
    if(number?.length === 2) {
      return `0${number}`;
    }
    if(number?.length === 1) {
      return `00${number}`;
    }
    console.log('seila'); 
  }
  
  return (
    <CardContainer>
      <CardHeader>
        <p><CheckIcon/><span>12/06/2020 - 18h30</span></p>
        <p><UserIcon/> <span>{visitedNumber}</span></p>
        <MoreIcon/>
      </CardHeader>
      <CardContent>
        <MegaphoneIcon/>
        <span>{fullName} - {verifyCode(number)}<br/>ISBP: {ISBP}</span>
      </CardContent>
    </CardContainer>
  )
}

export default Card
