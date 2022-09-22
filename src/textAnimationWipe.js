import React, { useEffect, useRef, useState  } from 'react';
import './styles/App.css';

function TextAnimationWipe({ children }) {
  
  const mainWrapper = useRef();
  const textWrapperRef = useRef();
  const [revealElements, setRevealElements] = useState([]);

  useEffect(() => {
    setRevealElements([])
    const childElements = children;

    //Loop through children
    //pass element to seperate function that does all below logic

    // SINGLE ELEMENT ONLY
    if(!Array.isArray(childElements)){
      let allText;
      let arrayOfChars = [];
      document.addEventListener('scroll', animate);
      allText = childElements.props.children;
      allText.split('').forEach((char, i) => {
        arrayOfChars.push(<span className='single-char' style={{animationDelay: `calc(5 * ${i}0ms`}}>{char}</span>);
      })
      const ElementTag = childElements.type;
      setRevealElements(revealElements => [...revealElements, <ElementTag ref={textWrapperRef} className="text-animation__text">{arrayOfChars}</ElementTag>]);
      animate();
      return;
    }

    //MULTIPLE ELEMENTS
    [...childElements].forEach((el) => {
      let allText;
      let arrayOfChars = [];
      document.addEventListener('scroll', animate);
      allText = el.props.children;

      //Wrap Characters in span and push into Element
      arrayOfChars = [];
      allText.split('').forEach((char, i) => {
        arrayOfChars.push(<span className='single-char' style={{animationDelay: `calc(5 * ${i}0ms`}}>{char}</span>);
      })

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