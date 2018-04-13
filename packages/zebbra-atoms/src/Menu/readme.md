Simple usage:

```jsx
<Menu size='small'>
  <Menu.Header><b>This is header</b></Menu.Header>
  <Menu.Item>Item no.1</Menu.Item>
  <Menu.Item>Item no.2</Menu.Item>
  <Menu.Item>Item no.3</Menu.Item>
</Menu>
```

Complex menu with header, scroll, search & selected:

```jsx
initialState = {
  search: '',
  items: [
    {id: 1, name: 'Home', n: 0},
    {id: 2, name: 'Contact Us', n: 22},
    {id: 3, name: 'Comment', n: 4},
    {id: 4, name: 'Blog', n: 10},
    {id: 5, name: 'Terms', n: 11},
    {id: 6, name: 'Last', n: 4}
  ]
};

const filter = (item) => {
  return item.name.toLowerCase().search(state.search.toLowerCase()) > -1
};

<Menu
  onItemClick={item => console.log(item)}
  height={160}
  header={
    <Menu.Header>
      <Input size='small' icon='search' type='text' value={state.search} onChange={(e, value) => setState({search: value})} />
    </Menu.Header>
  }>

  {(selected) => (
    state.items.filter(filter).map((data, i) => {
      let active = selected && selected.data.id === data.id
      return (
        <Menu.Item key={i} data={data} color={active ? 'primary' : null}>
          <Text inline>{data.name}</Text>
          <Tag size='small' color={data.n > 5 ? 'danger' : '#CCC'}>{data.n}</Tag>
        </Menu.Item>
      )
    })
  )}
</Menu>
```