# Textarea

The multiline textarea and its variations

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
  </tbody>
</table>


### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Textarea, Text, Box } from 'zebbra'
import { ThemeProvider } from 'styled-components'
import { bulma } from 'themes'

const Component = () => (
  <div>
    <Box>
      <Textarea placeholder='Hello Textarea!' size='small' />
    </Box>
    <Box>
      <Textarea placeholder='Hello Textarea!' color='primary' />
    </Box>
    <ThemeProvider theme={bulma}>
      <Box>
        <Text padding='5px 0'>Theme <b>Bulma</b>:</Text>
        <Textarea placeholder='Hello Textarea!' />
      </Box>
    </ThemeProvider>
  </div>
)

export default Component
```
