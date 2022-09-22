"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./styles/App.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TextAnimationWipe(_ref) {
  let {
    children
  } = _ref;
  const mainWrapper = (0, _react.useRef)();
  const textWrapperRef = (0, _react.useRef)();
  const [revealElements, setRevealElements] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setRevealElements([]);
    const childElements = children; //Loop through children
    //pass element to seperate function that does all below logic
    // SINGLE ELEMENT ONLY

    if (!Array.isArray(childElements)) {
      let allText;
      let arrayOfChars = [];
      document.addEventListener('scroll', animate);
      allText = childElements.props.children;
      allText.split('').forEach((char, i) => {
        let isCharEmpty;

        if (char === ' ') {
          isCharEmpty = true;
        }

        arrayOfChars.push( /*#__PURE__*/_react.default.createElement("span", {
          className: "single-char",
          style: {
            animationDelay: "calc(5 * ".concat(i, "0ms"),
            marginRight: isCharEmpty === true ? ".4rem" : ''
          }
        }, char));
      });
      const ElementTag = childElements.type;
      setRevealElements(revealElements => [...revealElements, /*#__PURE__*/_react.default.createElement(ElementTag, {
        ref: textWrapperRef,
        className: "text-animation__text"
      }, arrayOfChars)]);
      animate();
      return;
    } //MULTIPLE ELEMENTS


    [...childElements].forEach(el => {
      let allText;
      let arrayOfChars = [];
      document.addEventListener('scroll', animate);
      allText = el.props.children; //Wrap Characters in span and push into Element

      arrayOfChars = [];
      allText.split('').forEach((char, i) => {
        let isCharEmpty;

        if (char === ' ') {
          isCharEmpty = true;
        }

        arrayOfChars.push( /*#__PURE__*/_react.default.createElement("span", {
          className: "single-char",
          style: {
            animationDelay: "calc(5 * ".concat(i, "0ms"),
            marginRight: isCharEmpty === true ? ".4rem" : ''
          }
        }, char));
      });
      const ElementTag = el.type;
      setRevealElements(revealElements => [...revealElements, /*#__PURE__*/_react.default.createElement(ElementTag, {
        ref: textWrapperRef,
        className: "text-animation__text"
      }, arrayOfChars)]);
      animate();
    }); //Animate once in viewport by appending class to ref

    function inView() {
      var elementHeight = textWrapperRef.current && textWrapperRef.current.clientHeight;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;
      var scrollPosition = scrollY + windowHeight;
      var elementPosition = textWrapperRef.current && textWrapperRef.current.getBoundingClientRect().top + scrollY + elementHeight;

      if (scrollPosition > elementPosition + 200) {
        return true;
      }

      return false;
    }

    function animate() {
      if (inView()) {
        for (var i = 0; i < revealElements.length; i++) {
          mainWrapper.current.className = "text-animation animate";
          mainWrapper.current.key = "text-animation-key=".concat(i);
        }
      }
    }
  }, [mainWrapper.current]);
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: mainWrapper,
    className: "text-animation"
  }, revealElements);
}

var _default = TextAnimationWipe;
exports.default = _default;