You can use **Field** to create a form. Check this Login form example:

```jsx
<Box>
  <Field label='Email:' required>
    <Group fluid>
      <Button icon='envelope' color='#CCC' />
      <Input placeholder='Type your username' />
    </Group>
  </Field>

  <Field label='Password:'>
    <Group fluid>
      <Button icon='unlock' color='#CCC' />
      <Input placeholder='Type your password' type='password' />
    </Group>
  </Field>
  <Button color='primary'>Login</Button>
</Box>
```

