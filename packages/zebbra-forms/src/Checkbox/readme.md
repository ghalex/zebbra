A **Checkbox** can have different colors and can have a content as label:

```jsx
<Box space='8px 0'>
  <Checkbox checked>Click <a href='#'>me</a> now</Checkbox>
  <Checkbox color='primary'>I like this checkbox</Checkbox>
  <Checkbox checked color='success'>This <b>is</b> success</Checkbox>
  <Checkbox color='danger'>
    <div>This text is <a href='#'>multiline</a></div>
    <div>and some other text.</div>
  </Checkbox>
</Box>
```

You can set different size:

```jsx
<Box color='success' inverted>
  <Checkbox checked size='small'>A small <a href='#'>checkbox</a></Checkbox>
  <Checkbox checked size='large'>A big <a href='#'>checkbox</a></Checkbox>
</Box>
```
