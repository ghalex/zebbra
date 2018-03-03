# Tag

Small **tag** labels to insert anywhere

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
        A tag can have different sizes. <br />
        **Enum**:
        `normal`, `medium`, `large`
      </td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">null</td>
      <td>A tag can have an icon</td>
    </tr>
  </tbody>
</table>


### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Box, Tag, Group } from 'zebbra'

const Component = () => (
  <div>
    <Box color='success' inverted>
      <Tag>Normal</Tag>
      <Tag color='gray'>Gray</Tag>
      <Tag color='primary'>Primary</Tag>
      <Tag color='success'>Success</Tag>
      <Tag color='danger'>Danger</Tag>
      <Tag color='success' icon='star' />
      <Tag color='gray' icon='shield' />
      <Tag color='success' isDelete />
      <Tag color='gray' isDelete />
    </Box>
    <Box color='success' inverted>
      <Group>
        <Tag color='black'>npm</Tag>
        <Tag color='primary'>v1.0.0</Tag>
      </Group>
      <Group>
        <Tag color='black'>build</Tag>
        <Tag color='success'>passed</Tag>
      </Group>
      <Group>
        <Tag color='primary'>javascript</Tag>
        <Tag color='light' isDelete />
      </Group>
    </Box>
  </div>
)

export default Component
```
