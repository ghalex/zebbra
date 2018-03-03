# Text

A component to display text.

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
        A title can have different colors. <br />
        **Enum**:
        `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
      </td>
    </tr>
    <tr>
      <td>`size`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">normal</td>
      <td>
        A title can have different sizes. <br />
        **Enum**:
        `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
      </td>
    </tr>
    <tr>
      <td>`padding`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">0</td>
      <td>Add padding to text.</td>
    </tr>
    <tr>
      <td>`thin`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A title can have its font as thin</td>
    </tr>
    <tr>
      <td>`strong`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A title can have its font as strong</td>
    </tr>
    <tr>
      <td>`textAlign`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">left</td>
      <td>Align text in title.</td>
    </tr>
  </tbody>
</table>


### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Title, Box } from 'zebbra'

const Component = () => (
  <div>
    <Box color='danger' inverted>
      <Text>This is a normal text.</Text>
      <Text thin>This is a thin text.</Text>
      <Text strong>This is a strong text.</Text>
    </Box>
    <Box color='success' inverted>
      <Text color='primary'>Text with primary color</Text>
      <Text color='success'>Text with success color</Text>
      <Text color='danger'>Text with danger color</Text>
    </Box>
    <Box color='success' inverted>
      <Text size='small'>Text with small size</Text>
      <Text size='large'>Text with large size</Text>
    </Box>
  </div>
)

export default Component
```
