A text can have different colors & sizes:


```jsx
<Box variant='danger'>
  <Text p='5px 0'>This is a normal text.</Text>
  <Text p='5px 0' thin>This is a thin text.</Text>
  <Text p='5px 0'strong>This is a strong text.</Text>
</Box>
<Box variant='success'>
  <Text color='primary'>Text with primary color</Text>
  <Text color='success'>Text with success color</Text>
  <Text color='danger'>Text with danger color</Text>
</Box>
<Box variant='success'>
  <Text fontSize={0}>Text with small size</Text>
  <Text fontSize={4}>Text with large size</Text>
</Box>
```