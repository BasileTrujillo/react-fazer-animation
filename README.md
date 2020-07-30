# React Fazer Animation

This animation is a Typescript / React portage of the codepen [Redirecting Loader](https://codepen.io/mr_alien/pen/FDLjg) made by [@mr_alien](https://codepen.io/mr_alien).

![Preview](screenshot.png "Preview")

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

## Licensing

This project is licensed under the [MIT License](./LICENSE.txt).

All files located in the node_modules and external directories are externally maintained libraries used by this software which have their own licenses; we recommend you read them, as their terms may differ from the terms in the MIT License.
