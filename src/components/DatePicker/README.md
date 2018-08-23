You can use **DatePicker** to let user select a date.

```jsx
<DatePicker
  color='primary'
  borderColor='primary'
  fontSize={2}
  my={2}
  onChange={v => console.log(v.toDate())} />

<DatePicker
  color='white'
  borderColor='successDark'
  bg='success'
  fontSize={1}
  onChange={v => console.log(v.toDate())} />
```

