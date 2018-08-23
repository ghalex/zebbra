Textarea with different colors:

```jsx
<ChildrenProps my={2}>
  <Textarea placeholder='Hello Textarea!' />
  <Textarea
    placeholder='Hello Primary. With 3 rows!'
    rows={3}
    bg='primary'
    color='white'
    placeholderColor='white'
    borderColor='primaryDark' />
  <Textarea
    placeholder='Hello Danger Textarea!'
    placeholderColor='dangerLight'
    color='danger'
    borderColor='danger' />
</ChildrenProps>
```