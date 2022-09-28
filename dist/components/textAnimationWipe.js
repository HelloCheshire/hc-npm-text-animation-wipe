"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

var _react = _interopRequireWildcard(require("react"));

require("./styles/App.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TextAnimationWipe(_ref) {
  let {
    children,
    staggerOffset = 3,
    staggerGroup,
    revealDirection = 'bottom',
    rotation = 0,
    duration = 600
  } = _ref;
  const mainWrapper = (0, _react.useRef)();
  const textWrapperRef = (0, _react.useRef)();
  const [revealElements, setRevealElements] = (0, _react.useState)([]);
  const cssTransform = {
    'top': "translate3d(0px, -100%, 0px) rotate(".concat(rotation, "deg)"),
    'bottom': "translate3d(0px, 100%, 0px) rotate(".concat(rotation, "deg)"),
    'right': "translate3d(100%, 0px, 0px) rotate(".concat(rotation, "deg)"),
    'left': "translate3d(-100%, 0px, 0px) rotate(".concat(rotation, "deg)")
  }[revealDirection];
  (0, _react.useEffect)(() => {
    setRevealElements([]);
    let childElements = children; //Loop through children
    //pass element to seperate function that does all below logic
    // If single element, force inside array to match multi-node children

    if (!Array.isArray(childElements)) {
      childElements = [].concat(childElements);
    } //Loop through and wrap items in spans


    [...childElements].forEach((el, childIndex) => {
      let arrayOfChars = [];
      document.addEventListener('scroll', animate);
      let allText = el.props.children; //Wrap Characters in span and push into Element

      arrayOfChars = [];

      switch (staggerGroup) {
        case 'char':
          allText.split('').forEach((char, i) => {
            arrayOfChars.push( /*#__PURE__*/_react.default.createElement("span", {
              className: "single-char",
              style: {
                transition: "all ".concat(duration, "ms"),
                transitionDelay: "calc(".concat(staggerOffset, " * ").concat(i, "0ms"),
                transform: cssTransform
              }
            }, char));
          });
          break;

        case 'word':
          allText.split(/(\s+)/).forEach((word, i) => {
            arrayOfChars.push( /*#__PURE__*/_react.default.createElement("span", {
              className: "single-char",
              style: {
                transition: "all ".concat(duration, "ms"),
                transitionDelay: "calc(".concat(staggerOffset, " * ").concat(i, "0ms"),
                transform: cssTransform
              }
            }, word));
          });
          break;

        case 'line':
          arrayOfChars.push( /*#__PURE__*/_react.default.createElement("span", {
            className: "single-char",
            style: {
              transition: "all ".concat(duration, "ms"),
              transitionDelay: "calc(".concat(staggerOffset, " * ").concat(childIndex, "ms"),
              transform: cssTransform
            }
          }, allText));
          break;
      }

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

      if (scrollPosition > elementPosition) {
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