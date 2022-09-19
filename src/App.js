import React, { useEffect } from 'react';
import './styles/App.scss';

function App() {

  useEffect(() => {

    function wrapChars(str, i) {
      console.log("i", i)
      return `<span class="text" style="animation-delay: calc(5 * ${i}0ms);">${str}</span>`;
    }

    const animate = () => {
      const allTextElement = document.querySelector(".text-animation__text");
      const allText = document.querySelector(".text-animation__text").innerText;
      
      const arrayOfChars = [];
      for (let i = 0; i < allText.length; i++) {
        arrayOfChars.push(wrapChars(allText.charAt(i), i))
      }

      allTextElement.innerHTML = arrayOfChars.join('');
      console.log("allTextElement", allTextElement);
    }
    animate();

  }, []);


  return (
      <div className='text-animation'>
        <h1 className='text-animation__text'>WIPINGTEXT</h1>
      </div>
  );
}

export default App;
