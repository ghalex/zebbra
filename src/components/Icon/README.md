Simple usage:

```jsx
<Box color='success' inverted>
  <Icon name='star' color='primary' />
  <Icon name='star' color='success' />
  <Icon name='star' color='black' />
  <Icon name='star' color='gray' />
  <Icon name='star' color='danger' shadow />
</Box>
```

Icon with color inverted:

```jsx
<Box color='success' inverted>
  <Icon name='star' color='black' inverted />
  <Icon name='star' color='gray' inverted />
  <Icon name='github' color='primary'inverted />
  <Icon name='gift' color='success' inverted shadow />
  <Icon name='bug' color='danger' fontSize={5} inverted shadow />
</Box>
```

Round inverted icons:

```jsx
<Box color='success' inverted>
  <Icon name='star' color='black' inverted circular />
  <Icon name='star' color='gray' inverted circular/>
  <Icon name='github' color='primary'inverted circular/>
  <Icon name='gift' color='success' inverted shadow circular/>
  <Icon name='bug' color='danger' fontSize={5} inverted circular shadow />
</Box>
```