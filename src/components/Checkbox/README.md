A **Checkbox** can have different colors and can have a content as label:

```jsx
<div>
  <Checkbox my={2}>Click <a href='#'>me</a> now</Checkbox>
  <Checkbox color='primary' borderColor='primary' my={2}>I like this checkbox</Checkbox>
  <Checkbox color='success' borderColor='success' my={2}>This <b>is</b> success</Checkbox>
  <Checkbox color='danger' borderColor='darkred' my={2}>
    <div>This text is <a href='#'>multiline</a></div>
    <div>and some other text.</div>
  </Checkbox>
</div>
```


A **Checkbox** can have different variants defined in theme:

```jsx
<div>
  <Checkbox variant='primary' my={2}>Primary</Checkbox>
  <Checkbox variant='secondary' my={2}>Secondary</Checkbox>
  <Checkbox variant='success' my={2}>Success</Checkbox>
  <Checkbox variant='danger' my={2}>Danger</Checkbox>
</div>
```

You can set different size:

```jsx
<div color='success' space='8px 0' inverted>
  <Checkbox checked fontSize={0} my={2}>A normal <a href='#'>checkbox</a></Checkbox>
  <Checkbox checked fontSize={2}>A big <a href='#'>checkbox</a></Checkbox>
</div>
```
