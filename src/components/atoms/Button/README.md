# Button

### Usage

```js
import React from 'react'
import { Button } from 'zebbra'

const Component = () => (
  <Button color='primary'>Primary</Button>
)

export default Component
```

<!-- STORY -->

### Properties

* `onClick` - click callback
* `label` - button text

| propName | propType | defaultValue | isRequired |
|----------|----------|--------------|------------|
| onClick  | func     | -            |            |
| label    | string   | -            | +          |
| alert    | boolean   | false           | -          |
| success    | boolean   | false           | -          |


### Roadmap

#### Icons

```js
import Button from 'components/button';

render() {
  return (
    <Button icon="mail">Send mail</Button>
    <Button icon="trash" iconPosition="right">Remove</Button>
  );
}
```