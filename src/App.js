import React from 'react';
import './styles/App.scss';
import TextAnimationWipe from './textWipeAnimation';
import Spacing from './spacing';

function App() {


  return (
    <>
      <TextAnimationWipe>
        <h1>REGGIE</h1>
      </TextAnimationWipe>
      <TextAnimationWipe>
        <h1>KEVIN</h1>
      </TextAnimationWipe>
      <TextAnimationWipe>
        <h1>SAMANTHA</h1>
      </TextAnimationWipe>
      <TextAnimationWipe>
        <h1>SUSAN</h1>
      </TextAnimationWipe>
    </>
  );
}

export default App;
