Simple Input with different type:

```jsx
import ChildrenProps from "../ChildrenProps";

<ChildrenProps my={2}>
  <Input placeholder="Type your name" />
  <Input placeholder="Type your password" type="password" />
</ChildrenProps>;
```

Imput with different size, color & icon:

```jsx
import ChildrenProps from "../ChildrenProps";

<ChildrenProps my={2}>
  <Input placeholder="Type your name" size="small" />
  <Input icon="search" placeholder="Search for tags..." />
  <Input
    icon="star"
    color="primary"
    borderColor="primary"
    placeholder="Search for stars..."
  />
  <Input
    icon="vcard-o"
    color="danger"
    placeholderColor="dangerLight"
    borderColor="danger"
    placeholder="Search for person..."
  />
  <Input
    icon="star"
    variant="primary"
    fontSize={3}
    placeholder="Search for stars..."
  />
</ChildrenProps>;
```
