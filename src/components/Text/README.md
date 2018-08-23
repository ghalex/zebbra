A text can have different colors & sizes:


```jsx
<ChildrenProps p={1}>
  <Text>This is a normal text.</Text>
  <Text thin>This is a thin text.</Text>
  <Text strong>This is a strong text.</Text>
</ChildrenProps>
```

```jsx
<ChildrenProps py={1}>
  <Text color='primary'>Text with primary color</Text>
  <Text color='success'>Text with success color</Text>
  <Text color='danger'>Text with danger color</Text>
  <Text fontFamily='monospace'>Mono space text.</Text>
  <Text fontFamily='monospace' strong>Mono space text.</Text>
</ChildrenProps>
```

```jsx
<Text fontSize={0}>Text with small size</Text>
<Text fontSize={4}>Text with large size</Text>
```