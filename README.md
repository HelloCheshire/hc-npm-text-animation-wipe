# React Component for an Animating Text Wipe

*Crafted by the [HelloCheshire](https://hellocheshire.com) developer team.*


<img src="https://i.imgur.com/OPDwYtc.gif" alt="Image usage" width="400">

## Installation

`npm install --save hc-text-animation-wipe`

## Useage



### Example

```javascript
import 'hc-text-animation-wipe/dist/components/styles/App.css';
import { TextAnimationWipe } from 'hc-text-animation-wipe';

function App() {
  return(
    <TextAnimationWipe>
      <h1>I will animate into view!</h1>
    </TextAnimationWipe>
  )
}

export default App;
```

### Example with properties

```javascript
import 'hc-text-animation-wipe/dist/components/styles/App.css';
import { TextAnimationWipe } from 'hc-text-animation-wipe';

function App() {
  return(
    <TextAnimationWipe
      staggerOffset={5}
      staggerGroup="char"
      revealDirection="top"
      duration={800}
      rotation={0}
    >
      <h1>I will animate into view!</h1>
    </TextAnimationWipe>
  )
}

export default App;
```

## Properties

### duration
- The duration prop determines how long the entire animation is in milliseconds. Default = 600.

### rotation
- The rotation prop determines the rotation in degrees. Default = 0.

### staggerGroup
- The staggerGroup prop determines how the inputted line of text will be displayed, either by individual characers, words or the entire line. Here are the stagger group strings to input into the component:
"char"
"word"
"line"

### staggerOffset
- The staggerOffset property will determine how each individual character will stagger into the screen. Likely the value would fall within the 1 - 10 range. Default = 3.

### revealDirection
- The revealDirection prop determines from which direction the text will animate in from. Default = "bottom"


## Development

### Process for updating and deplying as an NPM package

- Make changes to code base

- Ensure to increment the version on the package.json

- npm run build

- npm publish

[Go to the NPM Package here](https://www.npmjs.com/package/hc-text-animation-wipe) and ensure the new code has deployed by ensuring the version was changed.

The structure of [this tutorial](https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f) was followed.

