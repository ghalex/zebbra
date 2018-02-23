# Input

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
        A button can have different sizes. <br />
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

const Component = () => (
  <div>
    <Input placeholder='Username' onEnter={(evt, data) => console.log('data:', data)} />
    <Input placeholder='Username' size='large' />
  </div>
)

export default Component
```
