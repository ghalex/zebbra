Simple usage:

```jsx
<Menu onItemClick={item => console.log(item)}>
  <Menu.Header><b>This is header</b></Menu.Header>
  <Menu.Divider />
  <Menu>
    <Menu.Item bg='greyUltraLight'><Icon name='star' />Item no.1</Menu.Item>
    <Menu.Item><Icon name='bug' />Item no.2</Menu.Item>
    <Menu.Item><Icon name='search' />Item no.3</Menu.Item>
  </Menu>
  <Menu.Header color='white' bg='success'><b>Second Header</b></Menu.Header>
  <Menu maxHeight={120}>
    <Menu.Item>Item no.1</Menu.Item>
    <Menu.Item>Item no.2</Menu.Item>
    <Menu.Item>Item no.3</Menu.Item>
    <Menu.Item>Item no.4</Menu.Item>
  </Menu>
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

<Menu onItemClick={item => console.log(item)}>
  {(selected) => {
    const items = state.items.filter(filter).map((data, i) => {
      let active = selected && selected.data.id === data.id
      return (
        <Menu.Item key={i} data={data} color={active ? 'primary' : null}>
          <Text display='inline-block'>{data.name}</Text>
          <Button className='tag' fontSize={10} variant={data.n > 5 ? 'danger' : 'grey'}>{data.n}</Button>
        </Menu.Item>
      )
    })

    return (
      <Menu>
        <Menu.Header>
          <Input
            icon='search'
            type='text'
            fluid
            value={state.search}
            onChange={(e, value) => setState({search: value})} />
        </Menu.Header>
        <Menu.Divider />
        <Menu maxHeight={180}>
          {items}
        </Menu>
      </Menu>
    )
  }}
</Menu>
```