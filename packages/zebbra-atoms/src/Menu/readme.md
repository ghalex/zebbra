Simple usage of Menu:

```jsx
initialState = {
  search: '',
  items: [
    {id: 1, name: 'Home', n: 0},
    {id: 2, name: 'Contact Us', n: 22},
    {id: 3, name: 'Comment', n: 4},
    {id: 4, name: 'Blog', n: 10},
    {id: 5, name: 'Terms', n: 8}
  ]
};

const filter = (item) => {
  return item.name.toLowerCase().search(state.search.toLowerCase()) > -1
};

<Menu onItemClick={(index, data) => console.log(index, data)}>
  <Menu.Header>
    <Input icon='search' type='text' value={state.search} onChange={(e, value) => setState({search: value})} />
  </Menu.Header>
  {
    state.items.filter(filter).map((data, i) => {
      return (
        <Menu.Item key={i} data={data}>
          {data.name}
          <Tag size='small' color={data.n > 5 ? 'primary' : 'grey'}>{data.n}</Tag>
        </Menu.Item>
      )
    })
  }
</Menu>
```