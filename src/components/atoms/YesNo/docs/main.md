# YesNo

A **YesNo** containar can be used ask user to choose yes or no after he clicks a button.

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
        A yesno can have different colors. <br />
        **Enum**:
        `primary`, `secondary`, `success`, `danger`, `white`, `black`, `grey`, `#FF0000`, ...
      </td>
    </tr>
    <tr>
      <td>`size`</td>
      <td class='type' align="center">string</td>
      <td class='default-type' align="center">normal</td>
      <td>
        A yesno can have different sizes. <br />
        **Enum**:
        `tiny`, `small`, `normal`, `medium`, `large`, `xlarge`, `huge`
      </td>
    </tr>
    <tr>
      <td>`isLeft`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A yesno can be display to the left</td>
    </tr>
    <tr>
      <td>`onYes`</td>
      <td class='type' align="center">func</td>
      <td class='default-type' align="center">null</td>
      <td>Called when user chooses yes</td>
    </tr>
    <tr>
      <td>`onNo`</td>
      <td class='type' align="center">func</td>
      <td class='default-type' align="center">null</td>
      <td>Called when user chooses no</td>
    </tr>
  </tbody>
</table>


### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { YesNo, Button, Icon } from 'zebbra'

const Component = () => (
  <div>
    <YesNo color='primary' outlined onYes={() => console.log('yess')}>
      <Button color='primary'>
        <Icon name='check-circle' />
        Accept
      </Button>
    </YesNo>
    <YesNo size='small' color='danger' tone={1} isLeft>
      <Button size='small' color='gray'>
        <Icon name='trash' />
        Delete
      </Button>
    </YesNo>
  </div>
)

export default Component
```
