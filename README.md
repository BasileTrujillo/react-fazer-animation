# React Fazer Animation :rocket:

[![npm version](https://badge.fury.io/js/react-fazer-animation.svg)](https://badge.fury.io/js/react-fazer-animation)

This animation is a Typescript / React portage of the codepen [Redirecting Loader](https://codepen.io/mr_alien/pen/FDLjg) made by [@mr_alien](https://codepen.io/mr_alien).

![Preview](https://github.com/BasileTrujillo/react-fazer-animation/raw/master/screenshot.png "Preview")

## Demo

You can find a storybook with an exemple at: [https://basiletrujillo.github.io/react-fazer-animation/](https://basiletrujillo.github.io/react-fazer-animation/)

## Installation

```
yarn add react-fazer-animation
# or
npm i --save react-fazer-animation
```

## Usage

```javascript
import {FazerAnimation} from 'react-fazer-animation';

export const exemple = () => (
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <FazerAnimation
    title={'Redirecting'}
    bodyColor={'#000000'}
    longfazersColor={'#000000'}
  />
</div>
);
```

## Props

| Prop | Type | Definition |
| --- | --- | --- |
| title | string | The title to display. |
| bodyColor | string | The color of the body. |
| longfazersColor | object | The color of the long fazers. |

---

## Contributing

PR are welcome!

### Release process
Change the version number in `package.json` then push a commit with name "Release x.x.x" where x.x.x is the same version number as in `package.json`.

## Licensing

This project is licensed under the [MIT License](./LICENSE.txt).

All files located in the node_modules and external directories are externally maintained libraries used by this software which have their own licenses; we recommend you read them, as their terms may differ from the terms in the MIT License.
