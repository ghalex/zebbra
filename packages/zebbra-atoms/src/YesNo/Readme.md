Use a **YesNo** container to ask a user to choose `Yes` or `No`. You can combine colors between **YesNo** container and buttons.

```jsx
<Box color='success' inverted>
  <YesNo color='primary' onYes={() => console.log('yess')} padding='5px'>
    <Button color='primary'>
      <Icon name='check-circle' />
      Accept
    </Button>
  </YesNo>
  <br />
  <YesNo color='success' outlined onYes={() => console.log('yess')} padding='5px'>
    <Button color='success' outlined>
      Like Zebbra ?
    </Button>
  </YesNo>
  <br />
  <YesNo size='small' color='danger' outlined left padding='5px'>
    <Button size='small' color='danger'>
      <Icon name='trash' />
      Delete
    </Button>
  </YesNo>
</Box>
```