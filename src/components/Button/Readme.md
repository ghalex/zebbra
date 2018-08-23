A button can have multiple variants:

```jsx
<ChildrenProps mr={1} mb={1}>
  <Button>Normal</Button>
  <Button variant='primary'>Primary</Button>
  <Button variant='secondary'>Secondary</Button>
  <Button variant='success'>Success</Button>
  <Button variant='danger'>Danger</Button>
  <Button variant='grey'>Danger</Button>
  <Button color='white' bg='black' borderColor='black'>Black</Button>
</ChildrenProps>

```

You can create your own button:

```jsx
<ChildrenProps mr={1} mb={1}>
  <Button color='white' border={2} bg='primaryLight' borderColor='primaryDark'>Custom</Button>
  <Button bg='yellowgreen' color='white' borderRadius={0}>Secondary</Button>
</ChildrenProps>
```

A button can be `outlined`:

```jsx
<ChildrenProps mr={1} mb={1}>
  <Button variant='primary' outlined>Primary</Button>
  <Button variant='success' outlined>Success</Button>
  <Button variant='danger' outlined>Danger</Button>
  <Button variant='grey' outlined>Grayscale</Button>
  <Button color='white' bg='black' outlined>Black</Button>
</ChildrenProps>
```

A button can show a loading indicator:

```jsx
<ChildrenProps mr={1} mb={1}>
  <Button loading>Normal</Button>
  <Button variant='primary' loading>Primary</Button>
  <Button variant='success' loading>Success</Button>
  <Button variant='danger' loading>Danger</Button>
  <Button bg='gray' color='white' loading>Grayscale</Button>
  <Button bg='black' color='white' loading>Black</Button>
</ChildrenProps>
```

A button can have different sizes:

```jsx
<ChildrenProps mr={1} mb={1}>
  <Button fontSize={0} variant='primary'>Tiny</Button>
  <Button fontSize={1} variant='primary'>Small</Button>
  <Button fontSize={2} variant='success'>Normal</Button>
  <Button fontSize={3} variant='danger'>Medium</Button>
  <Button fontSize={4} variant='grey'>Large</Button>
  <Button fontSize={5} variant='black' outlined>XLarge</Button>
</ChildrenProps>
```

A button can have an icon:

```jsx
<ChildrenProps mr={1} mb={1}>
  <Button variant='grey' outlined icon='cubes'>Cubes</Button>
  <Button variant='primary' icon='star' iconPosition='right'>Primary</Button>
  <Button variant='success' icon='rss'>Success</Button>
  <Button variant='danger' icon='shopping-basket' outlined>Success</Button>
  <Button variant='grey' icon='shield' />
  <Button variant='grey' icon='shield' fontSize={0} />
  <Button variant='grey' icon='remove' fontSize={0} />
</ChildrenProps>
```