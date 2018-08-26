A **Checkbox** can have different colors and can have a content as label:

```jsx
<ChildrenProps my={1}>
  <Checkbox>Click <a href='#'>me</a> now</Checkbox>
  <Checkbox color='primary' borderColor='primary'>I like this checkbox</Checkbox>
  <Checkbox color='success' borderColor='success'>This <b>is</b> success</Checkbox>
  <Checkbox color='danger' borderColor='darkred'>
    <div>This text is <a href='#'>multiline</a></div>
    <div>and some other text.</div>
  </Checkbox>
</ChildrenProps>
```

Different theme:

```jsx
<ChildrenProps my={1}>
  <WithTheme name='github'>
    <Checkbox variant='primary'>Click <a href='#'>me</a> now</Checkbox>
  </WithTheme>
</ChildrenProps>
```


A **Checkbox** can have different variants defined in theme:

```jsx
<ChildrenProps my={1}>
  <Checkbox variant='primary'>Primary</Checkbox>
  <Checkbox variant='secondary'>Secondary</Checkbox>
  <Checkbox variant='success'>Success</Checkbox>
  <Checkbox variant='danger'>Danger</Checkbox>
</ChildrenProps>
```

You can set different size:

```jsx
<div>
  <Checkbox checked fontSize={0} my={2}>A normal <a href='#'>checkbox</a></Checkbox>
  <Checkbox checked fontSize={2}>A big <a href='#'>checkbox</a></Checkbox>
</div>
```
