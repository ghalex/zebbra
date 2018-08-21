A **Checkbox** can have different colors and can have a content as label:

```jsx
<div>
  <Checkbox>Click <a href='#'>me</a> now</Checkbox>
  <Checkbox color='primary' borderColor='primary'>I like this checkbox</Checkbox>
  <Checkbox color='success' borderColor='success'>This <b>is</b> success</Checkbox>
  <Checkbox color='danger' borderColor='darkred'>
    <div>This text is <a href='#'>multiline</a></div>
    <div>and some other text.</div>
  </Checkbox>
</div>
```


A **Checkbox** can have different variants defined in theme:

```jsx
<div>
  <Checkbox variant='primary'>Primary</Checkbox>
  <Checkbox variant='secondary'>Secondary</Checkbox>
  <Checkbox variant='success'>Success</Checkbox>
  <Checkbox variant='danger'>Danger</Checkbox>
</div>
```

You can set different size:

```jsx
<div color='success' space='8px 0' inverted>
  <Checkbox checked fontSize={0}>A normal <a href='#'>checkbox</a></Checkbox>
  <Checkbox checked fontSize={2}>A big <a href='#'>checkbox</a></Checkbox>
</div>
```
