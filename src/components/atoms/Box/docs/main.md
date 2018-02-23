# Box

A **box** to contain other elements.

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
        A button can have different colors. <br />
        **Enum**:
        `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
      </td>
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
      <td>`padding`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">1em</td>
      <td>**Ex:** 2px, 0.5rem.</td>
    </tr>
    <tr>
      <td>`inverted`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A box can have its colors inverted.</td>
    </tr>
  </tbody>
</table>

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Box } from 'zebbra'

const Component = () => (
  <div>
    <Box>Some text in box</Box>
    <Box size='small' color='primary'>Small box with some text in box</Box>
    <Box color='success' inverted>Some text in box</Box>
    <Box color='success' stacked>This is stacked</Box>
  </div>
)

export default Component
```
