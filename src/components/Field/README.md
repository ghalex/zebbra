You can use **Field** to create a form. Check this Login form example:

```jsx
<div>
  <Field label='Email:' required>
    <Group fluid>
      <Button icon='envelope' bg='#CCC' />
      <Input fluid placeholder='Type your username' />
    </Group>
  </Field>

  <Field label='Password:'>
    <Group fluid>
      <Button icon='unlock' bg='#CCC' />
      <Input fluid placeholder='Type your password' type='password' />
    </Group>
  </Field>
  <Button variant='primary'>Login</Button>
</div>
```

