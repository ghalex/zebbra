A button can have multiple colors:

```jsx
<Box variant='success'>
  <Button border={1}>Simple</Button>
  <Button variant='normal'>Normal</Button>
  <Button static variant='primary'>Primary</Button>
  <Button variant='secondary'>Secondary</Button>
  <Button variant='success'>Success</Button>
  <Button variant='danger' disabled>Danger</Button>
  <Button color='white' bg='grey'>Grayscale</Button>
  <Button color='white' bg='black'>Black</Button>
</Box>
```

A button can be `outlined`:

```jsx
<Box color='success' inverted>
  <Button outlined>Normal</Button>
  <Button color='primary' outlined>Primary</Button>
  <Button color='success' outlined>Success</Button>
  <Button color='danger' outlined>Danger</Button>
  <Button color='gray' outlined>Grayscale</Button>
  <Button color='black' outlined>Black</Button>
</Box>
```

A button can have it's colors `inverted`:

```jsx
<Box color='success'>
  <Button inverted>Normal</Button>
  <Button color='primary' inverted>Primary</Button>
  <Button color='success' inverted>Success</Button>
  <Button color='danger' inverted>Danger</Button>
  <Button color='gray' inverted>Grayscale</Button>
  <Button color='black' inverted>Black</Button>
</Box>
```

A button can show a loading indicator:

```jsx
<Box color='success' inverted>
  <Button loading>Normal</Button>
  <Button color='primary' loading>Primary</Button>
  <Button color='success' loading>Success</Button>
  <Button color='danger' loading>Danger</Button>
  <Button color='gray' loading>Grayscale</Button>
  <Button color='black' loading>Black</Button>
</Box>
```

A button can have different sizes:

```jsx
<Box color='success' inverted>
  <Button size='tiny'>Tiny</Button>
  <Button size='small' color='primary'>Small</Button>
  <Button size='normal' color='success'>Normal</Button>
  <Button size='medium' color='danger'>Medium</Button>
  <Button size='large' color='gray'>Large</Button>
  <Button size='xlarge' color='black'>XLarge</Button>
</Box>
```

A button can have an icon:

```jsx
<Box color='success' inverted>
  <Button icon='cubes'>Cubes</Button>
  <Button color='primary' icon='star' iconPosition='right'>Primary</Button>
  <Button color='success' icon='rss'>Success</Button>
  <Button color='danger' icon='shopping-basket' outlined>Success</Button>
  <Button color='grey' icon='shield' />
</Box>
```