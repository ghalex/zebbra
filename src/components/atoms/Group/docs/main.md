# Group

A **group** to contain other elements and group them. <br />

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
      <td>`vertical`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>
        A group can display it's children **vertical**.
      </td>
    </tr>
  </tbody>
</table>

**Obs:** A group passes all props like `color`, `size`, etc... to it's children.

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Group, Button } from 'zebbra'

const Component = () => (
  <div>
    <Group color='primary' outlined>
      <Button icon='star'>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Group>
    <Group vertical>
      <Button color='success'>Left</Button>
      <Button color='gray'>Middle</Button>
      <Button color='gray'>Second</Button>
      <Button color='success'>Right</Button>
    </Group>
  </div>
)

export default Component
```
