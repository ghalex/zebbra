# Title

A component to use for **titles**  and **subtitles**.

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
      <td>`as`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">h3</td>
      <td>
        Element to render. <br />
        **Ex**:
        `h2`, `h3`, `h4` ...
      </td>
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
import { Title } from 'zebbra'

const Component = () => (
  <div>
    <Title>Title Normal</Title>
    <Title thin>Thin Title Normal</Title>
    <Title strong>Strong Title Normal</Title>

    <Title>Zebbra Title</Title>
    <Title subtitle thin size='small' color='gray'>This is a Zebbra subtitle</Title>

    <Title strong color='success' textAlign='center'>Zebbra Centered Title</Title>
    <Title subtitle size='small' color='successLight' textAlign='center'>This is a Zebbra subtitle</Title>
  </div>
)

export default Component
```
