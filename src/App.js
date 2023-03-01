import React from 'react';
import TextAnimationWipe from './textAnimationWipe';

function App() {



  return (
    <>
      <TextAnimationWipe
        staggerOffset={5}
        staggerGroup="char"
        revealDirection="top"
        duration={800}
        rotation={0}
      >
        <h1>I am an example of what you can do.</h1>
      </TextAnimationWipe>

      <TextAnimationWipe
        staggerOffset={1}
        staggerGroup="char"
        revealDirection="top"
        duration={600}
      >
        <h1>I am an example of what you can do.</h1>
      </TextAnimationWipe>
      <TextAnimationWipe
        staggerOffset={15}
        staggerGroup="word"
        rotation={10}
        duration={600}
      >
        <h1>I am an example of what you can do.</h1>
      </TextAnimationWipe>
      <TextAnimationWipe
        staggerOffset={300}
        staggerGroup="line"
        rotation={20}
        duration={2000}
      >
        <h1>I am an example of what you can do.</h1>
        <h1>I am an example of what you can do.</h1>
        <h1>I am an example of what you can do.</h1>
      </TextAnimationWipe>
    </>
  );
}

export default App;
