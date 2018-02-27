# Introduction

<img style="width: 100%; max-width: 200px;" src="https://raw.githubusercontent.com/ghalex/zebbra/master/logo.png" alt="Feathers logo">

Welcome to Zebbra.

``
zebbra is a collection of REACT components to help you easily build awesome web applications.
``

# Installation
```
npm install zebbra
```
```
yarn add zebbra
```

# Components List

- [x] Box
- [x] Button
- [x] Group
- [x] Icon
- [x] Input
- [x] Loader
- [x] Title

# Theming

Zebbra has full theming support using [styled-components](https://www.styled-components.com/). This component provides a theme to all React components underneath 

To illustrate this, let's create our owen theme.To do that all you have to do is extend our main theme.

```js
import theme from '../main'
import { defaults } from 'lodash'
import { lighten } from 'polished'

const bulma = defaults({
  components: {
    ...theme.components,
    input: {
      ...theme.components.input,
      border: '1px solid #dbdbdb',
      borderRadius: 6,
      boxShadow: 'inset 0 1px 2px rgba(100, 100, 100, 0.12)',
      focusBorder: `1px solid ${theme.colors.primary}`,
      focusBoxShadow: `0 0 0 0.125em ${lighten(0.4, theme.colors.primary)}`
    }
  }
}, theme)

export default bulma
```
<div class='hide'>
<!-- STORY -->
</div>