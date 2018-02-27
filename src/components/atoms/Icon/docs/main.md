# Icon

Zebbra uses **FontAwesome** icons.

~~~~
<link rel='stylesheet' type='text/css' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' />
~~~~
For a list of all icons check **FontAwesome** [webiste](https://fontawesome.com/v4.7.0/icons/).

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
      <td>`name`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center"></td>
      <td>
        FontAwesome icon name.
      </td>
    </tr>
    <tr>
      <td>`color`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">null</td>
      <td>
        A icon can have different colors. <br />
        **Enum**:
        `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
      </td>
    </tr>
    <tr>
      <td>`size`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">normal</td>
      <td>
        A icon can have different sizes. <br />
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
import { Icon } from 'zebbra'

const Component = () => (
  <div>
    <Icon name='star' color='primary' />
    <Icon name='github' color='success' />
    <Icon name='bug' color='black' inverted />
    <Icon name='gift' color='gray' size='large' />
  </div>
)

export default Component
```
