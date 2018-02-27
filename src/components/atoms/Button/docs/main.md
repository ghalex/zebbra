# Button

Classic **button**, in different colors, sizes, and states.

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
      <td>`outlined`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A button can be shown as outlined.</td>
    </tr>
    <tr>
      <td>`inverted`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A button can his colors inverted.</td>
    </tr>
    <tr>
      <td>`loading`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A button can show a loading indicator.</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">null</td>
      <td>A button can have an icon</td>
    </tr>
    <tr>
      <td>`iconPosition`</td>
      <td class='type' align="center">string</td>
      <td class='default-type'  align="center">left</td>
      <td>A button can have icon left or right</td>
    </tr>
  </tbody>
</table>

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Box, Button } from 'zebbra'

const Component = () => (
  <Box>
    <Button color='primary'>Primary</Button>
    <Button color='primary' outlined>Primary</Button>
    <Button color='primary' loading>Primary</Button>
  </Box>
)

export default Component
```
