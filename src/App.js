import React from 'react';
import './styles/App.css';
import TextAnimationWipe from './textAnimationWipe';

function App() {

  return (
      <TextAnimationWipe
        staggerOffset={5}
        staggerGroup="char"
        revealDirection="top"
        duration={800}
        rotation={0}
      >
        <h1>I will be animated based on the inputted properties!</h1>
      </TextAnimationWipe>
  );
}

export default App;
