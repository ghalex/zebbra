You can group buttons:

```jsx
<Box variant='primary'>
  <Group variant='primary' outlined>
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
    <Button variant='success'>Left</Button>
    <Button variant='grey'>Middle</Button>
    <Button variant='grey'>Second</Button>
    <Button variant='success'>Right</Button>
  </Group>
</Box>
```

Group `Button` and `Button` with icon:

```jsx
<Box variant='danger'>
  <Group>
    <Button variant='danger'>I am star</Button>
    <Button bg='dangerDark' color='white' borderColor='dangerDark' icon='star' />
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