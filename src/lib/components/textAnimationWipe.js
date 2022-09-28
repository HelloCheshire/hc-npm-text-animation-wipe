import React, { useEffect, useRef, useState } from 'react';
import './styles/App.css';

function TextAnimationWipe({ children, staggerOffset = 3, staggerGroup, revealDirection = 'bottom', rotation = 0, duration = 600 }) {

  const mainWrapper = useRef();
  const textWrapperRef = useRef();
  const [revealElements, setRevealElements] = useState([]);
  const cssTransform = {
    'top': `translate3d(0px, -100%, 0px) rotate(${rotation}deg)`,
    'bottom': `translate3d(0px, 100%, 0px) rotate(${rotation}deg)`,
    'right': `translate3d(100%, 0px, 0px) rotate(${rotation}deg)`,
    'left': `translate3d(-100%, 0px, 0px) rotate(${rotation}deg)`,
  }[revealDirection];

  useEffect(() => {
    setRevealElements([])
    let childElements = children;

    //Loop through children
    //pass element to seperate function that does all below logic

    // If single element, force inside array to match multi-node children
    if (!Array.isArray(childElements)) {
      childElements = [].concat(childElements);
    }

    //Loop through and wrap items in spans
    [...childElements].forEach((el, childIndex) => {
      let arrayOfChars = [];
      document.addEventListener('scroll', animate);
      let allText = el.props.children;

      //Wrap Characters in span and push into Element
      arrayOfChars = [];

      switch (staggerGroup) {
        case 'char':
          allText.split('').forEach((char, i) => {
            arrayOfChars.push(<span className='single-char' style={{ transition: `all ${duration}ms`, transitionDelay: `calc(${staggerOffset} * ${i}0ms`, transform: cssTransform }}>{char}</span>);
          })
          break;
        case 'word':
          allText.split(/(\s+)/).forEach((word, i) => {
            arrayOfChars.push(<span className='single-char' style={{ transition: `all ${duration}ms`, transitionDelay: `calc(${staggerOffset} * ${i}0ms`, transform: cssTransform }}>{word}</span>);
          })
          break;
        case 'line':
          arrayOfChars.push(<span className='single-char' style={{ transition: `all ${duration}ms`, transitionDelay: `calc(${staggerOffset} * ${childIndex}ms`, transform: cssTransform }}>{allText}</span>);
          break;
      }

      const ElementTag = el.type;
      setRevealElements(revealElements => [...revealElements, <ElementTag ref={textWrapperRef} className="text-animation__text">{arrayOfChars}</ElementTag>]);
      animate();
    })

    //Animate once in viewport by appending class to ref
    function inView() {
      var elementHeight = textWrapperRef.current && textWrapperRef.current.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = textWrapperRef.current && textWrapperRef.current.getBoundingClientRect().top + scrollY + elementHeight;

      if (scrollPosition > elementPosition) {
        return true;
      }
      return false;
    }

    function animate() {
      if (inView()) {
        for (var i = 0; i < revealElements.length; i++) {
          mainWrapper.current.className = "text-animation animate";
          mainWrapper.current.key = `text-animation-key=${i}`;
        }
      }
    }

  }, [mainWrapper.current]);



  return (
    <div ref={mainWrapper} className="text-animation">
      {revealElements}
    </div>
  );
}


export default TextAnimationWipe;