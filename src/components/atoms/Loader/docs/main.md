# Loader

A **loader** alerts a user to wait for an activity to complete.

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
      <td>`children`</td>
      <td class='type' align="center">node</td>
      <td class='default-type' align="center"></td>
      <td>Primary content. **Ex.**: Loading...</td>
    </tr>
    <tr>
      <td>`inverted`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>A loader can have its colors inverted</td>
    </tr>
    <tr>
      <td>`vertical`</td>
      <td class='type' align="center">bool</td>
      <td class='default-type' align="center">false</td>
      <td>
        A loader can display it's children **vertical**.
      </td>
    </tr>
  </tbody>
</table>


### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Loader } from 'zebbra'

const Component = () => (
  <div>
    <Loader />
    <Loader color='danger' size='large' />
    <Loader color='#FFF000' />
    <Loader color='#FFF000' inverted vertical>Loading...</Loader>
  </div>
)

export default Component
```
