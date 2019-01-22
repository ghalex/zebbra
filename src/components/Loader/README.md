A loader can have multiple colors and sizes:

```jsx
import { ChildrenProps } from "..";

<ChildrenProps mr={2}>
  <Loader />
  <Loader color="danger" />
  <Loader color="#FFF000" fontSize={24} />
</ChildrenProps>;
```

```jsx
<Loader color="blue">Loading...</Loader>
```

```jsx
import { Box } from "..";

<Box bg="success" borderColor="success">
  <Loader color="white" vertical>
    Loading...
  </Loader>
</Box>;
```
