Simple usage:

```jsx
<div>
  <Icon name='star' color='primary' />
  <Icon name='star' color='success' />
  <Icon name='star' color='black' />
  <Icon name='star' color='gray' />
  <Icon name='star' color='danger' shadow />
</div>
```

```jsx
<WithTheme name='github'>
  <Icon color='primary' name='star' />
</WithTheme>
```

Icon with color inverted:

```jsx
<div>
  <Icon name='star' color='black' inverted />
  <Icon name='star' color='gray' inverted />
  <Icon name='github' color='primary'inverted />
  <Icon name='gift' color='success' inverted shadow />
  <Icon name='bug' color='danger' fontSize={5} inverted shadow />
</div>
```

Round inverted icons:

```jsx
<div>
  <Icon name='star' color='black' inverted circular />
  <Icon name='star' color='gray' inverted circular/>
  <Icon name='github' color='primary'inverted circular/>
  <Icon name='gift' color='success' inverted shadow circular/>
  <Icon name='bug' color='danger' fontSize={5} inverted circular shadow />
</div>
```