# Button

Classic **button** with different sizes.

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Box, Button } from 'zebbra'

const Component = () => (
  <Box>
    <Button size='tiny' color='primary'>Primary</Button>
    <Button size='small' color='primary' outlined>Primary</Button>
    <Button size='large' color='primary' loading>Primary</Button>
  </Box>
)

export default Component
```