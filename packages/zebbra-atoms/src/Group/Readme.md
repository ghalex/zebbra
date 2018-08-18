You can group buttons:

```jsx
<Box variant='primary'>
  <Group color='primary' outlined>
    <Button icon='star'>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </Group>
</Box>
```

Group buttons `vertical` and pass `size`:

```jsx
<Box variant='success'>
  <Group vertical size='small'>
    <Button color='success'>Left</Button>
    <Button color='gray'>Middle</Button>
    <Button color='gray'>Second</Button>
    <Button color='success'>Right</Button>
  </Group>
</Box>
```

Group `Button` and `Button` with icon:

```jsx
<Box variant='danger'>
  <Group>
    <Button color='danger'>I am star</Button>
    <Button color='#d61a5a' icon='star' />
  </Group>
</Box>
```

Group `Tags`:

```jsx
<Box color='success' inverted>
  <Group>
    <Tag color='black'>npm</Tag>
    <Tag color='primary'>v1.0.0</Tag>
  </Group>
  <Group>
    <Tag color='black'>build</Tag>
    <Tag color='success'>passed</Tag>
  </Group>
  <Group>
    <Tag color='primary'>javascript</Tag>
    <Tag color='greyLight' delete />
  </Group>
</Box>
```