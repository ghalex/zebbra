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

Creat tags:

```jsx
<Box color='success' inverted>
  <Group fontSize={0}>
    <Button variant='black'>npm</Button>
    <Button variant='primary'>v1.0.0</Button>
  </Group>
  <Group fontSize={0}>
    <Button variant='black'>build</Button>
    <Button variant='success'>passed</Button>
  </Group>
  <Group fontSize={0}>
    <Button static variant='primary'>javascript</Button>
    <Button bg='greyLight' borderColor='greyLight' color='white' icon='remove' />
  </Group>
</Box>
```