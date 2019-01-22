You can group buttons:

```jsx
import Button from "../Button";

<Group variant="primary" outlined>
  <Button icon="star">Left</Button>
  <Button>Middle</Button>
  <Button>Right</Button>
</Group>;
```

Group buttons `vertical` and pass `size`:

```jsx
import Button from "../Button";

<Group vertical>
  <Button variant="success">Left</Button>
  <Button variant="grey">Middle</Button>
  <Button variant="grey">Second</Button>
  <Button variant="success">Right</Button>
</Group>;
```

Group `Button` and `Button` with icon:

```jsx
import Button from "../Button";

<Group>
  <Button variant="danger">I am star</Button>
  <Button bg="dangerDark" color="white" borderColor="dangerDark" icon="star" />
</Group>;
```

Creat tags:

```jsx
import ChildrenProps from "../ChildrenProps";
import Button from "../Button";

<ChildrenProps mr={1} fontSize={0}>
  <Group>
    <Button variant="black">npm</Button>
    <Button variant="primary">v1.0.0</Button>
  </Group>
  <Group>
    <Button variant="black">build</Button>
    <Button variant="success">passed</Button>
  </Group>
  <Group>
    <Button static variant="primary">
      javascript
    </Button>
    <Button
      bg="greyLight"
      borderColor="greyLight"
      color="white"
      icon="remove"
    />
  </Group>
</ChildrenProps>;
```
