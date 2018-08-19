A Title can be have different `sizes` and be `strong` or `thin`:

```jsx
<Box variant='danger'>
  <Title>Title Normal</Title>
  <Title thin>Thin Title Normal</Title>
  <Title strong>Strong Title Normal</Title>
</Box>
```

A Title can be render as Subtitle and be centered:

```jsx
<Box variant='success'>
  <Title>Super Title</Title>
  <Title subtitle mt={0} color='gray'>This is a super subtitle</Title>
</Box>
<Box variant='success'>
  <Title strong color='success' textAlign='center'>Super Centered Title</Title>
  <Title subtitle color='successLight' textAlign='center'>This is a super subtitle</Title>
</Box>
```

A Title can have different colors:

```jsx
<Box color='success' inverted>
  <Title color='primary'>Title Primary</Title>
  <Title color='success'>Title Success</Title>
  <Title color='danger'>Title Danger</Title>
  <Title color='purple'>Title Purple</Title>
  <Title color='grey'>Title Grey</Title>
</Box>
```