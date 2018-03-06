![Logo](https://raw.githubusercontent.com/ghalex/zebbra/master/logo.png)

# Zebbra

[![npm](https://img.shields.io/npm/dm/zebbra.svg)](https://www.npmjs.com/package/zebbra)
[![npm](https://img.shields.io/npm/v/zebbra.svg)](https://www.npmjs.com/package/zebbra)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Introduction
`zebbra` is a collection of REACT components.

# Installation
```
npm install zebbra
```
```
yarn add zebbra
```

# Demo & Documentation
[Demo + Documentation](https://ghalex.github.io/zebbra/)

For code example check `.stories.js` files from each component.

# Components List

- [x] Box
- [x] Button
- [x] Group
- [x] Icon
- [x] Input
- [x] Checkbox
- [x] Field
- [x] Textarea
- [x] Loader
- [x] Text
- [x] Title
- [x] YesNo

# Build
```
npm run build
```
```
yarn build
```

# Theming

Zebbra has full theming support using [styled-components](https://www.styled-components.com/).

To illustrate this, let's create our own theme.To do that all we have to do is extend our main theme.

```js
import { themes } from 'zebbra'
import { defaults } from 'lodash'
import { lighten } from 'polished'

const bulma = defaults({
  components: {
    ...themes.main.components,
    input: {
      ...themes.main.components.input,
      border: '1px solid #dbdbdb',
      borderRadius: 6,
      boxShadow: 'inset 0 1px 2px rgba(100, 100, 100, 0.12)',
      focusBorder: `1px solid ${themes.main.colors.primary}`,
      focusBoxShadow: `0 0 0 0.125em ${lighten(0.4, themes.main.colors.primary)}`
    }
  }
}, theme)

export default bulma
```
<div class='hide'>
<!-- STORY -->
</div>

# License

Copyright (c) 2018 [Zebbra contributors](https://github.com/ghalex/zebbra/graphs/contributors)

Licensed under the [MIT license](LICENSE).