A **Switch** can have different colors:

```jsx
import { ChildrenProps } from "..";

<ChildrenProps my={2}>
  <Switch>Do you like Zebbra ?</Switch>
  <Switch bgChecked="success" fontSize={0}>
    Small Switch
  </Switch>
  <Switch bg="grey" bgChecked="primary">
    Primary Checked
  </Switch>
  <Switch borderRadius={0} p="2px">
    Small padding
  </Switch>
  <Switch
    border={2}
    borderColor="primary"
    bg="white"
    bgChecked="greyLight"
    bgThumb="primary"
  >
    Custom
  </Switch>
</ChildrenProps>;
```

With different sizes:

```jsx
import { ChildrenProps } from "..";

<ChildrenProps my={2}>
  <Switch fontSize={4}>Big/Small</Switch>
  <Switch fontSize={2}>Big Square</Switch>
</ChildrenProps>;
```
