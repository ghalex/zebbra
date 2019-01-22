Use a **YesNo** container to ask a user to choose `Yes` or `No`. You can combine colors between **YesNo** container and buttons.

```jsx
import { ChildrenProps, Button, Icon } from "..";

<ChildrenProps p={2}>
  <YesNo variant="primary" onYes={() => console.log("yess")}>
    <Button variant="primary">
      <Icon name="check-circle" />
      Accept
    </Button>
  </YesNo>
  <YesNo variant="success" outlined onYes={() => console.log("yess")}>
    <Button variant="success" outlined>
      Like Zebbra ?
    </Button>
  </YesNo>
  <YesNo variant="danger" noBorders outlined left p="5px">
    <Button variant="danger">
      <Icon name="trash" />
      Delete
    </Button>
  </YesNo>
</ChildrenProps>;
```
