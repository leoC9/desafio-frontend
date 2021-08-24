import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components'
import Input from './Components/Input/Input';
import { Button } from './Components/Button/styles';
import Card from './Components/Card/Card';

const theme = {
  colors: {
  backgroundGradient: 'linear-gradient(0deg, #0ea4c2 0%, #13cfb9 100%)',
  backgroundGray: '#e5e5e5',
  whiteColor: '#ffffff',
  green100Color: '#E4F5EB',
  green200Color: '#5BE3B0',
  green500Color: '#0ec3a3',
  green600Color: '#09B0AA',
  green700Color: '#069293',
  gray900Color: '#474f63',
  gray700Color: '#6E778D',
  gray500Color: '#b3b9c9',
  gray300Color: '#b3b9c9',
  gray200Color: '#CED4DE',
  subtitleColor: '#3b3f49',
}}
const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Red Hat Display', sans-serif;
}

html,
body,
#root {
  height: 100vh;
  position: relative;
}

body {
  background: white;
}

body,
input,
button,
p,
textarea {
  font-size: 1.4rem;
  color: black;
}
ul,
a {
  text-decoration: none;
  list-style: none;
}

input:focus {
  outline: none;
}

input:hover {
  border-color: inherit;
}

@media (min-width: 100px) {
  :root {
    font-size: 62.5%;
  }
}
`

const mock = [
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 1,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 2,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 3,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 4,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 5,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 6,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 77,
    "fullName": "Banco do Brasil S.A."
  },
  {
    "ispb": "00000000",
    "name": "BCO DO BRASIL S.A.",
    "code": 100,
    "fullName": "Banco do Brasil S.A."
  },
]

function App() {
  return (
    <ThemeProvider theme={theme}>     
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', justifyItems: 'center'}} className="App">    
      <GlobalStyle/>
      {mock.map((item) => (
        <Card code={item.code} fullName={item.fullName} ISBP={item.ispb} visitedNumber={13+item.code} key={item.code}/>  
      ))}
    </div>
    </ThemeProvider>
  );
}

export default App;
