import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Page/Weather';
import styled from 'styled-components';


function App() {

  return (
    <div>
    <Wrapper>
      <Weather/>
    </Wrapper>
    </div>
  );
}

export default App;

const Wrapper=styled.div`
text-align: center;
border-style: dotted;
width:70%;
margin:auto;
height:100vh;
margin-top:10px;
`
