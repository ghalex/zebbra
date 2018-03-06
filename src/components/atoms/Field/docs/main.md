# Field

An **Input** is a field used to get a response from a user.

### Properties:

<table>
  <tbody>
    <tr>
      <th class='name' align="left">Name</th>
      <th align="center">Type</th>
      <th align="center">Default</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>`size`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">normal</td>
      <td>
        A input can have different sizes. <br />
        **Enum**:
        `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
      </td>
    </tr>
    <tr>
      <td>`type`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">text</td>
      <td>**Enum**: text, email, password, etc..</td>
    </tr>
    <tr>
      <td>`onChange`</td>
      <td class='type' align="center">func</td>
      <td class='default-type' align="center">null</td>
      <td>Called on change: `onChange(event: SyntheticEvent, data: object)`</td>
    </tr>
    <tr>
      <td>`onEnter`</td>
      <td class='type' align="center">func</td>
      <td class='default-type' align="center">null</td>
      <td>Called on keydown with code `13`: `onEnter(event: SyntheticEvent, data: object)`</td>
    </tr>
  </tbody>
</table>


### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Input } from 'zebbra'
import { ThemeProvider } from 'styled-components'
import { bulma } from 'themes'

const Component = () => (
  <div>
    <Box color='primary' inverted>
      <Text padding='5px 0'>Theme <b>Main</b>:</Text>
      <Input placeholder='Username' color='primary' onEnter={(evt, data) => console.log('data:', data)} />
    </Box>
    <ThemeProvider theme={bulma}>
      <Box color='success' inverted>
        <Text padding='5px 0'>Theme <b>Bulma</b>:</Text>
        <Input placeholder='Username' color='danger' size='normal' />
      </Box>
    </ThemeProvider>
  </div>
)

export default Component
```
