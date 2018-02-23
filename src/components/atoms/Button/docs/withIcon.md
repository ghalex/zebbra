# Button

Classic **button** with different icons.

### Demo:

<!-- STORY -->

### Code:

```js
import React from 'react'
import { Box, Button } from 'zebbra'

const Component = () => (
  <Box>
    <Button icon='cubes'>Cubes</Button>
    <Button icon='star' iconPosition='right' color='primary' >Primary</Button>
    <Button icon='rss' color='success'>Success</Button>
    <Button icon='shopping-basket' color='danger' outlined>Success</Button>
    <Button icon='shield' color='grey' />
  </Box>
)

export default Component
```
