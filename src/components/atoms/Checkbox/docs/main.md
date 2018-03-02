# Checkbox

A **checkbox** allows a user to select a value from a small set of options, often binary. <br />

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
      <td>`color`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">null</td>
      <td>
        A checkbox can have different colors. <br />
        **Enum**:
        `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
      </td>
    </tr>
    <tr>
      <td>`size`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">normal</td>
      <td>
        A checkbox can have different sizes. <br />
        **Enum**:
        `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
      </td>
    </tr>
    <tr>
      <td>`checked`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>
        Is true if checkbox is checked.
      </td>
    </tr>
  </tbody>
</table>

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Checkbox } from 'zebbra'

const Component = () => (
  <div>
    <Checkbox checked>Do this at <a href='#'>Coderbox</a></Checkbox>
    <Checkbox checked size='small'>Do this at <a href='#'>Coderbox</a></Checkbox>
  </div>
)

export default Component
```
