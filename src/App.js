import React from 'react';
import './styles/App.css';
import TextAnimationWipe from './textAnimationWipe';

function App() {

  //Durantion param will likely fall within the 1 - 10 range

  return (
    <>
      <TextAnimationWipe
        staggerOffset={1}
        staggerGroup="char"
        revealDirection="top"
        duration={600}
      >
        <h1>I will be animated and wiped into view quickly</h1>
      </TextAnimationWipe>
      <TextAnimationWipe
        staggerOffset={15}
        staggerGroup="word"
        rotation={10}
        duration={600}
      >
        <h1>I will be animated and wiped into view quickly</h1>
      </TextAnimationWipe>
      <TextAnimationWipe
        staggerOffset={300}
        staggerGroup="line"
        rotation={20}
        duration={2000}
      >
        <h1>Line 1 hello world!</h1>
        <h1>Line 2 hello world!</h1>
        <h1>Line 3 hello world!</h1>
      </TextAnimationWipe>
    </>
  );
}

export default App;
