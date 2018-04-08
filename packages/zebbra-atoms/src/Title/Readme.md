A Title can be have different `sizes` and be `strong` or `thin`:

```jsx
<Box color='danger' inverted>
  <Title>Title Normal</Title>
  <Title thin>Thin Title Normal</Title>
  <Title strong>Strong Title Normal</Title>
</Box>
```

A Title can be render as Subtitle and be centered:

```jsx
<Box color='success' inverted>
  <Title>Super Title</Title>
  <Title subtitle thin size='small' color='gray'>This is a Super subtitle</Title>
</Box>
<Box color='success' inverted>
  <Title strong color='success' textAlign='center'>Super Centered Title</Title>
  <Title subtitle size='small' color='successLight' textAlign='center'>This is a Super subtitle</Title>
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