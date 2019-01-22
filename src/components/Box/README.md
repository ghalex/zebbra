A box to contain other elements

```jsx
import ChildrenProps from "../ChildrenProps";

<ChildrenProps mb={2}>
  <Box bg="primary" color="white" border={0}>
    Some text in box
  </Box>
  <Box bg="danger" color="white" border={0} stacked>
    Some text in box
  </Box>
  <Box variant="primary" color="primary" stacked>
    Small box with some text in box
  </Box>
  <Box variant="secondary">Secondary text in box</Box>
  <Box variant="success">Success text in box</Box>
  <Box variant="grey">Grey text in box</Box>
</ChildrenProps>;
```
